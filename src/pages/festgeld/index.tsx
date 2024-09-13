import PageLayout from "@/components/layout/PageLayout";
import axiosInstance from "@/config/http";
import { useEffect, useState } from "react";
import useImage from "use-image";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/global/Button";
import Link from "next/link";
import Input from "@/components/global/Input";
import TableBar from "@/components/global/TableBar";
import { useGetOffersQuery } from "@/store/reducers/offers/offersApi";
import Select from "@/components/global/Select";
import UserData from "@/components/global/UserData";
import {
  useGetBanksQuery,
  useGetCountriesQuery,
} from "@/store/reducers/banks/banksAPI";
import { getSession } from "next-auth/react";

interface Offer {
  oid: string;
  isOvernight: boolean;
  minDeposit: number;
  maxDeposit: number;
  duration: number;
  isForeignCurrency: boolean;
  interestRate: number;
  currency: string;
  bid: string;
  bank: {
    bid: string;
    name: string;
    site: string;
    description: string;
    permalink: string;
    logo: string;
    insuranceName: string;
    insuranceDescription: string;
    countryCode: string;
  };
}

interface Option {
  id: number;
  name: number | string;
}

const duration = [
  { id: 1, name: "1 Jahr" },
  { id: 2, name: "2 Jahr" },
  { id: 3, name: "3 Jahr" },
  { id: 4, name: "4 Jahr" },
  { id: 5, name: "5 Jahr" },
  { id: 6, name: "6 Jahr" },
  { id: 7, name: "7 Jahr" },
  { id: 8, name: "8 Jahr" },
  { id: 9, name: "9 Jahr" },
  { id: 10, name: "10 Jahr" },
];

