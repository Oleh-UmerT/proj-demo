import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/global/Button";
import { useGetOffersQuery } from "@/store/reducers/offers/offersApi";
import { useGetBanksQuery } from "@/store/reducers/banks/banksAPI";
import { useEffect, useState } from "react";
import TableBar from "@/components/global/TableBar";
import { environment } from "../../../projectConfig";
import { useRouter } from "next/router";

function filterBanksByUniqueBankBid(banks: any) {
  if (!banks) return;

  const sortedBanks = banks
    .slice()
    .sort((a: any, b: any) => b.interestRate - a.interestRate);

  const seenBankBids = new Set();
  const filteredBanks = [];

  for (const bank of sortedBanks) {
    if (!seenBankBids.has(bank.bid)) {
      filteredBanks.push(bank);
      seenBankBids.add(bank.bid);
    }

    if (filteredBanks.length === 5) {
      break;
    }
  }

  return filteredBanks;
}

export default function HowItWorks() {
  const [fiveOffers, setFiveOffers] = useState<any>();
  const { data: offersArr, isLoading: isLoading } = useGetOffersQuery();
  const { data: banksArr } = useGetBanksQuery();
  const router = useRouter();

  const toFest = () => {
    router.push("/festgeld-offers");
  };

  const toTages = () => {
    router.push("/");
  };

  useEffect(() => {
    if (offersArr) {
      const filteredData = filterBanksByUniqueBankBid(offersArr);
      setFiveOffers(filteredData);
      console.log(filteredData);
    }
  }, [offersArr, banksArr]);

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
          <h1 className="text-white text-4xl md:text-[56px] leading-[76px] md:leading-[62px] absolute z-10 ml-[20px] md:ml-0 mt-[72px] md:mt-[136px]">
            So funktioniert
            <br /> Ihre Geldanlage
          </h1>
        </div>
        <Image src={"/assets/images/howItWorks/header.png"} alt="" fill />
      </div>
      <div className="w-full flex justify-center bg-white gap-x-5 mt-[80px] py-[80px] p-5 lg:p-0">
        <div className="w-full max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl font-light">
            Sparen, investieren und vorsorgen mit einer Anmeldung
          </h2>
          <p className="text-dark mt-[30px] text-center">
            {environment.company.site_name} ist die führende Plattform für
            Geldanlage in Europa und darüber hinaus. Mit einem Konto bei{" "}
            {environment.company.site_name} haben Sie
            <br />
            unkomplizierten und schnellen Zugriff auf attraktive Spar­- und
            Investment-Produkte, sowie auf die Altersvorsorge-Produkte.
          </p>
          <div className="w-full relative h-[330px]">
            <Image src={"./assets/images/depositPage/how-it.svg"} alt="" fill />
          </div>
          <p className="text-dark mt-[30px] text-center">
            * Altersvorsorge-Produkte werden von der {environment.company.name}{" "}
            vermittelt.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body gap-x-5 py-[80px]">
        <div className="w-full max-w-[1276px]">
          <h2 className="text-center text-orange text-xl font-light w-full pb-[15px] border-b-2 border-solid border-orange">
            Sparen
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-4 mt-[40px]">
            <div className="border-b border-solid border-gray2 bg-white max-w-[632px] w-full h-[204px] rounded-lg py-5 pl-5">
              <h3 className="text-dark text-xl font-medium">Festgeld</h3>
              <p className="mt-[20px] text-dark whitespace-nowrap">
                Mit Sicherheit die besten Zinsen –{" "}
                <span className="text-orange font-bold">bis zu 3,75 %</span>{" "}
                p.a. ohne Kontoführungsgebühren.
              </p>
              <div className="w-[200px] mt-[30px]">
                <Button
                  variant="outline-orange"
                  lable="Jetzt informieren"
                  func={toFest}
                />
              </div>
            </div>
            <div className="border-b border-solid border-gray2 bg-white max-w-[632px] w-full h-[204px] rounded-lg p-5">
              <h3 className="text-dark text-xl font-medium">Tagesgeld</h3>
              <p className="mt-[20px] text-dark">
                Tagesgelder mit attraktiven Zinsen -{" "}
                <span className="text-orange font-bold">
                  ohne Kontoführungsgebühren.
                </span>
              </p>
              <div className="w-[200px] mt-[30px]">
                <Button
                  variant="outline-orange"
                  lable="Jetzt informieren"
                  func={toTages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1276px] flex flex-col-reverse md:flex-row gap-x-[60px] pt-[80px] px-5 lg:px-0 pb-[84px]">
          <div>
            <h2 className="text-dark text-4xl mt-[20px] lg:mt-0">
              Einmal anmelden und
              <br /> bequem von Zuhause
              <br /> anlegen & verwalten
            </h2>
            <p className="text-dark mt-[30px]">
              Mit unserem Onlinebanking können Sie sich jederzeit einen
              Überblick über Ihre Konten verschaffen, Ihre Bankdokumente
              verwalten und unkompliziert weitere Anlagen abschließen.
            </p>
            <p className="text-dark mt-[32px]">
              Ob <span className="text-orange">Festgeld</span>, Tagesgeld,
              <span className="text-orange">
                {" "}
                ETF Robo, ETF Configurator (Raisin Invest)
              </span>{" "}
              oder Altersvorsorge . Mischen Sie Ihre Anlageklassen in einem
              Verhältnis, das Ihren Bedürfnissen entspricht.
            </p>
            <div className="w-[200px] mt-[32px]">
              <Button variant="outline-orange" lable="Jetzt Registrieren" func={() => router.push("/register")}/>
            </div>
          </div>
          <div className="relative flex justify-center">

          <Image
            src={"./assets/images/howItWorks/laptop.svg"}
            alt=""
            width={741}
            height={442}
            />
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-header">
        <div className="w-full max-w-[1276px] flex flex-col items-center pt-[80px] pb-[84px]">
          <h2 className="text-white text-4xl">Drei Schritte zu mehr Rendite</h2>
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-normal gap-8 mt-[30px]">
            <div className="border-b flex flex-col items-center border-solid border-gray2 bg-white max-w-[404px] w-full h-[458px] rounded-lg py-[40px] px-[30px]">
              <Image
                src={"./assets/images/howItWorks/person.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h3 className=" font-semibold text-xl text-dark text-center mt-[30px]">
                1. Kostenlos registrieren
              </h3>
              <p className="text-center text-dark mt-2.5">
                Sie müssen sich nur einmal bei {environment.company.site_name}{" "}
                anmelden und identifizieren. Ganz einfach per Webcam, Smartphone
                oder Postident. Anschließend haben Sie Zugriff auf die besten
                Anlageprodukte. Das {environment.company.site_name}
                -Konto, Ihr persönliches und kostenloses Verrechnungskonto.
              </p>
            </div>
            <div className="border-b flex flex-col items-center border-solid border-gray2 bg-white max-w-[404px] w-full h-[458px] rounded-lg py-[40px] px-[30px]">
              <Image
                src={"./assets/images/howItWorks/cursor.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h3 className=" font-semibold text-xl text-dark text-center mt-[30px]">
                2. Anlageprodukte auswählen
              </h3>
              <p className="text-center text-dark mt-2.5">
                Wählen Siе das für Sie passende Spar-, Investment- oder
                Altersvorsorge-Produkt aus. Sie können Tages- oder Festgeld,
                ETF-Portfolios oder über Raisin Pension Altersvorsorge wie Rürup
                nutzen. WeltSparen bietet einfachen und sicheren Online-Zugang
                zu lukrativen Anlagemöglichkeiten Ihrer Wahl.
              </p>
            </div>
            <div className="border-b flex flex-col items-center border-solid border-gray2 bg-white max-w-[404px] w-full h-[458px] rounded-lg py-[40px] px-[30px]">
              <Image
                src={"./assets/images/howItWorks/wallet.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h3 className=" font-semibold text-xl text-dark text-center mt-[30px]">
                3. Geld übertragen – fertig
              </h3>
              <p className="text-center text-dark mt-2.5">
                Nachdem Sie Ihre gewünschte Anlage ausgewählt haben, überweisen
                Sie einfach den Anlagebetrag auf Ihr WeltSpar-Konto oder lassen
                sich Ihre regelmäßigen Beiträge bequem von Ihrem Girokonto
                abbuchen. Den Rest übernehmen wir für Sie. In unserem Online
                ­banking haben Sie jederzeit die volle Kontrolle und
                Transparenz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-[80px]">
        <h2 className=" text-4xl text-dark mb-[40px]">
          Aktuelle Festgeld-Angebote
        </h2>
        {fiveOffers?.map((item: any, key: number) => {
          return (
            <TableBar
              withButton
              offersPage
              withDetails
              key={key}
              data={item}
              banksArr={banksArr}
            />
          );
        })}
        <div className="flex justify-center gap-x-[20px] mb-[80px]">
          <Button variant="outline-gray" lable="Alle Tagesgeld Angebote" />
          <Button variant="outline-gray" lable="Alle Festgeld Angebote" />
        </div>
      </div>
      <div className="w-full flex justify-center bg-header">
        <div className="w-full max-w-[1276px] flex flex-col items-center pt-[80px] pb-[84px]">
          <h2 className="text-white text-4xl">
            Ihre Vorteile bei {environment.company.site_name}
          </h2>
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-normal gap-8 mt-[30px]">
            <div className="border-b border-solid border-gray2 bg-white max-w-[404px] w-full h-[247px] rounded-lg p-[30px]">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Einfach
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Registrieren Sie sich lediglich einmal und greifen Sie mit dem
                kostenlosen WeltSpar-Konto auf alle Angebote zu.
              </p>
            </div>
            <div className="border-b border-solid border-gray2 bg-white max-w-[404px] w-full h-[247px] rounded-lg p-[30px]">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Kostengünstig
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Profitieren Sie von langfristig niedrigen Kosten mit unseren
                Investmentprodukten und Raisin Pensions Altersvorsorge.
              </p>
            </div>
            <div className="border-b border-solid border-gray2 bg-white max-w-[404px] w-full h-[247px] rounded-lg p-[30px]">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Transparent
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Behalten Sie im sicheren WeltSparen Online­banking jederzeit die
                volle Kontrolle über Ihre Anlagen.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-normal gap-8 mt-[32px]">
            <div className="border-b border-solid border-gray2 bg-white max-w-[404px] w-full h-[247px] rounded-lg p-[30px]">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Renditeorientiert
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Investieren Sie langfristig und breit gestreut in kostengünstige
                ETFs.
              </p>
            </div>
            <div className="border-b border-solid border-gray2 bg-white max-w-[404px] w-full h-[247px] rounded-lg p-[30px]">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Zinsstark
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Über 940 attraktive Angebote von mehr als 137 europäischen
                Banken.
              </p>
            </div>
            <div className="border-b border-solid border-gray2 bg-white max-w-[404px] w-full h-[247px] rounded-lg p-[30px]">
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Abgesichert
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Garantierte Rentenkonditionen für Ihre Altersvorsorge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body">
        <div className="w-full max-w-[1276px] flex flex-col items-center pt-[80px] pb-[84px]">
          <h2 className="text-dark text-4xl">
            Awards for {environment.company.site_name}
          </h2>
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-normal gap-8 mt-[30px]">
            <div className="border-b flex flex-col items-center border-solid border-gray2 bg-white max-w-[404px] w-full h-[398px] rounded-lg py-[40px] px-[30px]">
              <Image
                src={"./assets/images/howItWorks/award-1.svg"}
                alt=""
                width={144}
                height={144}
              />
              <h3 className=" font-semibold text-xl text-dark text-center mt-[30px]">
                Service Quality &quot;Very Good&quot;
              </h3>
              <p className="text-center text-dark mt-2.5">
                In 2020, {environment.company.site_name} was awarded the grade
                “Very Good” for its customer service for the second time by
                DIQP, the German Institute for Quality Standards and Testing.
              </p>
            </div>
            <div className="border-b flex flex-col items-center border-solid border-gray2 bg-white max-w-[404px] w-full h-[398px] rounded-lg py-[40px] px-[30px]">
              <Image
                src={"./assets/images/howItWorks/award-2.svg"}
                alt=""
                width={144}
                height={144}
              />
              <h3 className=" font-semibold text-xl text-dark text-center mt-[30px]">
                Critical investors
              </h3>
              <p className="text-center text-dark mt-2.5">
                According to Kritische-Anleger {environment.company.site_name}{" "}
                is the best-rated investment marketplace in Germany by
                customers, with 4.8 out of 5 points.
              </p>
            </div>
            <div className="border-b flex flex-col items-center border-solid border-gray2 bg-white max-w-[404px] w-full h-[398px] rounded-lg py-[40px] px-[30px]">
              <Image
                src={"./assets/images/howItWorks/award-3.svg"}
                alt=""
                width={144}
                height={144}
              />
              <h3 className=" font-semibold text-xl text-dark text-center mt-[30px]">
                n-tv
              </h3>
              <p className="text-center text-dark mt-2.5">
                {environment.company.site_name} was honored by n-tv and the
                independent financial consultancy FMH in the years 2015 - 2020
                and again in 2021 as &quot;Best fixed-term deposit broker&quot;.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
