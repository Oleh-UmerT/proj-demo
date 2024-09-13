import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/global/Button";
import Link from "next/link";
import Input from "@/components/global/Input";
import { useGetOfferQuery } from "@/store/reducers/offers/offersApi";
import { useRouter } from "next/router";
import Checkbox from "@/components/global/Checkbox";
import { useEffect, useState } from "react";
import UserData from "@/components/global/UserData";
import { useOfferApplyMutation } from "@/store/reducers/user/userApi";
import { environment } from "../../../projectConfig";
import { useGetCountriesQuery } from "@/store/reducers/banks/banksAPI";
import { getSession } from "next-auth/react";
import axios from "axios";
import GToggle from "../../../public/assets/icons/green-toggle.svg";
import BlueI from "../../../public/assets/icons/blue-i.svg";

function findByCountryCode(countries: any[] | undefined, countryCode: any) {
  return countries?.find((item) => item.code === countryCode);
}

const OfferCreate = ({ session }: any) => {
  const router = useRouter();
  const { id, iv } = router.query;
  const { data: offer, isLoading: isLoading } = useGetOfferQuery(id as string);
  const { data: countriesArr } = useGetCountriesQuery();
  const [apply, response] = useOfferApplyMutation();
  const [check, setCheck] = useState<boolean>(false);
  const [selectedContry, setSelectedContry] = useState<any>();
  const [inputValue, setInputValue] = useState<string>("0");
  const [workingValue, setWorkingValue] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setInputValue(addCommas(removeNonNumeric(iv)));
    setWorkingValue(iv ? +iv : 0);
  }, [iv]);

  const addCommas = (num: any) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const removeCommas = (num: any) => num?.toString().replace(/\./g, "");
  const removeNonNumeric = (num: any) => num?.toString().replace(/[^0-9]/g, "");

  const setInputValues = (e: any) => {
    setInputValue(addCommas(removeNonNumeric(e.target.value)));
    setWorkingValue(removeCommas(e.target.value));
  };

  useEffect(() => {
    const country = findByCountryCode(countriesArr, offer?.bank?.countryCode);
    setSelectedContry(country);
  }, [countriesArr, offer]);

  const submitApply = async () => {
    if (workingValue > 0 && check) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/apply`,
        {
          amount: workingValue,
          oid: router.query.id as string,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.user?.token}`,
          },
        }
      );
      // await apply({ amount: workingValue, oid: router.query.id as string });
      if (response?.status === 201) {
        setSuccess(true);
      }
      // console.log(response);
    }
  };

  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>{" "}
      {/* <PageLayout> */}
      <UserData />
      {success && (
        <div className="w-full flex flex-col items-center gap-y-4 mt-[40px]">
          <div className="border border-solid border-green bg-l-green h-[52px] w-[1276px] rounded-lg py-4 px-3.5 flex items-center gap-x-3">
            <Image src={GToggle} alt="" width={24} height={24} />
            <p className="text-dark2">
              Ihr Auftrag wurde am 0 um 0 Uhr entgegengenommen.
            </p>
          </div>
          <div className="border border-solid border-blue bg-l-blue h-[68px] w-[1276px] rounded-lg py-4 px-3.5 flex items-start gap-x-3">
            <Image src={BlueI} alt="" width={24} height={24} />
            <p className="text-dark2">
              Ihr Antrag wurde von uns entgegengenommen.
              <br />
              Nach erfolgreicher Identifikation Ihrer Daten, können wir mit der
              Eröffnung der Anlage fortfahren.
            </p>
          </div>
        </div>
      )}
      <div className="flex w-full flex-col lg:flex-row justify-center px-5 lg:px-0 gap-8 pt-[40px] mb-[150px]">
        <div className="w-full max-w-[736px]">
          <h1 className=" text-dark text-3xl font-semibold">
            Ihre Anlageauswahl
          </h1>
          <div className="w-full max-w-[736px] h-[1100px] lg:h-[922px] rounded-lg bg-body flex flex-col items-center gap-y-2 p-5 mt-[32px]">
            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Bank</p>
              <p className="font-semibold text-dark">{offer?.bank.name}</p>
            </div>

            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Land</p>
              <p className="font-semibold text-dark">{selectedContry?.name}</p>
            </div>

            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Zinssatz</p>
              <p className="font-semibold text-dark">
                {offer?.interestRate} % / p.a
              </p>
            </div>

            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Laufzeit</p>
              <p className="font-semibold text-dark">
                {offer?.duration} Monate
              </p>
            </div>

            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Zinstyp</p>
              <p className="font-semibold text-dark">Fester Zins</p>
            </div>

            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Mindestbetrag</p>
              <p className="font-semibold text-dark">
                € {addCommas(offer?.minDeposit)}
              </p>
            </div>

            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Maximalbetrag</p>
              <p className="font-semibold text-dark">
                € {addCommas(offer?.maxDeposit)}
              </p>
            </div>
            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Zinszahlung</p>
              <p className="font-semibold text-dark">
                Zinszahlung am Ende der Laufzeit
              </p>
            </div>
            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Kosten</p>
              <p className="font-semibold text-dark">Keine Kosten</p>
            </div>
            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Verfügbarkeit</p>
              <p className="font-semibold text-dark">Bei Laufzeitende</p>
            </div>
            <div className="w-full flex justify-between bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-12">
              <p className="text-gray1">Anlagewährung</p>
              <p className="font-semibold text-dark">{offer?.currency}</p>
            </div>
            <div className="w-full flex flex-col bg-white rounded-lg border-b border-solid border-gray2 py-3 px-5 h-[460px] lg:h-[266px]">
              <p className="text-gray1">Einlagensicherung</p>
              <p className="text-dark mt-2">
                {offer?.bank.insuranceDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[500px] mt-[48px] mb-[60px]">
          <div className="flex gap-y-5 mt-5 flex-col bg-white gap-1 py-5 px-5 w-full h-[572px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <div className="w-full flex justify-center">
              <Image
                src={`https://zinsplan.com/${offer?.bank?.logo}`}
                alt="bank-logo"
                width={175}
                height={60}
              />
            </div>
            <p className="text-dark font-semibold text-xl">
              Gewünschter Anlagebetrag
            </p>
            <Input
              lable="Anlagebetrag:*"
              type="text"
              value={inputValue}
              onChange={setInputValues}
            />

            <p className="text-dark font-semibold text-xl">
              Rechtliche Hinweise
            </p>
            <div className="flex items-start gap-2">
              <Checkbox state={check} setState={setCheck} />
              <p className="text-gray1 mb-[4px] text-sm">
                Ich beauftrage {environment.company.site_name}, mich gegenüber
                WISE zu identifizieren und meine Kontoeröffnungsunterlagen
                weiterzuleiten. Nach erfolgreicher Eröffnung meines Kontos bei
                WISE beauftrage ich {environment.company.site_name}, den
                gewünschten Betrag auf dieses Konto zu überweisen.*
              </p>
            </div>
            <Button
              variant="outline-orange"
              lable="Weiter"
              func={submitApply}
            />
            <div className="w-full flex justify-center">
              <Link href="/festgeld" className=" underline text-gray1">
                Abbrechen
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default OfferCreate;
