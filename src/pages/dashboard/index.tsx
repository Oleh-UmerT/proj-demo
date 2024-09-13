import PageLayout from "@/components/layout/PageLayout";
import axiosInstance from "@/config/http";
import {
  useGetCurrentUserQuery,
  useGetMyOffersQuery,
} from "@/store/reducers/user/userApi";
import { useEffect, useState, useLayoutEffect } from "react";
import useImage from "use-image";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/global/Button";
import Link from "next/link";
import Input from "@/components/global/Input";
import TableBar from "@/components/global/TableBar";
import UserData from "@/components/global/UserData";
import { getSession, signOut, useSession } from "next-auth/react";
import {
  useGetBanksQuery,
  useGetCountriesQuery,
} from "@/store/reducers/banks/banksAPI";
import { environment } from "../../../projectConfig";

function calculateTotalAmount(array: any) {
  return array?.reduce((total: number, item: any) => total + item.amount, 0);
}

const addCommas = (num: number | undefined) =>
  num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const Dashboard = ({session}: any) => {
  const [showBar, setShowBar] = useState(false);
  const { status } = useSession();
  const [totalAmount, setTotalAmount] = useState();
  const { data: offersArr, isLoading: isLoading } = useGetMyOffersQuery();
  const { data: banksArr } = useGetBanksQuery();
  const { data: countriesArr } = useGetCountriesQuery();

  useEffect(() => {
    if(!session?.user?.token && status === "authenticated") {
      signOut()
    }
  }, []);

  useEffect(() => {
    const offersFromData = calculateTotalAmount(offersArr);
    setTotalAmount(offersFromData);
  }, [offersArr]);

  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>{" "}
      {/* <PageLayout> */}
      <UserData />
      <div className="flex w-full justify-center pt-[40px]">
        <div className="flex justify-between max-w-[1276px] w-full h-[190px] md:h-[104px] bg-green-bg rounded-lg py-6 px-8">
          <div className="flex flex-col">
            <h2 className=" text-dark text-2xl font-semibold">
              Eröffnen Sie Ihre erste Anlage:
            </h2>
            <h2 className=" text-dark text-base font-normal">
              Profitieren Sie durch unsere Tages-und Festgeldangebote von
              höheren Zinsen. Besser als Ihre Hausbank.
            </h2>
          </div>
          <Button variant="green" lable="Zu unseren Anlagen" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-8 flex-col md:flex-row px-5 md:px-0 pt-[40px]">
        <div className="w-full max-w-[840px]">
          <h1 className=" text-dark text-3xl font-semibold">
            Weitere Schritte:
          </h1>
          <div className="flex flex-col gap-y-2.5 mt-[30px]">
            <div className="bg-body w-full h-[110px] md:h-[90px] flex gap-4 py-6 px-5 rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow">
                <p className=" text-xl font-bold text-dark">1</p>
              </div>
              <div className="flex flex-col">
                <p className="text-dark">
                  Bitte führen Sie unser Ident-Verfahren durch, um sich
                  vollständig zu verifizieren. Zur Identifikation
                </p>
                <Link href="/verification" className="text-orange flex gap-1.5">
                  Zur identifikation
                  <Image
                    src={"./assets/icons/big-or-arrow.svg"}
                    alt=""
                    width={16.55}
                    height={12}
                  />
                </Link>
              </div>
            </div>
            <div className="bg-body w-full h-[130px] md:h-[110px] flex gap-4 py-6 px-5 rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow">
                <p className=" text-xl font-bold text-dark">2</p>
              </div>
              <div className="flex flex-col">
                <p className="text-dark max-w-[734px]">
                  Wählen Sie ggf. schon vor vollständiger Aktivierung des{" "}
                  {environment.company.site_name}-Kontos eine passende Anlage aus. Angebot
                  wählen
                </p>
                <Link href="/festgeld" className="text-orange flex gap-1.5">
                  Angebot wählen
                  <Image
                    src={"./assets/icons/big-or-arrow.svg"}
                    alt=""
                    width={16.55}
                    height={12}
                  />
                </Link>
              </div>
            </div>
            <div className="bg-body w-full h-[152px] md:h-[112px] flex gap-4 py-6 px-5 rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow">
                <p className=" text-xl font-bold text-dark">3</p>
              </div>
              <div className="flex flex-col">
                <p className="text-dark max-w-[734px]">
                  Nach dem Ident-Verfahren dauert es in der Regel 2–3
                  Bankarbeitstage, bis Sie Ihr Konto im vollen Umfang nutzen
                  können. Sie erhalten von uns eine E-Mail mit Angaben zu Ihrem{" "}
                  {environment.company.site_name}-Konto (Verrechnungskonto für Ihre Anlagen).
                </p>
              </div>
            </div>
            <div className="bg-body w-full h-[110px] md:h-[90px] flex gap-4 py-6 px-5 rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow">
                <p className=" text-xl font-bold text-dark">4</p>
              </div>
              <div className="flex flex-col">
                <p className="text-dark max-w-[734px]">
                  Anschließend können Sie Geld auf Ihr {environment.company.site_name}-Konto
                  überweisen und jederzeit weitere Anlagen im Onlinebanking
                  abschließen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[404px] mt-[68px] mb-[60px]">
          <div className="flex gap-y-5 flex-col bg-white gap-1 py-5 px-5 w-full h-[216px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-dark font-semibold">IHR ANLAGEEXPERTE</p>
            <div className="flex gap-x-3.5">
              <Image
                src={"./assets/images/Matt.svg"}
                alt=""
                width={62}
                height={62}
              />
              <div>
                <p className="text-dark text-lg font-semibold">
                  Matthias Hefele
                </p>
                <p className="text-gray1">+49 89 23900</p>
              </div>
            </div>
            <div className="max-w-[221px]">
              <Button variant="outline-orange" lable="Rückruf anfordern" />
            </div>
          </div>
          <div className="flex gap-y-5 mt-5 flex-col bg-white gap-1 py-5 px-5 w-full h-[228px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-dark font-semibold">AUSZAHLEN</p>
            <Input lable="Summe" type="text" />
            <Button variant="outline-orange" lable="Auszahlung Beantragen" />
          </div>
        </div>
      </div>
      <>
        <div className="w-full flex justify-center">
          <div className="flex items-center w-full max-w-[1276px]">
            <div className="bg-input max-w-[476px] w-full h-[2px] mr-8"></div>
            <p className="text-gray1 text-sm whitespace-nowrap">
              AUSSTEHENDE ANFRAGEN
            </p>
            <p className="text-gray1 text-sm ml-2.5 whitespace-nowrap">
              ( € {addCommas(totalAmount)},00 )
            </p>
            <div className="bg-input max-w-[476px] w-full h-[2px] ml-8"></div>
          </div>
        </div>
        <div className="mt-[30px] w-full flex flex-col items-center justify-center">
          {offersArr?.map((item: any, key: number) => {
            return (
              <TableBar
                key={key}
                withNotify
                data={item.offer}
                investAmount={item.amount}
                banksArr={banksArr}
                countriesArr={countriesArr}
              />
            );
          })}
        </div>
      </>
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

export default Dashboard;