const Offers = () => {
  const { data: offersArr, isLoading: isLoading } = useGetOffersQuery();
  const { data: banksArr } = useGetBanksQuery();
  const { data: countriesArr } = useGetCountriesQuery();
  const [selectedDuration, setSelectedDuration] = useState<Option>({
    id: 0,
    name: "",
  });
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [sortedData, setSortedData] = useState<Offer[]>([]); // Состояние для отсортированных данных
  const [inputValue, setInputValue] = useState<string>("");
  const [workingValue, setWorkingValue] = useState<string>("");

  const addCommas = (num: any) => num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const removeCommas = (num: any) => num?.toString().replace(/\./g, "");
  const removeNonNumeric = (num: any) => num?.toString().replace(/[^0-9]/g, "");

  const setInputValues = (e: any) => {
    setInputValue(addCommas(removeNonNumeric(e.target.value)))
    setWorkingValue(removeCommas(e.target.value))
  }

  // Функция для фильтрации данных
  const filterData = () => {
    if (!offersArr) return [];
    
    let filteredData = [...offersArr];
    
    filteredData = filteredData.filter((item) => !item.isOvernight);

    const seenBankBids = new Set();
    
    if (workingValue) {
      filteredData = filteredData.filter(
        (item) => item.minDeposit <= parseInt(workingValue as string)
      );
    }
    
    if (selectedDuration.id !== 0) {
      filteredData = filteredData.filter(
        (item) => item.duration / 12 === parseInt(selectedDuration.name as string)
      );
    }
    const filteredBanks = [];
    
    // Сортировка по наибольшему interest_rate
    filteredData.sort((a, b) => b.interestRate - a.interestRate);

    for (const bank of filteredData) {
      if (!seenBankBids.has(bank.bid) && !bank.isOvernight) {
        filteredBanks.push(bank);
        seenBankBids.add(bank.bid);
      }
    }
  
    return filteredBanks;
  };

  // Функция для сортировки данных
  const sortData = (data: Offer[]) => {
    if (sortBy) {
      console.log(sortOrder);
      const sortedData = [...data].sort((a: any, b: any) => {
        if (sortOrder === "asc" && sortBy === "bank") {
          return a.bank.name.localeCompare(b.bank.name);
        } else if (sortOrder !== "asc" && sortBy === "bank") {
          return b.bank.name.localeCompare(a.bank.name);
        }
        if (sortOrder === "asc" && sortBy === "percent") {
          return a.interestRate - b.interestRate;
        } else if (sortOrder !== "asc" && sortBy === "percent") {
          return b.interestRate - a.interestRate;
        }
        if (sortOrder === "asc" && sortBy === "duration") {
          return a.duration - b.duration;
        } else if (sortOrder !== "asc" && sortBy === "duration") {
          return b.duration - a.duration;
        }
      });
      console.log(sortedData);
      return sortedData;
    }
    return data;
  };

  // Функция для обновления состояния сортированных данных
  const handleSort = (category: string) => {
    if (sortBy === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(category);
      setSortOrder("asc");
    }
  };

  // Обновляем отсортированные данные при изменении сортировки или фильтрации
  useEffect(() => {
    const sorted = sortData(filterData());
    // console.log(sorted)
    setSortedData(sorted);
  }, [sortBy, sortOrder, workingValue, selectedDuration, offersArr]);

  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState<number>(itemsPerPage);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const visibleData = sortedData?.slice(0, visibleItems);

  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>
      {/* <PageLayout> */}
      <UserData />
      <div className="flex w-full justify-center items-center gap-x-[105px] mt-[30px]">
        <div className="max-w-[255px]">
          <Input
            type="text"
            lable=""
            value={inputValue}
            onChange={setInputValues}
            withTopText
            topText="Laufzeit"
          />
        </div>
        <div className="w-full max-w-[172px]">
          <Select
            lable=""
            oprtionsList={duration}
            placeholder="1 Jahr"
            state={selectedDuration}
            setState={setSelectedDuration}
            withTopText
            topText="Anlagebetrag"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1276px] flex px-5 mt-[30px]">
          <div
            className="flex gap-x-2 w-full ml-0 md:ml-[20px] max-w-[155px] cursor-pointer"
            onClick={() => handleSort("percent")}
          >
            <p className="text-sm text-gray1">ZINSSATZ</p>
            <div className="flex flex-col gap-y-1 mt-[1px]">
              <Image
                src={"./assets/icons/gray-arrow.svg"}
                alt=""
                width={8}
                height={5}
                className=" rotate-180"
              />
              <Image
                src={"./assets/icons/gray-arrow.svg"}
                alt=""
                width={8}
                height={5}
              />
            </div>
          </div>
          <div
            className="md:flex gap-x-2 w-full ml-[60px] max-w-[175px] cursor-pointer hidden"
            onClick={() => handleSort("duration")}
          >
            <p className="text-sm text-gray1">LAUFZEIT</p>
            <div className="flex flex-col gap-y-1 mt-[1px]">
              <Image
                src={"./assets/icons/gray-arrow.svg"}
                alt=""
                width={8}
                height={5}
                className=" rotate-180"
              />
              <Image
                src={"./assets/icons/gray-arrow.svg"}
                alt=""
                width={8}
                height={5}
              />
            </div>
          </div>
          <div
            className="flex gap-x-2 w-full -ml-[35px] md:ml-0 cursor-pointer max-w-[75px] md:max-w-[175px]"
            onClick={() => handleSort("bank")}
          >
            <p className="text-sm text-gray1">BANK</p>
            <div className="flex flex-col gap-y-1 mt-[1px]">
              <Image
                src={"./assets/icons/gray-arrow.svg"}
                alt=""
                width={8}
                height={5}
                className=" rotate-180"
              />
              <Image
                src={"./assets/icons/gray-arrow.svg"}
                alt=""
                width={8}
                height={5}
              />
            </div>
          </div>

          <div className="md:flex gap-x-2 w-full ml-[60px] max-w-[175px] hidden">
            <p className="text-sm text-gray1">LAND</p>
          </div>
          <div className="flex gap-x-2 w-full ml-0 md:ml-[35px] max-w-[175px]">
            <p className="text-sm text-gray1">ZINSERTRAG + PRÄMIE</p>
          </div>
        </div>
      </div>

      <div className="mt-[30px] w-full flex flex-col items-center">
        {visibleData?.map((item: any, key: number) => {
          return (
            <TableBar
              withButton
              offersPage
              key={key}
              data={item}
              banksArr={banksArr}
              countriesArr={countriesArr}
              inputValue={+workingValue}
            />
          );
        })}
      </div>
      {offersArr && visibleItems < offersArr.length && (
        <div className="w-full flex justify-center mt-[60px] mb-[100px]">
          <Button
            lable="Mehr laden"
            variant="outline-gray"
            func={handleShowMore}
          />
        </div>
      )}
      {/* </PageLayout> */}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        premanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Offers;
