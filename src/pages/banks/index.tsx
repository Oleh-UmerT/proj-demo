import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import {
  useGetBanksQuery,
  useGetCountriesQuery,
} from "@/store/reducers/banks/banksAPI";
import BankBar from "@/components/global/BankBar";

export default function Imprint() {
  const { data: banksArr } = useGetBanksQuery();
  const { data: countriesArr } = useGetCountriesQuery();
  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>
      {/* <PageLayout> */}
      <div className="w-full h-[320px] relative flex justify-center">
        <div className="w-full max-w-[1276px]">
          <h1 className="text-white text-4xl md:text-[56px] absolute z-10 px-5 md:px-0 mt-[72px] md:mt-[148px]">
            Erfahren Sie mehr
            <br /> über unsere Partnerbanken
          </h1>
        </div>
        <Image src={"/assets/images/impressum-header.png"} alt="" fill />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1276px] mt-[80px]">
          <div className="flex justify-center mb-[80px]">
            <h2 className="text-center text-dark text-5xl">
              Erfahren Sie mehr über unsere
              <br /> Partnerbanken
            </h2>
          </div>
          {banksArr?.map((item, key) => (
            <BankBar key={key} banksArr={item} countriesArr={countriesArr} />
          ))}
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
