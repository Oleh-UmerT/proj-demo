import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";

export default function Imprint() {
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
          <h1 className="text-white text-[56px] absolute z-10 px-5 md:px-0 mt-[72px] md:mt-[198px]">
            Impressum
          </h1>
        </div>
        <Image src={"/assets/images/impressum-header.png"} alt="" fill />
      </div>
      <div className="w-full px-5 md:px-0 flex justify-center">
        <div className="w-full max-w-[1276px]">
          <div className="mt-[80px]">
            <h2 className="text-dark text-4xl">Overview</h2>
            <p className="text-gray3 mt-[30px]">
              Dies ist eine Seite der Raisin Gruppe. Zur Raisin Gruppe gehören
              unter anderem folgende Gesellschaften: Raisin GmbH, Raisin Bank AG
              und Raisin Pension GmbH und Raisin Service GmbH. Auf dieser Seite
              finde Sie die jeweiligen Impressen dieser Raisin Gesellschaften.
            </p>
            <p className="text-gray3 mt-[30px]">
              Redaktionell Verantwortlicher gemäß § 18 Abs. 2 MStV für Seiten
              der Raisin Gruppe: Dr. Tamaz Georgadze (Anschrift Raisin GmbH)
              <br />
              WeltSparen ist eine Marke der Raisin Gruppe
            </p>
            <p className="text-gray3 mt-[30px]">
              Die Produkte sind Angebote der jeweiligen Raisin Gesellschaft der
              Raisin Gruppe (nachfolgend im Einzelnen aufgeführt).
            </p>
          </div>
          <div className="mt-[80px]">
            <h2 className="text-dark text-4xl">Raisin GmbH</h2>
            <p className="text-gray3 mt-[30px]">
              Schlesische Straße 33/34, 10997 Berlin
            </p>
            <h3 className=" font-semibold text-dark mt-[30px]">PRIVATKUNDEN</h3>
            <p className="text-gray3 mt-[10px]">Telefon: +49 30 770 191 291</p>
            <p className="text-orange underline">kundenservice@weltsparen.de</p>
            <p className="text-orange underline">www.weltsparen.de</p>
            <h3 className=" font-semibold text-dark mt-[30px]">
              GESCHÄFTSKUNDEN
            </h3>
            <p className="text-gray3 mt-[10px]">Telefon: +49 30 770 191 292</p>
            <p className="text-orange underline">
              geschaeftskunden@weltsparen.de
            </p>
            <p className="text-orange underline">
              www.weltsparen.de/geschaeftskunden
            </p>
            <p className="text-gray3 mt-[20px]">
              Geschäftsführer: Dr. Frank Freund, Dr. Tamaz Georgadze, Katharina
              Lüth, Michael Stephan Handelsregister: Amtsgericht Charlottenburg,
              HRB 146726 BUSt-ID: DE287376984Redaktionell Verantwortlicher gemäß
              § 18 Abs. 2 MStV: Dr. Tamaz Georgadze (Anschrift s.o.)
            </p>
            <h3 className=" font-semibold text-dark mt-[30px]">
              ERLAUBNIS NACH § 34F GEWERBEORDNUNG (GEWO)
            </h3>
            <p className="text-gray3 mt-[10px]">
              Die Raisin GmbH verfügt über eine Erlaubnis als
              Finanzanlagenvermittler nach § 34f Abs. 1 S. 1 Nr. 1-3 GewO und
              ist im Finanzanlagenvermittler-Register Bezirksamt Pankow von
              Berlin, Postfach 730113, 13062 Berlin erteilt.
            </p>
            <h3 className=" font-semibold text-dark mt-[30px]">
              AUFSICHTSBEHÖRDE:
            </h3>
            <p className="text-gray3 mt-[10px]">
              Bezirksamt Friedrichshain-Kreuzberg, Frankfurter Allee 35/37, 102
              (
              <span className="text-orange underline">
                www.vermittlerregister.info
              </span>
              ) unter der Registrierungsnummer D-F-107-QQ43-76 eingetragen.
            </p>
            <p className="text-gray3 mt-[20px]">
              Finanzanlagenvermittler sind nach Maßgabe von § 34 f
              Gewerbeordnung (GewO) tätig. Die Erlaubnis der Raisin GmbH wurde
              nach § 34 f Abs. 1 Satz Nr. 1–3 GewO durch das B47 Berlin
            </p>
            <p className="text-gray3 mt-[20px]">
              Raisin GmbH ist Mitglied der Industrie- und Handelskammer IHK
              Berlin, Fasanenstraße 85, 10623 Berlin
            </p>
            <h3 className=" font-semibold text-dark mt-[30px]">
              BERUFSBEZEICHNUNG:
            </h3>
            <p className="text-gray3 mt-[10px]">
              Finanzanlagenvermittler nach § 34f Abs. 1 GewO; Bundesrepublik
              Deutschland
            </p>
            <h3 className=" font-semibold text-dark mt-[30px]">
              BERUFSRECHTLICHE REGELUNGEN:
            </h3>
            <p className="text-gray3 mt-[10px]">
              § 34f Gewerbeordnung (GewO) – Verordnung der
              Finanzanlagenvermittler (FinVermV)
            </p>
            <p className="text-gray3 mt-[10px] mb-[165px]">
              Die berufsrechtlichen Regelungen können über die vom
              Bundesministerium der Justiz und von der juris GmbH betriebenen
              Webseite http://www.gesetze-im-internet.de eingesehen und
              abgerufen werden.
            </p>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
