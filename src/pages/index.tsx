import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { useEffect, useState } from "react";
import TableBar from "@/components/global/TableBar";
import { useGetOffersQuery } from "@/store/reducers/offers/offersApi";
import {
  useGetBanksQuery,
  useGetCountriesQuery,
} from "@/store/reducers/banks/banksAPI";
import { useRouter } from "next/router";
import { getSession, signOut, useSession } from "next-auth/react";

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

export default function FixedDeposit({session}: any) {
  const [inputValue, setInputValue] = useState<string>("");
  const [workingValue, setWorkingValue] = useState<string>("");
  const { status } = useSession();
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [sortedData, setSortedData] = useState<Offer[]>([]); // Состояние для отсортированных данных
  const { data: offersArr, isLoading: isLoading } = useGetOffersQuery();
  const { data: banksArr } = useGetBanksQuery();
  const { data: countriesArr } = useGetCountriesQuery();
  const [fiveOffers, setFiveOffers] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    if(!session?.user?.token && status === "authenticated") {
      signOut()
    }
  }, []);

  const toFixedOffers = () => {
    router.push("/festgeld-offers");
  };

  // Функция для фильтрации данных
  const filterData = () => {
    if (!offersArr) return [];

    let filteredData = [...offersArr];

    filteredData = filteredData.filter((item) => item.isOvernight);

    const seenbids = new Set();

    if (workingValue) {
      filteredData = filteredData.filter(
        (item) => item.minDeposit <= parseInt(workingValue as string)
      );
    }

    const filteredBanks = [];

    // Сортировка по наибольшему interestRate
    filteredData.sort((a, b) => b.interestRate - a.interestRate);

    for (const bank of filteredData) {
      if (!seenbids.has(bank.bid) && bank.isOvernight) {
        filteredBanks.push(bank);
        seenbids.add(bank.bid);
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
  }, [sortBy, sortOrder, workingValue, offersArr]);

  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState<number>(itemsPerPage);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const visibleData = sortedData?.slice(0, visibleItems);

  const addCommas = (num: any) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const removeCommas = (num: any) => num?.toString().replace(/\./g, "");
  const removeNonNumeric = (num: any) => num?.toString().replace(/[^0-9]/g, "");

  const setInputValues = (e: any) => {
    setInputValue(addCommas(removeNonNumeric(e.target.value)));
    setWorkingValue(removeCommas(e.target.value));
  };

  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>
      {/* <PageLayout> */}
      <div className="w-full h-[290px] md:h-[460px] relative flex justify-center">
        <div className="w-full max-w-[1276px] absolute z-10">
          <h1 className="text-white text-2xl md:text-[56px] leading-[42px] md:leading-[62px] mt-[20px] ml-4 md:ml-0 md:mt-[72px]">
            Tagesgeld: Top-Zinsen
            <br /> für Ihr Tagesgeldkonto
          </h1>
          <p className="text-md md:text-lg text-white ml-4 md:ml-0 mt-[10px]">
            Tagesgelder mit attraktiven Zinsen aus Europa
          </p>
          <div className="flex gap-x-2.5 mt-2.5  md:mt-[20px]">
            <div className="relative w-[16px] h-[16px] ml-5 mt-0.5 md:mt-0 md:ml-0 md:w-[24px] md:h-6">
              <Image src={"./assets/icons/toggle.svg"} alt="" fill />
            </div>
            <p className="text-white">
              Derzeit bestes Tagesgeldkonto in unserem Vergleich finden
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[10px]">
            <div className="relative w-[16px] h-[16px] ml-5 mt-0.5 md:mt-0 md:ml-0 md:w-[24px] md:h-6">
              <Image src={"./assets/icons/toggle.svg"} alt="" fill />
            </div>
            <p className="text-white">
              Stets aktueller Vergleich von Tagesgeldzinsen
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[10px]">
            <div className="relative w-[16px] h-[16px] ml-5 mt-0.5 md:mt-0 md:ml-0 md:w-[24px] md:h-6">
              <Image src={"./assets/icons/toggle.svg"} alt="" fill />
            </div>
            <p className="text-white">
              Dauerhaft attraktive Zinssätze auf Tagesgeld
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[10px]">
            <div className="relative w-[16px] h-[16px] ml-5 mt-0.5 md:mt-0 md:ml-0 md:w-[24px] md:h-6">
              <Image src={"./assets/icons/toggle.svg"} alt="" fill />
            </div>
            <p className="text-white">Deutscher Kundenservice</p>
          </div>
        </div>
        <div className="relative w-full h-[290px] md:h-[460px]">
          <div className="w-1/2 bg-[#44403C] -mt-[1px] absolute -z-10 h-full"></div>
          <Image
            src={"./assets/images/landing/bgn2.svg"}
            alt=""
            fill
            className="absolute top-0 -mt-[1px]"
          />
          <div className="w-1/2 bg-[#44403C] -mt-[1px] absolute -z-10 h-full right-0"></div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white gap-x-5 mt-[80px]">
        <div className="w-full flex flex-col items-center max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl font-light">
            Attraktive Angebote mit
            <br /> hohen Zinsen aus ganz Europa
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-normal lg:flex-nowrap gap-x-8 mt-[30px] mb-[80px]">
            <div className="flex flex-col items-center w-[208px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                <span className=" whitespace-nowrap">
                  Das beste Tagesgeldkonto
                </span>
                <br /> auf einen Blick finden
              </p>
            </div>
            <div className="flex flex-col items-center w-[208px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Ausgezeichneter Kundenservice
              </p>
            </div>
            <div className="flex flex-col items-center w-[208px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Dauerhaft attraktive Zinsen bei Tagesgeld
              </p>
            </div>
            <div className="flex flex-col items-center w-[208px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Deutscher
                <br /> Kundenservice
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white gap-x-5">
        <div className="w-full flex flex-col items-center max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl font-light">
            Aktueller Tagesgeldvergleich
          </h2>
          <div className="flex bg-body p-1 w-full rounded mt-[30px]">
            <div
              className="h-full w-1/2 flex flex-col items-center justify-center py-3 cursor-pointer"
              onClick={toFixedOffers}
            >
              <h3 className="font-bold text-gray1">FESTGELD</h3>
              <p className="text-gray1">Aus ganz Europa</p>
            </div>
            <div className="h-full w-1/2 flex flex-col bg-white items-center justify-center py-3 rounded cursor-pointer">
              <h3 className="font-bold text-dark">TAGESGELD</h3>
              <p className="text-gray3">Jederzeit verfügbar</p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center gap-x-[15px] mt-[30px]">
            <div className="max-w-[255px] my-[30px]">
              <Input
                type="text"
                lable=""
                value={inputValue}
                onChange={setInputValues}
                withTopText
                topText="Anlagebetrag"
              />
            </div>
          </div>
          <div className="flex w-full max-w-[1276px] justify-center">
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
              <div className="md:flex gap-x-2 w-full ml-[60px] max-w-[175px] cursor-pointer hidden">
                <p className="text-sm text-gray1">LAUFZEIT</p>
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
          <Button
            variant="outline-gray"
            lable="Weitere Angebote laden"
            func={handleShowMore}
          />
        </div>
      </div>
      <div className="w-full flex justify-center bg-body mt-[80px]">
        <div className="w-full max-w-[1276px] flex flex-col-reverse md:flex-row gap-y-4 px-5 items-start gap-x-[60px] pt-[80px] pb-[84px]">
          <div>
            <h2 className="text-dark text-4xl">
              April-Update: EZB erhöht erneut die Leitzinsen,
              <br /> Tagesgeldzinsen steigen weiter an
            </h2>
            <p className="text-dark mt-[30px]">
              Am 16.03.2023 hat die Europäische Zentralbank (EZB) beschlossen,
              alle drei Leitzinssätze um 0,50 Prozentpunkte zu erhöhen. Der
              wichtigste Leitzinssatz (Hauptrefinanzierungszinssatz) der EZB
              beträgt damit aktuell 3,50 %. Seit dem Beginn der Zinswende im
              Juli 2022, die eine lange Phase mit Nullzinsen beendete, war dies
              bereits die sechste Zinserhöhung.
            </p>
            <p className="text-dark mt-[20px]">
              Für Sparerinnen und Sparer kann das positive Auswirkungen haben,
              denn aufgrund des neuesten Anstiegs der Leitzinsen dürften auch
              die Tagesgeldzinsen weiter ansteigen. Im Vergleich zu unseren
              Nachbarländern liegen die Zinsen hierzulande jedoch noch auf einem
              niedrigeren Niveau. Es lohnt sich daher, einen Blick auf
              Tagesgelder im EU-Ausland zu werfen.
            </p>
            <p className="text-dark mt-[20px]">
              Bei WeltSparen können Sie derzeit bis zu 1,75 % p. a. auf ihre
              täglich verfügbaren Einlagen erhalten. Wenn Sie Ihr Geld für kurze
              Zeit fest anlegen möchten, können Sie mit 3-monatigem Festgeld
              sogar von bis zu 2,05 % Zinsen p. a. profitieren.
            </p>
            <p className="text-dark mt-[20px]">
              Neben Tages- und Festgeld haben Sie die Möglichkeit, Ihr Geld mit{" "}
              <span className=" underline">ETFs</span> in{" "}
              <span className=" underline">Aktien</span> und{" "}
              <span className=" underline">Anleihen</span> zu investieren und
              sich so die Chance auf attraktive Renditen zu sichern. Dies kann
              dabei helfen, dem Wertverlust durch Inflation aktiv
              entgegenzuwirken.
            </p>
            <p className="text-dark mt-[20px] mb-[30px]">
              Sind Sie auf der Suche nach aussichtsreichen Angeboten und möchten
              Sie sich über die neuesten Entwicklungen am Finanzmarkt
              informieren?
            </p>
            <Button
              lable="Jetzt zum Newsletter anmelden"
              variant="outline-orange"
            />
          </div>
          <div className="flex w-full justify-center">
            <Image
              src={"./assets/images/landing/EC-bank.svg"}
              alt=""
              width={360}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-header p-5 md:p-0">
        <div className="w-full max-w-[1276px] flex flex-col items-center pt-[80px] pb-[84px]">
          <h2 className="text-white text-4xl">
            Vorteile von Tagesgeld auf einen Blick
          </h2>
          <div className="flex gap-x-8 mt-[30px]">
            <div className="border-b border-solid border-gray2 bg-white flex flex-col items-center max-w-[622px] w-full h-[550px] md:h-[380px] rounded-lg p-[30px]">
              <Image
                src={"./assets/images/landing/shield.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Sicher
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[562px] text-center">
                In EU-Ländern ist die Anlagesumme bis zu 100.000 € pro Bank und
                Sparerin beziehungsweise Sparer durch die gesetzliche
                Einlagensicherung mit nationalen Einlagensicherungsfonds in
                jedem Mitgliedstaat abgesichert. Darüber hinaus bieten die
                Banken in einigen Fällen eine zusätzliche Absicherung der
                Geldanlage über weitere Einlagensicherungsfonds.
              </p>
            </div>
            <div className="border-b border-solid border-gray2 bg-white flex flex-col items-center max-w-[622px] w-full  h-[550px] md:h-[380px] rounded-lg p-[30px]">
              <Image
                src={"./assets/images/landing/dots.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Flexibel
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[562px] text-center">
                Wählen Siе das für Sie passende Spar-, Investment- oder
                Altersvorsorge-Produkt aus. Sie können Tages- oder Festgeld,
                ETF-Portfolios oder über Raisin Pension Altersvorsorge wie Rürup
                nutzen. WeltSparen bietet einfachen und sicheren Online-Zugang
                zu lukrativen Anlagemöglichkeiten Ihrer Wahl.
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 mt-[32px]">
            <div className="border-b border-solid border-gray2 bg-white flex flex-col items-center max-w-[622px] w-full  h-[480px] md:h-[380px] rounded-lg p-[30px]">
              <Image
                src={"./assets/images/landing/no-card.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Kostenfrei
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[562px] text-center">
                Die Kontoführung von Tagesgeldkonten bei WeltSparen ist
                kostenlos. Auch wenn Sie ein neues Tagesgeldangebot mit den für
                Sie besten Konditionen bei WeltSparen entdecken und das
                Tagesgeldkonto wechseln möchten, ist dieses kostenfrei.
              </p>
            </div>
            <div className="border-b border-solid border-gray2 bg-white flex flex-col items-center max-w-[622px] w-full  h-[480px] md:h-[380px] rounded-lg p-[30px]">
              <Image
                src={"./assets/images/landing/point.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Einfach
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[562px] text-center">
                Eröffnen Sie noch heute schnell und einfach ein Tagesgeldkonto
                bei WeltSparen. Sparerinnen und Sparer können jederzeit von
                überall aus auf ihr Konto zugreifen, ihr Guthaben abfragen und
                Geld abbuchen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body mt-[80px]">
        <div className="w-full max-w-[1276px] flex flex-col-reverse md:flex-row px-5 md:px-0 items-start gap-x-[60px] pt-[80px] pb-[84px]">
          <div className="w-full max-w-[741px]">
            <h2 className="text-dark text-4xl">
              Wann lohnt sich ein Tagesgeldkonto?
            </h2>
            <p className="text-dark mt-[30px]">
              Die Eröffnung eines Tagesgeldkontos eignet sich vor allem dafür,
              die von Expertinnen und Experten empfohlene Reserve von mindestens
              drei Monatsnettoeinkommen aufzubauen, um für unvorhergesehene
              Ausgaben vorbereitet zu sein. Ein Tagesgeld-Sparplan hilft
              außerdem dabei, für kommende Ausgaben – beispielsweise einen
              Urlaub – zu sparen.
            </p>
            <p className="text-dark mt-[20px]">
              Auch zum risikoarmen Anlegen größerer Summen bis zu 100.000 € ist
              ein Tagesgeldkonto gut geeignet. Durch die EU-weite
              Einlagensicherung ist Ihr Vermögen abgesichert und kann aufgrund
              der Flexibilität eines Tagesgeldkontos jederzeit für andere
              Investitionen oder private Ausgaben verwendet werden.
            </p>
            <p className="text-dark mt-[20px] mb-[20px]">
              Diese Flexibilität eines Tagesgeldkontos geht allerdings mit einer
              niedrigeren Verzinsung als beim Festgeld einher. Möchten Sie Ihr
              Geld längerfristig anlegen, kann demnach ein Festgeldkonto
              sinnvoller sein. Kurzfristige Festgelder stellen in diesem Fall
              eine lukrative Alternative dar. Beispielsweise lassen sich mit
              einem 12-monatigen Festgeld attraktive Zinsen erzielen,
              gleichzeitig können Sie zeitnah wieder auf Ihr Erspartes
              zugreifen.
            </p>
            <Button
              lable="Festgeld für 12 Monate anlegen"
              variant="outline-orange"
            />
          </div>
          <div className="flex flex-col w-full p-7 bg-white items-start max-w-[475px] h-[380px] gap-y-2.5 rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <h2 className=" font-semibold text-base text-dark">
              Ein Tagesgeldkonto lohnt sich für Sie, wenn:
            </h2>
            <div className="flex items-center gap-x-2.5 mt-[30px]">
              <div className="bg-yellow flex justify-center items-center w-3 h-3 rounded-full text-lg font-semibold"></div>
              <p className="text-dark ">
                Sie nach einer flexiblen Geldanlage suchen, ohne
                <br /> dabei ein großes Risiko einzugehen
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-3 h-3 rounded-full text-lg font-semibold"></div>
              <p className="text-dark ">
                Sie jederzeit Zugriff auf Ihr Geld haben möchten
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-3 h-3 rounded-full text-lg font-semibold"></div>
              <p className="text-dark ">
                Sie Ihr Konto kostenfrei und in wenigen Schritten
                <br /> eröffnen möchten
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-3 h-3 rounded-full text-lg font-semibold"></div>
              <p className="text-dark ">
                Sie höhere Zinsen erzielen möchten als bei einem
                <br /> <span className="underline text-orange">Sparbuch</span>
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-3 h-3 rounded-full text-lg font-semibold"></div>
              <p className="text-dark ">
                Sie nach und nach kleinere Summen ansparen
                <br /> möchten
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white p-5 md:p-0">
        <div className="w-full max-w-[1276px] flex items-start gap-x-[60px] pt-[80px] pb-[84px]">
          <div>
            <h2 className="text-dark text-4xl">Zinsen fürs Tagesgeld</h2>
            <p className="text-dark mt-[30px]">
              Banken und Sparkassen zahlen Tagesgeldzinsen auf die Ersparnisse,
              die Sie auf dem Tagesgeldkonto deponiert haben. Die Höhe der
              Zinsen orientiert sich oft an momentanen Marktgegebenheiten sowie
              am <span className=" underline">EZB Leitzins</span>. Ebenso kann
              die konkrete Anlagesumme eine Rolle spielen, also ob man
              beispielsweise 10.000 € oder vielleicht 50.000 € einzahlt.
            </p>
            <p className="text-dark mt-[20px]">
              Die Besonderheit beim Tagesgeld: Die Zinsen sind variabel und
              können jederzeit durch die Banken nach oben und unten angepasst
              werden. Dennoch können Sie bei einem Tagesgeldkonto höhere Zinsen
              erzielen als bei den meist zinsfreien Sparbüchern oder Girokonten.
            </p>
            <p className="text-dark mt-[20px]">
              Manche Banken bieten neuen Kundinnen und Kunden eine anfängliche
              Zinsgarantie an. Das bedeutet, dass sie den Inhaberinnen und
              Inhabern eines Tagesgeldkontos einen bestimmten Zins für einen
              bestimmten Zeitraum garantieren. Beispielsweise erhalten Sie als
              Neukundin beziehungsweise Neukunde zunächst 0% p. a. Zinsen für
              sechs Monate. Nach den sechs Monaten wird dieser Garantiezins dann
              meist auf 0 % abgesenkt.
            </p>
            <p className="text-dark font-bold mt-[20px]">
              WeltSparen verzichtet auf solche zeitlich begrenzten Lockangebote.
              Unsere Partnerbanken bieten dauerhaft hohe Tagesgeldzinsen und
              einen ausgezeichneten Service.
            </p>
            <p className="text-dark mt-[20px]">
              Bedenken Sie, dass sich der Zinssatz für Tagesgeld stets pro Jahr
              (p. a.) versteht. Wenn die Zinsgutschrift quartalsweise
              stattfindet, dann sind es im Jahr nicht viermal beispielsweise
              3,00 %, sondern 3,00% % auf das ganze Jahr verteilt.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white p-5 lg:p-0">
        <div className="w-full max-w-[1276px] flex flex-col items-center gap-x-[60px] pt-[80px] pb-[84px]">
          <h2 className="text-dark text-4xl">
            So können Sie online ein Tagesgeldkonto eröffnen
          </h2>
          <p className="text-dark mt-[20px]">
            Über WeltSparen eröffnen Sie schnell und einfach online Ihr
            Tagesgeldkonto im europäischen Ausland. So funktioniert’s:
          </p>
          <div className="flex gap-x-8 mt-[30px] flex-wrap justify-center md:flex-nowrap md:justify-normal">
            <div className=" max-w-[295px] w-full rounded-lg">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                  1
                </div>
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Tagesgeld wählen:
              </h2>
              <p className="text-gray3 mt-[10px]">
                Sie nutzen unseren unverbindlichen und stets aktuellen
                Tagesgeldvergleich und entscheiden sich für ein oder mehrere
                Tagesgeldkonten von unseren Partnerbanken in Deutschland,
                Skandinavien und anderen EU-Ländern.
              </p>
            </div>
            <div className=" max-w-[295px] w-full rounded-lg">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                  2
                </div>
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Bei WeltSparen registrieren und Tagesgeldkonto eröffnen:
              </h2>
              <p className="text-gray3 mt-[10px]">
                Nun registrieren Sie sich bei WeltSparen und richten Ihr
                WeltSpar-Konto ein. Dies ist Ihr Verrechnungskonto bei der
                Frankfurter Raisin Bank. Sie verwalten das Konto über das
                intuitive WeltSparen Onlinebanking.
              </p>
            </div>
            <div className=" max-w-[295px] w-full rounded-lg">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                  3
                </div>
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Referenzkonto einrichten:
              </h2>
              <p className="text-gray3 mt-[10px]">
                Zunächst benötigen Sie ein Referenzkonto bei einer deutschen
                Bank, um Zahlungstransfers zum WeltSpar-Konto durchzuführen.
                Dabei kann es sich beispielsweise um Ihr Girokonto handeln.
              </p>
            </div>
            <div className=" max-w-[295px] w-full rounded-lg">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                  4
                </div>
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Identität nachweisen:
              </h2>
              <p className="text-gray3 mt-[10px]">
                Die Legitimation erfolgt via{" "}
                <span className=" underline">PostIdent</span> oder{" "}
                <span className=" underline">VideoIdent</span>. Dann ist alles
                bereit. Nun können Sie von den Tagesgeldern mit attraktiven
                Zinsen profitieren.
              </p>
            </div>
          </div>
          <p className="text-gray1 mt-[40px] max-w-[862px]">
            Welche <span className="font-bold text-dark">Unterlagen</span> Sie
            für die Kontoeröffnung benötigen, ist von den Anforderungen unserer
            Partnerbanken abhängig. In jedem Fall sind eine
            <span className="font-bold text-dark">Ausweiskopie</span> sowie der{" "}
            <span className="font-bold text-dark">Kontoeröffnungsantrag</span>{" "}
            erforderlich. Informieren Sie sich am besten im Vorfeld, welche
            Unterlagen für das Tagesgeldkonto benötigt werden, um die Eröffnung
            schnell durchführen zu können.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body p-5 lg:p-0">
        <div className="w-full max-w-[1276px] flex items-start gap-x-[60px] pt-[80px] pb-[84px]">
          <div>
            <h2 className="text-dark text-4xl">Ihr Vorteil bei Mono</h2>
            <p className="text-dark mt-[30px]">
              Wir kümmern uns bei den ausländischen Banken um alle Formalitäten.
              Nachrichten, Nachweise und Bescheinigungen – etwa für die
              Steuererklärung – werden über die elektronische Postbox in Ihrem
              WeltSpar-Konto ausgetauscht. Das nutzerfreundliche WeltSparen
              Onlinebanking macht das Anlegen und Verwalten von Tagesgeldkonten
              besonders einfach. Die Abwicklung erfolgt komplett digital.
            </p>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
