import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/global/Button";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Table from "@/components/Steuerinformationen/table";

export default function TaxInfo() {
  const [selectedFirst, setSelectedFirst] = useState("Unterlagen");
  const [selectedSecond, setSelectedSecond] = useState("Unterlagen");
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
          <h1 className="text-white text-4xl md:text-[56px] leading-[62px] absolute z-10 ml-5 md:ml-0 mt-[85px] md:mt-[136px]">
            Steuerinformationen
            <br /> von Mono
          </h1>
        </div>
        <Image src={"/assets/images/taxInfo/header.png"} alt="" fill />
      </div>
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1276px] flex flex-col-reverse lg:flex-row px-5 lg:px-0 gap-[60px] pt-[80px] pb-[84px]">
          <div className="w-full max-w-[608px]">
            <p className="text-dark">
              Wir von WeltSparen stellen Ihnen als Kunde die steuerlich
              relevanten Informationen zu Tages- und Festgeldern bei unseren
              Partnerbanken kostenlos zur Verfügung. Bei den Raisin Invest
              Portfolios erfolgt die steuerliche Behandlung auf der Ebene der
              Depotbank DAB BNP Paribas – diese sind deshalb in den
              Steuerinformationen von WeltSparen nicht enthalten. Die
              Bescheinigung über Ihre Beiträge in den Altersvorsorge-Produkten
              ETF Rürup und ETF Riester wird Ihnen im Bereich Raisin Pension des
              WeltSparen Onlinebankings unter dem Menüpunkt Dokumente von der
              Raisin Pension GmbH eingestellt.
            </p>
            <p className="text-dark mt-[30px]">
              Bitte beachten Sie, dass wir keine Steuerberatung erbringen dürfen
              und keine Haftung für die Korrektheit steuerlicher Angaben
              übernehmen. Wir können auch nicht ausschließen, dass es zu
              Rückfragen Ihres Finanzamtes kommt. Gemäß § 3 und § 4 des
              Steuerberatungsgesetzes darf WeltSparen keine Steuerberatung oder
              beschränkte Hilfe in Steuersachen leisten, da dies nur den
              entsprechend ausgebildeten und zugelassenen Unternehmen und
              Vereinigungen erlaubt ist. WeltSparen unterliegt dem in § 5 StBerG
              ausgesprochenen Verbot der unbefugten Hilfeleistung in
              Steuersachen. Wir bitten Sie daher, sich durch Ihren Steuerberater
              oder Ihr zuständiges Finanzamt weitergehend beraten zu lassen.
            </p>
          </div>
          <div className="flex flex-col w-full p-7 items-start max-w-[606px] h-[401px] gap-y-2.5 rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <h2 className=" font-medium text-xl text-dark">Seitenübersicht</h2>
            <div className="flex items-center gap-x-2.5 mt-[30px]">
              <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                1
              </div>
              <p className="text-dark underline">
                Informationen zur steuerlichen Behandlung von Tages- und
                <br />
                Festgeldern (Einlagengeschäft)
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                2
              </div>
              <p className="text-dark underline">
                Einzureichende Unterlagen bei Partnerbanken für Kunden mit
                <br /> Steueransässigkeit in Deutschland (Einlagengeschäft)
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                3
              </div>
              <p className="text-dark underline">
                Quellensteuern in der EU im Gesamtüberblick (Einlagengeschäft)
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                4
              </div>
              <p className="text-dark underline">
                Informationen zur steuerlichen Behandlung der Raisin Invest
                <br /> Portfolios (Anlagengeschäft)
              </p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="bg-yellow flex justify-center items-center w-8 h-8 rounded-full text-lg font-semibold">
                5
              </div>
              <p className="text-dark underline">
                Informationen zur steuerlichen Behandlung der Altersvorsorge-
                <br />
                Produkte (Raisin Pension GmbH)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body py-[80px]">
        <div className="w-full max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl">
            Die Einlagensicherungen der einzelnen Länder und Sicherungsgrenzen
            <br />
            in EU-Ländern mit Fremdwährungen
          </h2>
          <div className="flex flex-col md:flex-row px-5 lg:px-0 gap-[60px] mt-[40px]">
            <div className="bg-white p-5 flex flex-col h-[460px] lg:h-[396px] gap-y-5 w-[260px] lg:w-[380px]">
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]"
                onClick={() => setSelectedFirst("Unterlagen")}
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark": selectedFirst !== "Unterlagen",
                      "text-orange font-semibold tracking-wide":
                        selectedFirst === "Unterlagen",
                    })}
                  >
                    Unterlagen
                  </p>
                </div>
                <Image
                  src={
                    selectedFirst === "Unterlagen"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedFirst !== "Unterlagen",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]"
                onClick={() => setSelectedFirst("Besteuerung")}
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark": selectedFirst !== "Besteuerung",
                      "text-orange font-semibold tracking-wide":
                        selectedFirst === "Besteuerung",
                    })}
                  >
                    Besteuerung
                  </p>
                </div>
                <Image
                  src={
                    selectedFirst === "Besteuerung"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedFirst !== "Besteuerung",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]"
                onClick={() => setSelectedFirst("Steuerpflicht in Deutschland")}
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark":
                        selectedFirst !== "Steuerpflicht in Deutschland",
                      "text-orange font-semibold tracking-wide":
                        selectedFirst === "Steuerpflicht in Deutschland",
                    })}
                  >
                    Steuerpflicht in Deutschland
                  </p>
                </div>
                <Image
                  src={
                    selectedFirst === "Steuerpflicht in Deutschland"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90":
                      selectedFirst !== "Steuerpflicht in Deutschland",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]"
                onClick={() =>
                  setSelectedFirst("Freistellungsauftrag/NV-Bescheinigungen")
                }
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark":
                        selectedFirst !==
                        "Freistellungsauftrag/NV-Bescheinigungen",
                      "text-orange font-semibold tracking-wide":
                        selectedFirst ===
                        "Freistellungsauftrag/NV-Bescheinigungen",
                    })}
                  >
                    Freistellungsauftrag/NV-Bescheinigungen
                  </p>
                </div>
                <Image
                  src={"./assets/icons/black-arrow.svg"}
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90":
                      selectedFirst !==
                      "Freistellungsauftrag/NV-Bescheinigungen",
                    "-rotate-90 ":
                      selectedFirst ===
                      "Freistellungsauftrag/NV-Bescheinigungen",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]"
                onClick={() => setSelectedFirst("Grundfreibeträge")}
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark": selectedFirst !== "Grundfreibeträge",
                      "text-orange font-semibold tracking-wide":
                        selectedFirst === "Grundfreibeträge",
                    })}
                  >
                    Grundfreibeträge
                  </p>
                </div>
                <Image
                  src={
                    selectedFirst === "Grundfreibeträge"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedFirst !== "Grundfreibeträge",
                  })}
                />
              </div>
              <div
                className="flex cursor-pointer justify-between pb-5 w-[220px] lg:w-[340px]"
                onClick={() =>
                  setSelectedFirst("Rückerstattung von Quellensteuer")
                }
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark":
                        selectedFirst !== "Rückerstattung von Quellensteuer",
                      "text-orange font-semibold tracking-wide":
                        selectedFirst === "Rückerstattung von Quellensteuer",
                    })}
                  >
                    Rückerstattung von Quellensteuer
                  </p>
                </div>
                <Image
                  src={
                    selectedFirst === "Rückerstattung von Quellensteuer"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90":
                      selectedFirst !== "Rückerstattung von Quellensteuer",
                  })}
                />
              </div>
            </div>
            {selectedFirst === "Unterlagen" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Dokumente für WeltSparen-Kunden
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Unsere Partnerbanken stellen Ihnen zur Fälligkeit der Anlage
                  oder am Ende des Jahres einer Zinszahlung einen Kontoauszug
                  zur Verfügung, in dem alle relevanten Informationen vorhanden
                  sind. Dazu gehören Informationen zum Zinsertrag, der
                  Quellensteuer oder dem Wechselkurs. Diese Dokumente werden in
                  Ihrem persönlichen Postfach des Online Banking von WeltSparen
                  zur Verfügung gestellt.
                </p>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Als zusätzlichen Service von WeltSparen erhalten alle Kunden
                  im ersten Quartal des Jahres kostenlos eine Übersicht und
                  Information zu allen steuerrelevanten Positionen des
                  Vorjahres. Diese Übersicht können Sie sich ausdrucken und zur
                  Erstellung Ihrer Steuererklärung zu Rate ziehen.
                </p>
              </div>
            )}
            {selectedFirst === "Besteuerung" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Harmonisierte Besteuerung in der EU
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Die Besteuerung von Zinserträgen privater Sparer ist in Europa
                  weitgehend harmonisiert. Daher entspricht die Höhe der
                  Besteuerung im Wesentlichen der Besteuerung einer Einlage in
                  Deutschland. Der einzige mögliche Unterschied besteht darin,
                  dass je nach Land eine Quellensteuer im Ausland einbehalten
                  werden kann. Diese kann bei Angabe in Ihrer Steuererklärung
                  berücksichtigt werden, so dass die Höhe der Steuerlast in
                  Deutschland nicht übersteigt. Dazu ist im Einzelfall ein
                  kostenloser Nachweis des steuerlichen Wohnsitzes in
                  Deutschland erforderlich (Einzelheiten entnehmen Sie dem
                  Bereich „Einzureichende Unterlagen“).
                </p>
              </div>
            )}
            {selectedFirst === "Steuerpflicht in Deutschland" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Steuerpflicht in Deutschland
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Kunden, die ihren Wohnsitz oder gewöhnlichen Aufenthalt in
                  Deutschland haben, sind in der Regel in Deutschland
                  steuerpflichtig. Alle Einkünfte, also auch erwirtschaftete
                  Zinsen, müssen in der Steuererklärung angegeben werden. Zum 1.
                  Januar 2016 ist das Gesetz zum Informationsaustausch in der
                  Finanzbuchhaltung innerhalb der europäischen Steuerbehörden in
                  Kraft getreten, sowie entsprechende Gesetze in den
                  EU-Mitgliedsstaaten.
                </p>
              </div>
            )}
            {selectedFirst === "Freistellungsauftrag/NV-Bescheinigungen" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Rückwirkend Freistellungsauftrag erteilen
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Rückwirkend kann ein Freistellungsauftrag je nach Stichtag bis
                  zum 31.12. des laufenden Kalenderjahres erteilt werden.
                  Aufträge für vorangegangene Steuerjahre werden nicht
                  angenommen. Freistellungen nach dem 31.12. gelten lediglich
                  für das Folgejahr, das heißt ab dem 01.01.
                </p>
                <p className="text-gray3 mt-[20px] max-w-[836px]">
                  Eine Erhöhung des Freibetrags ist bis zu einem Betrag von
                  1.000 € beziehungsweise 2.000 € für zusammen Veranlagte
                  jederzeit möglich (Stand: 2024). Beim Herabsetzen des
                  Freibetrags ist zu beachten, dass der Freistellungsauftrag nur
                  bis zu dem Betrag reduziert werden kann, der bis zum Zeitpunkt
                  der Änderung noch nicht beansprucht worden ist.
                </p>
                <p className="text-gray3 mt-[20px] max-w-[836px]">
                  Möchten Sie langfristig Vermögen aufbauen und Steuern sparen?
                  Mit unserer Vermögensverwaltung können Sie in global
                  diversifizierte ETFs investieren und gleichzeitig den
                  Sparerpauschbetrag für sich nutzen.
                </p>
              </div>
            )}
            {selectedFirst === "Grundfreibeträge" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Grundfreibeträge
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  In Deutschland gelten für Einkünfte aus Kapitalvermögen
                  (Sparerpauschale) Grundfreibeträge, derzeit 801 Euro pro Jahr
                  für Alleinstehende und 1.602 Euro pro Jahr für Verheiratete.
                  Kunden können einen Freistellungsauftrag oder eine
                  Nichtveranlagungsbescheinigung nur für die deutschen
                  Partnerbanken von Zinsplan verwenden, da die ausländischen
                  Banken keine deutsche Abgeltungssteuer einbehalten und
                  abführen dürfen. Dies bedeutet, dass Einkünfte aus dem Ausland
                  direkt über die Steuererklärung gutgeschrieben werden.
                </p>
              </div>
            )}
            {selectedFirst === "Rückerstattung von Quellensteuer" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Beratungsausschluss
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Bitte beachten Sie, dass Zinsplan keine Steuerberatung
                  erbringen darf und keine Haftung für die Korrektheit
                  steuerlicher Angaben übernimmt. Gemäß den Paragraphen 3 und 4
                  des Steuerberatungsgesetzes keine Steuerberatung oder
                  beschränkte Hilfe in Steuersachen leisten, da dies nur den
                  entsprechend ausgebildeten und zugelassenen Unternehmen und
                  Vereinigungen erlaubt ist. Zinsplan unterliegt dem in
                  Paragraph 5 ausgesprochenen Verbot der unbefugten
                  Hilfeleistung in Steuersachen.
                </p>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Eine nachträgliche Korrektur einer im Ausland abgeführten
                  Quellensteuer ist über Zinsplan nicht möglich. Wir bitten Sie
                  daher, sich durch Ihren Steuerberater oder Ihr zuständiges
                  Finanzamt weitergehend beraten zu lassen.
                </p>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Das Bundeszentralamt für Steuern bietet mit dem Steuerlichen
                  Info-Center (SIC) eine Anlaufstelle für die verschiedensten
                  allgemeinen Fragen. Eine steuerliche Beratung bzw.
                  Rechtsberatung im Einzelfall kann und soll durch die Angebote
                  des SIC nicht ersetzt werden. Hier geht es zum Steuerlichen
                  Info-Center (SIC):{" "}
                  <Link
                    href={
                      "https://www.bzst.de/DE/Service/SteuerlichesInfocenter/steuerlichesinfocenter_node.html"
                    }
                    className="text-orange underline"
                  >
                    https://www.bzst.de/DE/Service/SteuerlichesInfocenter/steuerlichesinfocenter_node.html
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-5 lg:px-0 bg-white">
        <div className="w-full max-w-[1276px] flex flex-col lg:flex-row gap-[60px] pt-[80px] pb-[84px]">
          <div className="w-full max-w-[475px]">
            <h2 className="text-dark font-semibold text-4xl">
              Quellensteuern in
              <br /> der EU im Gesamtüberblick
              <br /> (Einlagengeschäft)
            </h2>
            <p className="text-gray3 mt-[30px] max-w-[836px]">
              Deutschland hat mit den Mitgliedstaaten der EU bilaterale Verträge
              (Doppelbesteuerungsabkommen) geschlossen, um eine mehrfache
              steuerliche Belastung von Zinserträgen für Einlagen zu vermeiden
              bzw. die Belastung zu reduzieren. Nachfolgend finden Sie eine
              Gesamtübersicht in Anlehnung an die Tabelle „Anrechenbare
              ausländische Quellensteuer“ des Bundeszentralamtes für Steuern.
              Bitte beachten Sie, dass wir keine Haftung für die Korrektheit der
              Angaben übernehmen.
            </p>
            <p className="text-gray3 mt-[30px] max-w-[836px]">
              Für Details wenden Sie sich bitte an Ihren Steuerberater bzw. Ihr
              Finanzamt. Für die Reduzierung der Quellensteuer siehe
              Verfahrenshinweise im Abschnitt „Einzureichende Unterlagen bei
              Partnerbanken“.
            </p>
          </div>
          {/* <Image
            src={"./assets/images/taxInfo/table.svg"}
            alt=""
            width={741}
            height={1328}
          /> */}
          <Table />
        </div>
      </div>
      <div className="w-full flex justify-center bg-body py-[80px]">
        <div className="w-full max-w-[1276px]">
          <h2 className="text-center text-dark text-4xl">
            Die Einlagensicherungen der einzelnen Länder und Sicherungsgrenzen
            <br />
            in EU-Ländern mit Fremdwährungen
          </h2>
          <div className="flex flex-col md:flex-row px-5 lg:px-0 gap-[60px] mt-[40px]">
            <div className="bg-white p-5 flex h-[198px] flex-col lg:h-[396px] gap-y-5 w-[260px] lg:w-[380px]">
              <div
                className="flex cursor-pointer justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]"
                onClick={() => setSelectedSecond("Unterlagen")}
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark": selectedSecond !== "Unterlagen",
                      "text-orange font-semibold tracking-wide":
                        selectedSecond === "Unterlagen",
                    })}
                  >
                    Unterlagen
                  </p>
                </div>
                <Image
                  src={
                    selectedSecond === "Unterlagen"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedSecond !== "Unterlagen",
                  })}
                />
              </div>
              <div className="flex justify-between border-b border-solid border-input pb-5 w-[220px] lg:w-[340px]">
                <div className="flex items-center gap-x-2.5">
                  <p className="text-dark">Besteuerung</p>
                </div>
                <Image
                  src={"./assets/icons/black-arrow.svg"}
                  alt=""
                  width={16}
                  height={10}
                  className="-rotate-90"
                />
              </div>
              <div
                className="flex cursor-pointer justify-between pb-5 w-[220px] lg:w-[340px]"
                onClick={() => setSelectedSecond("Grundfreibeträge")}
              >
                <div className="flex items-center gap-x-2.5">
                  <p
                    className={clsx({
                      "text-dark": selectedSecond !== "Grundfreibeträge",
                      "text-orange font-semibold tracking-wide":
                        selectedSecond === "Grundfreibeträge",
                    })}
                  >
                    Grundfreibeträge
                  </p>
                </div>
                <Image
                  src={
                    selectedSecond === "Grundfreibeträge"
                      ? "./assets/icons/orange-arrow.svg"
                      : "./assets/icons/black-arrow.svg"
                  }
                  alt=""
                  width={16}
                  height={10}
                  className={clsx({
                    "-rotate-90": selectedSecond !== "Grundfreibeträge",
                  })}
                />
              </div>
            </div>
            {selectedSecond === "Unterlagen" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Unterlagen für Raisin Invest Kunden
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Der Versand der Jahressteuerbescheinigung für Ihr Portfolio
                  erfolgt stets bis Mitte April eines Jahres für das abgelaufene
                  Steuerjahr. In der Jahressteuerbescheinigung werden die
                  Kapitalerträge und die darauf abgeführten Steuern (inkl.
                  Solidaritätszuschlag und ggf. Kirchensteuer) kumuliert für ein
                  Kalenderjahr ausgewiesen.
                </p>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  Die Jahressteuerbescheinigung wird Ihnen von der Depotbank DAB
                  BNP Paribas im Original postalisch zugestellt, sofern:
                </p>
                <div className="flex gap-x-2.5 mt-[20px] ml-[20px] items-start">
                  <Image
                    src={"./assets/icons/circle.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                  <p className="text-gray3">
                    unter Berücksichtigung von Freistellungsaufträgen oder
                    Nichtveranlagungsbescheinigungen tatsächlich Steuern oder
                    Zuschläge einbehalten und abgeführt worden sind, und/oder
                  </p>
                </div>
                <div className="flex gap-x-2.5 mt-[20px] ml-[20px] items-start">
                  <Image
                    src={"./assets/icons/circle.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                  <p className="text-gray3">
                    Sie kein weiteres Konto bzw. Depot in einem weiteren
                    Geschäftsbereich der BNP Paribas Deutschland im abgelaufenen
                    Steuerjahr führten. Unterhielten Sie – wenn auch nur
                    zwischenzeitlich – im abgelaufenen Jahr neben Ihrem ETF Robo
                    ein weiteres Konto bzw. Depot bei der DAB oder Consorsbank
                    (beide gehören zu BNP Paribas Deutschland), erhalten Sie
                    Ihre Jahressteuerbescheinigung gesondert im Laufe des ersten
                    Halbjahres von dem entsprechenden Geschäftsbereich.
                  </p>
                </div>
              </div>
            )}
            {selectedSecond === "Grundfreibeträge" && (
              <div className="flex flex-col">
                <h2 className="text-dark font-semibold text-xl">
                  Grundfreibeträge
                </h2>
                <p className="text-gray3 mt-[30px] max-w-[836px]">
                  In Deutschland gelten für Einkünfte aus Kapitalvermögen
                  (Sparerpauschale) Grundfreibeträge, derzeit 801 Euro pro Jahr
                  für Alleinstehende und 1.602 Euro pro Jahr für Verheiratete.
                  Kunden können einen Freistellungsauftrag oder eine
                  Nichtveranlagungsbescheinigung für Ihr Zinsplan Invest
                  Portfolio einreichen.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
