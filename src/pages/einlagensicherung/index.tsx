import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import BelBar from "@/components/textBars/Bel";
import { useState } from "react";
import clsx from "clsx";
import BulBar from "@/components/textBars/Bul";
import DeuBar from "@/components/textBars/Deu";
import EstBar from "@/components/textBars/Est";
import GriBar from "@/components/textBars/Gri";
import EngBar from "@/components/textBars/Eng";
import FraBar from "@/components/textBars/Fra";
import SpaBar from "@/components/textBars/Spa";
import { environment } from "../../../projectConfig";
import { useRouter } from "next/router";

export default function Deposit() {
  const [selectedCountry, setSelectedCountry] = useState("Bel");
  const router = useRouter();

  const fixedDepOffers = () => {
    router.push("/festgeld-offers");
  };

  const nonFixed = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>
      {/* <PageLayout> */}
      <div className="w-full h-[380px] relative flex justify-center">
        <div className="w-full max-w-[1276px]">
          <h1 className="text-white font-medium text-4xl md:text-[56px] ml-[20px] md:ml-0 absolute z-10 mt-[80px] md:mt-[120px]">
            Einlagensicherung
          </h1>
          <h2 className="text-white text-3xl md:text-[36px] ml-[20px] md:ml-0  absolute z-10 mt-[152px] md:mt-[192px]">
            Sicherheit Ihrer Einlagen
          </h2>
          <p className="text-white text-[18px] p-5 md:p-0 absolute z-10 mt-[200px] md:mt-[260px] max-w-[747px]">
            „Die Sicherung der geschützten Einlagen bei Bankeninsolvenzen ist
            eines der vorrangigsten Ziele der Behörden, der EU und des
            Rechtsrahmens.“ Europäische Bankenaufsicht, 2017
          </p>
        </div>
        <Image src={"/assets/images/deposit.png"} alt="" fill loading="lazy" />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1276px] flex justify-center">
          <div className="flex flex-col lg:flex-row p-5 lg:p-0 gap-x-[60px] mt-[80px]">
            <Image
              src={"./assets/images/depositPage/bank-bar.svg"}
              alt=""
              width={520}
              height={338}
            />
            <div>
              <h2 className="text-dark text-4xl">Sie Einlagen gefahrdet?</h2>
              <p className="text-dark mt-[30px]">
                Die Einlagensicherung ist ein wichtiger Pfeiler für stabile
                Finanzmärkte. Sie ist ein gesetzlich verankertes Bekenntnis zum
                EU-weiten Schutz der Sparer und zur Wahrung der Stabilität
                innerhalb der Europäischen Union. Die Grundlage hierfür stellen
                die EU-Richtlinien 2009/14/EG und 2014/49/EU), die alle
                Mitgliedstaaten umsetzen müssen.
              </p>
              <p className="text-dark mt-[20px]">
                Durch diese Sicherungseinrichtung sind Spareinlagen bis zu
                100.000 EUR pro Kunde und pro Bank abgesichert. Auch bei
                Tagesgeld und Festgeld ist diese Einlagensicherung generell
                gewährleistet.
              </p>
              <div className="w-[210px] mt-[30px]">
                <Button
                  variant="default"
                  lable="Jetzt Geld anlegen"
                  func={fixedDepOffers}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-dark text-4xl p-5 lg:p-0 mb-[30px]">
            Das Wichtigste in Kürze
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-8">
            <div>
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                100.000 EUR
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Nach EU-Recht sind die nationalen Einlagensicherungssysteme
                harmonisiert. Alle Angebote für Fest- und Tagesgeld auf
                WeltSparen sind bis 100.000 EUR je Kunde bei der jeweiligen Bank
                durch die jeweiligen nationalen Einlagensicherungssysteme
                abgesichert.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                0 EUR
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Seit Einführung der Regelung zur Einlagensicherung in der
                Europäischen Union im Jahr 1994 haben Sparer genau 0 EUR, bis zu
                der Grenze von 100.000 EUR, verloren.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                0,8 %
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Spätestens 2024 muss jeder Einlagensicherungsfonds in Europa zu
                mindestens 0,8 Prozent der gedeckten Einlagen gefüllt sein,
                damit dieser im Fall der Fälle sofort aktiv werden kann. Einige
                unserer Partnerländer erfüllen bzw. übertreffen dieses Kriterium
                bereits heute. Im Fall einer Entschädigungssituation
                unterstützen wir unsere Kunden selbstverständlich im Rahmen des
                rechtlich und praktisch Möglichen.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-lg bg-body w-[56px] h-[56px]">
                <Image
                  src={"./assets/icons/toggle.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-dark text-lg mt-[20px] font-semibold">
                Fremdwährung
              </h2>
              <p className="text-gray3 mt-[10px] max-w-[295px]">
                Einlagen sind pro Kunde insgesamt bis 100.000 EUR bzw. der
                festgelegte Betrag in Fremdwährung abgesichert. Sofern die
                Währung des Einlagensicherungsfonds eine Fremdwährung ist,
                erfolgt die Sicherung in Fremdwährung und es sind Anlagebetrag
                sowie aufgelaufene Zinsen bis zu dem festgelegten Betrag in
                Fremdwährung abgesichert. Die Sicherungsgrenze kann dann vom
                aktuellen Wechselkurs abhängen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-5 lg:p-0 bg-body mt-[80px]">
        <div className="w-full max-w-[1276px] flex flex-col-reverse lg:flex-row gap-[60px] pt-[80px] pb-[84px]">
          <div>
            <h2 className="text-dark text-4xl">
              Einlagensicherung gilt
              <br /> innerhalb der gesamten EU
            </h2>
            <p className="text-dark mt-[30px]">
              Die gesetzliche Einlagensicherung bei Festgeld und anderen
              Bankeinlagen ist innerhalb der Europäischen Union im Rahmen von
              EU-Richtlinien geregelt. Sie sehen bestimmte Mindestanforderungen
              für den Einlegerschutz vor, der jeweils durch nationale Gesetze
              umgesetzt wurde. In Deutschland ist dies das Einlagensicherungs–
              und Anlegerentschädigungsgesetz. Andere EU-Staaten haben eigene
              Umsetzungsvorschriften.
            </p>
            <p className="text-dark mt-[20px]">
              Durch die gesetzliche Einlagensicherung sind Einlagen{" "}
              <span className=" font-bold">
                innerhalb der gesamten EU bis zu einem Betrag von 100.000 EUR
              </span>{" "}
              pro Kunde und Bank gesichert.
            </p>
          </div>
          <Image
            src={"./assets/images/depositPage/euro-group.svg"}
            alt=""
            width={480}
            height={334}
          />
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center md:flex-row bg-header gap-5 py-[40px]">
        <div>
          <Button
            variant="default"
            lable="Alle Festgeld-Angebote"
            func={fixedDepOffers}
          />
        </div>
        <div>
          <Button
            variant="outline"
            lable="Zu den Tagesgeldangeboten"
            func={nonFixed}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1276px]">
          <div className="flex flex-col items-center p-5 lg:flex-row lg:items-start lg:p-0 gap-[116px] mt-[80px]">
            <Image
              src={"./assets/images/depositPage/100-man.svg"}
              alt=""
              width={480}
              height={442}
            />
            <div>
              <h2 className="text-dark text-4xl">
                Was ist die
                <br /> Einlagensicherung?
              </h2>
              <p className="text-dark mt-[30px]">
                Die gesetzliche Einlagensicherung innerhalb der Europäischen
                Union ist Ausdruck des politischen Willens, europäische Sparer
                von den Folgen einer möglichen Insolvenz der Banken zu sichern.
                Dadurch sind Bankeinlagen bis zum Gegenwert von 100.000 EUR pro
                Kunde und Bank abgesichert. Das heißt, wenn eine Bank insolvent
                wird und Einlagen nicht mehr zurückzahlen kann, erhalten Sparer
                ihr Geld bis zur Sicherungsgrenze in vollem Umfang über das
                gesetzliche Einlagensicherungssystem zurück. Diese
                Entschädigungseinrichtung dient vorrangig dem Schutz von
                Privatanlegern und Unternehmen.
              </p>
              <p className="text-dark mt-[20px]">
                Über die Mindestanforderungen der gesetzlichen Einlagensicherung
                hinaus bieten viele Kreditinstitute eine zusätzliche freiwillige
                Einlagensicherung, indem diese in weitere
                Einlagensicherungsfonds einzahlen. Darüber hinaus spielt die
                Staatsgarantie bei der Sicherheit eine wichtige Rolle.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center p-5 lg:flex-row lg:items-start lg:p-0 gap-[60px] mt-[80px]">
            <div>
              <h2 className="text-dark text-lg font-semibold">
                Die drei Säulen der Einlagensicherung:
              </h2>
              <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-dark">Gesetzliche Einlagensicherung</p>
              </div>
              <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-dark">Freiwillige Einlagensicherung</p>
              </div>
              <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-dark">Staatsgarantie</p>
              </div>
              <p className="text-dark mt-[30px]">
                In ganz Europa wurden die Mindestanforderungen an die gesetzlich
                garantierte Einlagensicherung seit Jahren weiterentwickelt, um
                den Schutz der Anleger in der Europäischen Union zu verbessern:
                Seit Juli 2015 erfolgt die sukzessive
                <br /> Umsetzung in allen EU-Mitgliedsstaaten.
              </p>
            </div>
            <Image
              src={"./assets/images/depositPage/3-circle.svg"}
              alt=""
              width={608}
              height={286.5}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body mt-[80px] py-[80px]">
        <div className="w-full p-5 lg:p-0 max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl">
            Die Einlagensicherungen der einzelnen Länder und Sicherungsgrenzen
            <br />
            in EU-Ländern mit Fremdwährungen
          </h2>
          <div className="flex flex-col md:flex-row gap-[60px] mt-[40px]">
            <div className="bg-white p-5 flex flex-col h-[528px] gap-y-5 w-[240px] lg:w-[380px]">
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Bel")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/bel.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Bel",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Bel",
                    })}
                  >
                    Belgien
                  </p>
                </div>
                <Image
                  src={
                    selectedCountry === "Bel"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Bel",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Bul")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/bul.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Bul",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Bul",
                    })}
                  >
                    Bulgarien
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Bul"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Bul",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Deu")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/deu.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Deu",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Deu",
                    })}
                  >
                    Deutschland
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Deu"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Deu",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Spa")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"/assets/images/depositPage/flags/spa.png"}
                    alt=""
                    width={30.14}
                    height={30.14}
                    className="-ml-1"
                  />
                  <p
                    className={clsx({
                      "-ml-1": true,
                      "text-dark": selectedCountry !== "Spa",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Spa",
                    })}
                  >
                    Spanien
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Spa"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Spa",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Est")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/est.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Est",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Est",
                    })}
                  >
                    Estland
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Est"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Est",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Gri")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/gri.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Gri",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Gri",
                    })}
                  >
                    Griechenland
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Gri"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Gri",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Eng")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/eng.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Eng",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Eng",
                    })}
                  >
                    Großbritannien
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Eng"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Eng",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between pb-1 w-[200px] lg:w-[340px]"
                onClick={() => setSelectedCountry("Fra")}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"./assets/images/depositPage/flags/fra.svg"}
                    alt=""
                    width={23.14}
                    height={23.14}
                  />
                  <p
                    className={clsx({
                      "text-dark": selectedCountry !== "Fra",
                      "text-orange font-semibold tracking-wide":
                        selectedCountry === "Fra",
                    })}
                  >
                    Frankreich
                  </p>
                </div>

                <Image
                  src={
                    selectedCountry === "Fra"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedCountry !== "Fra",
                  })}
                />
              </div>
            </div>
            {selectedCountry === "Bel" && <BelBar />}
            {selectedCountry === "Bul" && <BulBar />}
            {selectedCountry === "Deu" && <DeuBar />}
            {selectedCountry === "Spa" && <SpaBar />}
            {selectedCountry === "Est" && <EstBar />}
            {selectedCountry === "Gri" && <GriBar />}
            {selectedCountry === "Eng" && <EngBar />}
            {selectedCountry === "Fra" && <FraBar />}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center h-[550px] relative">
        <div className="w-full max-w-[1276px] z-10 absolute px-5 md:px-0 pt-[50px] md:pt-[99px]">
          <div className="flex gap-x-[16px]">
            <Image
              src={"./assets/images/depositPage/list-open.svg"}
              alt=""
              width={38}
              height={38}
            />
            <h2 className="text-white text-2xl md:text-4xl">
              Wollen Sie Ihre Geldanlage optimieren?
            </h2>
          </div>
          <p className="text-white mt-[20px]">
            Bei uns erfahren Sie, was für Sie drin ist! Mit unserem kostenlosen
            Newsletter erhalten Sie
            <br /> interessante Neuigkeiten rund um Ihre Geldanlage direkt in
            Ihr Postfach:
          </p>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/toggle.svg"}
              alt=""
              width={24}
              height={24}
            />
            <p className="text-white">Top-Zinsangebote</p>
          </div>
          <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
            <Image
              src={"./assets/icons/toggle.svg"}
              alt=""
              width={24}
              height={24}
            />
            <p className="text-white">Renditeorientierte Kapitalmarktanlagen</p>
          </div>
          <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
            <Image
              src={"./assets/icons/toggle.svg"}
              alt=""
              width={24}
              height={24}
            />
            <p className="text-white">Altersvorsorge mit Steuervorteilen</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2.5 mt-[25px]">
            <div className="w-[250px] md:w-[527px]">
              <Input lable="" type="text" placeholder="Ihre E-Mail-Adresse" />
            </div>
            <div className="max-w-[130px] mt-[10px]">
              <Button lable="SUBSCRIBE" variant="default" />
            </div>
          </div>
          <p className="text-white mt-[10px]">
            Abmeldung jederzeit mit nur einem Klick möglich
          </p>
        </div>
        <Image src={"/assets/images/depositPage/man-bg.png"} alt="" fill />
      </div>
      <div className="w-full flex justify-center bg-body">
        <div className="w-full max-w-[1276px] flex flex-col items-center pt-[80px] pb-[84px]">
          <h2 className="text-4xl text-dark">
            Für welche Konten gilt die Einlagensicherung?
          </h2>
          <div className="flex flex-col md:flex-row gap-[72px] mt-[40px]">
            <Image
              src={"./assets/images/depositPage/safe.svg"}
              alt=""
              width={140}
              height={140}
            />
            <Image
              src={"./assets/images/depositPage/time.svg"}
              alt=""
              width={140}
              height={140}
            />
            <Image
              src={"./assets/images/depositPage/id.svg"}
              alt=""
              width={140}
              height={140}
            />
            <Image
              src={"./assets/images/depositPage/pig.svg"}
              alt=""
              width={140}
              height={140}
            />
          </div>
          <p className="text-center text-gray3 mt-8">
            Die Einlagensicherung gilt für alle Spareinlagen wie Festgeld-,
            Tagesgeld und Girokonten.
            <br /> Auch Sparbücher und Sparbriefe unterliegen den
            Einlagensicherungssystemen.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1276px] flex flex-col items-center">
          <h2 className="text-dark text-2xl md:text-4xl ml-[20px] md:ml-0 mt-[80px]">
            Für wen gilt die gesetzliche Einlagensicherung?
          </h2>
          <p className="text-dark ml-[20px] md:ml-0 mt-[30px]">
            Unter den Schutz der gesetzlichen Einlagensicherung fallen vorrangig
            Privatanleger und Unternehmen.
          </p>
          <div className="flex flex-col lg:flex-row gap-[60px] p-5 lg:p-0 mt-0 lg:mt-[80px]">
            <Image
              src={"./assets/images/depositPage/map.svg"}
              alt=""
              width={480}
              height={800}
            />
            <div>
              <h2 className="text-dark text-4xl">
                Einlagensicherung in Deutschland
              </h2>
              <p className="text-dark mt-[30px]">
                Aufgrund des vergleichsweise komplizierten Bankensystems in
                Deutschland ist hierzulande auch die gesetzliche
                Einlagensicherung deutlich komplexer als in anderen EU-Ländern.
                In Deutschland gibt es neben öffentlichen und privaten Banken
                auch Sparkassen und Genossenschaftsbanken. Jede dieser
                Bankenverbände hat ein eigenes Einlagensicherungssystem.
              </p>
              <h3 className="text-dark font-semibold mt-[30px]">
                Private Banken
              </h3>
              <p className="text-dark mt-[20px]">
                Bei privaten Banken ist die Entschädigungseinrichtung deutscher
                Banken (EdB) zuständig für die Einlagensicherung und die
                Entschädigung der Anleger. Darüber hinaus sind viele private
                Banken Mitglied im freiwilligen Einlagensicherungsfonds des
                Bundesverbandes deutscher Banken (BdB). Dabei sind Einlagen
                oberhalb der gesetzlichen Einlagensicherung mit bis zu 20 % des
                Eigenkapitals der Bank gesichert. Bis zum Jahr 2025 wird diese
                Grenze schrittweise auf 8,75 % abgesenkt.
              </p>
              <h3 className="text-dark font-semibold mt-[30px]">
                Öffentliche Banken
              </h3>
              <p className="text-dark mt-[20px]">
                Mitglieder des Bundesverbandes Öffentlicher Banken Deutschlands
                (VÖB) stützen sich auf ihre eigene Einlagensicherung. Dafür
                zuständig ist die Entschädigungseinrichtung des Bundesverbandes
                Öffentlicher Banken Deutschlands (EdÖ). Abseits dessen sind
                zahlreiche öffentliche Banken Mitglied im freiwilligen
                Einlagensicherungsfonds.
              </p>
              <h3 className="text-dark font-semibold mt-[30px]">
                Sparkassen und Genossenschaftsbanken
              </h3>
              <p className="text-dark mt-[20px]">
                Sparkassen und Genossenschaftsbanken stützen sich nicht auf die
                gesetzliche Einlagensicherung. Stattdessen gilt für diesen
                Bankenverband die Institutssicherung. Falls eine Bank dieser
                Gruppe in eine finanzielle Schieflage gerät, springen die
                restlichen Mitglieder ein. Die Institutssicherung soll
                verhindern, dass es überhaupt zu einem Entschädigungsfall kommt.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse p-5 lg:p-0 lg:flex-row gap-[60px]">
            <div>
              <h2 className="text-dark text-4xl">
                Einlagensicherung in Europa
              </h2>
              <p className="text-dark mt-[30px]">
                Banken, die zwar eine Niederlassung in Deutschland, aber ihren
                Hauptsitz im Ausland haben, unterliegen nicht der deutschen
                Einlagensicherung. Die ausländischen Banken haben jedoch die
                Möglichkeit, sich freiwillig dem Einlagensicherungsfonds des
                Bundesverbandes deutscher Banken anzuschließen und die
                Bankeinlagen zusätzlich abzusichern.
              </p>
              <p className="text-dark mt-[20px]">
                Im Jahr 2015 wurde die Entschädigung im EU-Ausland deutlich
                vereinfacht. Bei einer Bankeninsolvenz müssen sich Anleger nicht
                mehr mit der Entschädigungseinrichtung des jeweiligen Landes
                auseinandersetzen. Die Entschädigung läuft automatisch über das
                deutsche Einlagensicherungssystem.
              </p>
              <p className="text-dark mt-[20px]">
                Im internationalen Vergleich gilt die Einlagensicherung in
                Deutschland und im EU-Ausland als sehr sicher.
              </p>
              <p className="text-dark mt-[20px]">
                Bis 2024 muss außerdem die gesetzliche Auszahlungsfrist durch
                Einlagensicherungsfonds von derzeit 10 auf 7 Arbeitstage
                reduziert werden. In einigen Ländern ist das bereits umgesetzt.
                Insgesamt kann der Vorgang allerdings einige Wochen länger
                dauern, da zunächst festgestellt werden muss, ob tatsächlich ein
                Fall für die Einlagensicherung vorliegt.
              </p>
            </div>
            <Image
              src={"./assets/images/depositPage/mark.svg"}
              alt=""
              width={480}
              height={532}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-[60px] p-5 lg:p-0">
            <Image
              src={"./assets/images/depositPage/world.svg"}
              alt=""
              width={480}
              height={302}
            />
            <div>
              <h2 className="text-dark text-4xl">
                Einlagensicherung in Nicht-EU-Ländern
              </h2>
              <p className="text-dark mt-[30px]">
                Banken aus Nicht-EU-Ländern können hinsichtlich der
                Einlagensicherung ganz anders aufgestellt sein. Zuerst müssen
                Sie sich als Anleger damit auseinandersetzen, wann eine Bank
                unter das europäische Recht fällt. Während zum Beispiel
                Zweigniederlassungen von deutschen oder EU–Banken trotz ihres
                Standortes im Nicht-EU-Land unter die gesetzliche
                Einlagensicherung der EU fallen, zählt dies für
                Tochtergesellschaften nicht. Neben den gesetzlichen Regelungen
                gilt es auch die Bonität der Länder zu beachten.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-5 md:px-0 bg-header gap-x-5 py-[80px]">
        <div className="w-full max-w-[1276px]">
          <h2 className="text-center text-white text-4xl font-light">
            Abwicklung und Auszahlungen durch die Einlagensicherung
          </h2>
          <p className="text-white mt-[30px]">
            Im Schadensfall ist die jeweilige Einlagensicherung eines Landes
            verpflichtet, die Auszahlung binnen maximal 10 Tagen vorzunehmen –
            bis 2024 wird diese Frist schrittweise auf 7 Tage verkürzt. In
            einigen Ländern ist dies bereits umgesetzt. Insgesamt kann der
            Vorgang jedoch einige Wochen länger dauern, da zunächst festgestellt
            werden muss, ob tatsächlich ein Fall für die Einlagensicherung
            vorliegt.
          </p>
          <p className="text-white mt-[30px]">
            Insbesondere bei Anlagen über das Treuhandmodell kann es zu einer
            verzögerten Auszahlung kommen. Im Fall einer Entschädigungssituation
            unterstützen wir unsere Kunden selbstverständlich im Rahmen des
            rechtlich und praktisch Möglichen.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-[80px]">
        <div className="w-full max-w-[1276px] flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center px-5 lg:px-0 gap-[60px]">
            <div>
              <h2 className="text-dark text-4xl">
                Künftig noch mehr Sicherheit zum
                <br /> Schutz der Einleger
              </h2>
              <p className="text-dark mt-[30px]">
                Im Rahmen der Initiative hin zu einer Bankenunion hat die EZB
                die europäische Bankenaufsicht übernommen, um dafür zu sorgen,
                dass staatliche Interventionen zur Rettung des Bankensystems
                künftig weniger nötig sein werden. Spätestens im Jahr 2024
                müssen die verfügbaren Finanzmittel des jeweiligen
                Einlagensicherungsfonds mindestens 0,8 % der gedeckten Einlagen
                entsprechen.
              </p>
              <p className="text-dark mt-[20px]">
                Tagesgeld– und Festgeld–Sparer können daher zu Recht darauf
                hoffen, dass Geldanlagen im europäischen Ausland künftig noch
                sicherer werden, als sie jetzt schon durch die gesetzliche
                Einlagensicherung sind. Bei WeltSparen werden gezielt
                Festgeld-Angebote in Europa gezeigt, die Zinssätze deutlich über
                dem deutschen Niveau aufweisen.
              </p>
            </div>
            <Image
              src={"./assets/images/depositPage/marks-trio.svg"}
              alt=""
              width={480}
              height={532}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body px-5 md:px-0 gap-x-5 py-[80px] mt-[80px]">
        <div className="w-full max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl font-light">
            Wie funktioniert {environment.company.site_name} ?
          </h2>
          <p className="text-dark mt-[30px] text-center">
            Über {environment.company.site_name} erhalten Sparer einfachen
            Zugriff auf attraktive europäische Tages- und Festgeld-Angebote,
            globale <span className="underline">ETF-Portfolios</span> und die
            <br />
            <span className="underline">
              staatlich geförderte Altersvorsorge
            </span>
            . Die Eröffnung eines WeltSpar-Kontos erfordert nicht mehr Aufwand
            als eine Kontoeröffnung bei einer
            <br /> inländischen Direktbank. Über komfortable
            Onlinebanking-Funktionen ist die Transparenz stets gewährleistet,
            dadurch wird auch eine
            <br /> unkomplizierte Kontoführung und -überwachung ermöglicht.
          </p>
          <p className="text-dark mt-[30px] text-center">
            Mit Tagesgeld und Festgeld lassen sich über{" "}
            {environment.company.site_name} Zinsen realisieren, die wesentlich
            höher sind als bei deutschen Banken – ohne in
            <br /> puncto Sicherheit bei der Einlagensicherung Abstriche machen
            zu müssen.
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
      <div className="w-full flex justify-center bg-white gap-x-5 mt-[80px]">
        <div className="w-full flex flex-col items-center max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl font-light">
            Vorteile von {environment.company.site_name} auf einen Blick
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap px-2 lg:px-0 gap-8 mt-[30px] mb-[80px]">
            <div className="flex flex-col items-center w-[190px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Überdurchschnittlich hohe Zinsen für Tages- und Festgeld über
                sämtliche Laufzeiten hinweg
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Dauerhaft höhere Zinsen, ohne Lockangebote
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Alle Angebote unterliegen mindestens der gesetzlichen
                Einlagensicherung
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Die Geldanlage ist auf Dauer gebührenfrei
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                In den meisten Fällen wird ein Recht auf vorzeitige Rückzahlung
                eingeräumt
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={48}
                height={48}
              />
              <p className=" font-semibold text-dark text-lg text-center mt-[30px]">
                Die Anlage in Festgeld sowohl in Euro wie auch in Fremdwährung
                möglich
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
