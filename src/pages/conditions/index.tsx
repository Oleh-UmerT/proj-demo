import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import { environment } from "../../../projectConfig";

export default function Conditions() {
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
          <h1 className="text-white text-4xl md:text-[56px] absolute z-10 px-5 md:px-0 mt-[72px] md:mt-[198px]">
            Allgemeine geschäftsbedingungen
          </h1>
        </div>
        <Image src={"/assets/images/conditions.png"} alt="" fill />
      </div>
      <div className="w-full px-5 md:px-0 flex justify-center">
        <div className="w-full max-w-[1276px]">
          <div className="mt-[80px]">
            <p className="text-gray3 mt-[30px]">
              Dies ist eine Seite der {environment.company.site_name} Gruppe:{" "}
              {environment.company.name}, . Auf dieser Seite finde Sie die das
              Impressum der {environment.company.site_name} Gruppe
            </p>
            <p className="text-gray3 mt-[30px]">
              {" "}
              Redaktionell Verantwortlicher gemäß § 18 Abs. 2 MStV für Seiten
              der Raisin Gruppe: Dr. Tamaz Georgadze (Anschrift Raisin GmbH)
              {environment.company.site_name} ist eine Marke der{" "}
              {environment.company.name} Gruppe.
            </p>
            <p className="text-gray3 mt-[30px]">
              {" "}
              Die Produkte sind Angebote der jeweiligen Raisin Gesellschaft der
              Raisin Gruppe (nachfolgend im Einzelnen aufgeführt).
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              INTERNETPLATTFORM VON{" "}
              <span className=" capitalize">
                {environment.company.site_name}
              </span>
            </h2>
            <p className="text-gray3 mt-[10px]">
              Die Raisin Gruppe bietet Interessenten die Möglichkeit, sich zu
              registrieren und an der Internetplattform unter www.weltsparen.de
              und www.weltsparen.at (nachfolgend „Plattform“) teilzunehmen.
            </p>
            <p className="text-gray3 mt-[10px]">
              Die Plattform der Raisin GmbH bietet Kunden Zugang zu:
            </p>
            <ul className="list-decimal space-y-1 text-dark mt-[20px] pl-[40px]">
              <li className="">
                Einlagenangeboten (z. B. Fest- oder Tagesgelder) (nachfolgend
                auch „Produkt WeltSparen (Einlagenprodukte)“) von Unternehmen
                aus dem Europäischen Wirtschaftsraum, die über eine
                entsprechende Erlaubnis verfügen (nachfolgend „Partnerbank“ oder
                „Partnerbanken“),
              </li>
              <li className="">
                Sowie zu verschiedenen Finanzanlagen, die in Zusammenarbeit mit
                deiner Depotbank („depotführende Bank“ oder „Depotbank“) oder
                der Moonfare GmbH angeboten werden.
              </li>
            </ul>
            <p className="text-gray3 mt-[20px]">
              Die Raisin Gruppe stellt auf den jeweiligen Raisin
              Gesellschaftsplattformen Angebote von Partnerbanken bzw.
              Finanzanlagen dar. Sie erbringt technische Dienstleistungen im
              Zusammenhang mit dem Abschluss des Einlagen- bzw. Anlageprodukts
              zwischen dem Kunden und der Partnerbank oder des
              Kooperationspartners.
            </p>
            <p className="text-gray3 mt-[20px]">
              Im Zusammenhang mit Finanzanlagen unterstützt die Raisin Gruppe
              den Kunden beim Abschluss von Verträgen mit der jeweiligen
              depotführenden Bank oder einem Kooperationspartner.
            </p>
            <p className="text-gray3 mt-[20px]">
              Die Raisin GmbH ist weder Kreditinstitut oder
              Finanzdienstleistungsinstitut nach dem Kreditwesengesetz (KWG)
              noch Zahlungsdienstleister oder Zahlungsdienst nach dem
              Zahlungsdiensteaufsichtsgesetz (ZAG). Die Raisin GmbH hält eine
              Genehmigung als Finanzanlagenvermittler nach § 34f GewO.
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              DAS ANGEBOT FÜR FINANZANLAGEN DER RAISIN GMBH, DER RAISIN PENSION
              GMBH SOWIE DAS ANGEBOT DER RAISIN SERVICE GMBH STEHEN AKTUELL NUR
              DEUTSCHEN PRIVATKUNDEN ZUR VERFÜGUNG.
            </h2>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              KOOPERATION MIT DER RAISIN BANK AG
            </h2>
            <p className="text-gray3 mt-[10px]">
              Raisin GmbH, Raisin Service GmbH sowie Raisin Pension GmbH
              kooperieren mit der Raisin Bank AG (nachfolgend „Raisin Bank“),
              bei der das Girokonto des Kunden (nachfolgend „WeltSpar-Konto“)
              geführt wird. Das WeltSpar-Konto dient als Verrechnungskonto für
              Zahlungsaufträge zwischen einem Referenzkonto (üblicherweise das
              Hausbankkonto des Kunden) und dem jeweiligen Konto einer
              Partnerbank, der depotführenden Bank oder eines
              Kooperationspartners. Mit Blick auf Finanzanlagen erbringt die
              Raisin Bank gegenüber dem Kunden keine Anlagevermittlung.
            </p>
            <p className="text-gray3 mt-[20px]">
              Nach der Registrierung setzt der Kunde ein Passwort für den Zugang
              zum Onlinebanking und zur Plattform, die von der Raisin GmbH
              betrieben wird. Im Anschluss erfolgt die Eröffnung des
              WeltSpar-Kontos (inklusive Identifikation). Im Rahmen von
              Finanzanlagen werden zudem ein Verrechnungskonto sowie ein
              Wertpapierdepot (nachfolgend „Depot“) für den Kunden eröffnet. Die
              Raisin Bank überweist den gewünschten Anlagebetrag auf das für die
              Einlage des Kunden bei der Partnerbank geführte Konto bzw. auf das
              für die Verrechnung von erteilten Aufträgen bei der Depotbank
              angelegte Verrechnungskonto. Über das Onlinebanking kann der Kunde
              abhängig von den Konditionen des jeweiligen genutzten Angebots
              Prolongationen, vorzeitige Kündigungen sowie andere Transaktionen
              im Zusammenhang mit einem Angebot in Auftrag geben und Nachrichten
              der Partnerbanken und der Depotbank (z.B. Kontoauszüge) empfangen.
            </p>
            <p className="text-gray3 mt-[20px]">
              In der elektronischen Postbox des Onlinebankings wird für jeden
              Kunden individuell und nachvollziehbar die Korrespondenz (z. B.
              Verträge, Kontoauszüge) von Raisin Gruppengesellschaften,
              Partnerbanken, Kooperationspartnern und Depotbanken hinterlegt.
              Darüber hinaus steht zur Unterstützung des Kunden und Beantwortung
              von Fragen ein deutschsprachiger Kundenservice zur Verfügung.
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              KOOPERATION MIT DISTRIBUTIONSPARTNERN
            </h2>
            <p className="text-gray3 mt-[10px]">
              Darüber hinaus kooperiert die Raisin GmbH im Einlagenbereich mit
              Distributionspartnern, deren Kunden über die Internetplattform des
              jeweiligen Distributionspartners (nachfolgend jeweils
              „Distributionsplattform“) Zugang zu den Angeboten ausgewählter
              Partnerbanken von der Raisin GmbH haben (insgesamt
              „Distributionspartnerschaften“). Der Distributionspartner stellt
              auf der Distributionsplattform Angebote von Partnerbanken der
              Raisin GmbH dar und erbringt Dienstleistungen im Zusammenhang mit
              dem Abschluss des Plattformvertrags mit der Raisin GmbH, des
              WeltSpar-Kontos mit der Raisin Bank sowie des Einlagenprodukts
              zwischen dem Kunden und der Partnerbank. Kunden von
              Distributionspartnern, die neben der Distributionsplattform nicht
              auch die Plattform der Raisin GmbH nutzen, erhalten keine
              Zugangsdaten für die Plattform der Raisin GmbH und das dortige
              Onlinebanking. Sofern sich die Kunden nicht auch für die Plattform
              der Raisin GmbH registriert haben, können diese Kunden abhängig
              von den Konditionen des jeweils genutzten Angebots einer
              Partnerbank Transaktionen im Zusammenhang mit einem Angebot nur
              über die Distributionsplattform in Auftrag geben sowie Nachrichten
              der Partnerbanken und sonstige Korrespondenz der Raisin GmbH, der
              Raisin Bank und Partnerbanken nur über die Distributionsplattform
              empfangen. Dem Kunden ist es aber stets gestattet, sich neben der
              Distributionsplattform auch für die Plattform der Raisin GmbH zu
              registrieren und diese separat zu nutzen.
            </p>
            <p className="text-gray3 mt-[30px]">
              Zur Nutzung der Raisin Gruppen Produkte schließt der Kunde
              folgende separate Verträge ab:
            </p>
            <div className="flex gap-x-2.5 mt-[30px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                Plattformvertrag mit der Raisin GmbH,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                Kontovertrag mit der Raisin Bank über die Eröffnung und Nutzung
                des kostenlosen WeltSpar-Kontos,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                ggf. Vertrag mit der Raisin Service GmbH für das Produkt Raisin
                Crypto,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                ggf. Vertrag mit der NFS Netfonds Financial Service GmbH für das
                Produkt Raisin Crypto,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                ggf. Einlagevertrag mit der jeweiligen Partnerbank,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                ggf. Depotvertrag mit der depotführenden Bank,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                ggf. Vertrag mit einem Distributionspartner der Raisin GmbH,
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[10px] ml-[20px] mb-[200px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                ggf. Vertrag mit Kooperationspartnern für das Produkt Raisin
                Private Equity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
