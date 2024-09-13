import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";

export default function Protection() {
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
            Datenschutz bei raisin
          </h1>
        </div>
        <Image src={"/assets/images/protection-header.png"} alt="" fill />
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
              WeltSparen ist eine Marke der Raisin Gruppe.
            </p>
            <p className="text-gray3 mt-[30px]">
              Die Produkte sind Angebote der jeweiligen Raisin Gesellschaft der
              Raisin Gruppe (nachfolgend im Einzelnen aufgeführt).
            </p>
          </div>
          <div className="mt-[80px]">
            <h2 className="text-dark text-4xl">Allgemeines</h2>
            <p className="text-gray3 mt-[30px]">
              Die Raisin Gruppe bietet Ihnen mittels verschiedener
              Internetplattformen Zugang zu Einlage- und Anlageprodukten
              ausgewählter Banken und Kooperationspartnern an. Darüber hinaus
              können unsere Kunden zusätzlich das Onlinebanking der Raisin Bank
              AG, im Folgenden „Raisin Bank“ genannt, erreichen.
            </p>
            <p className="text-gray3 mt-[20px]">
              Die Raisin Gruppe ist sich der Bedeutung der ihr anvertrauten,
              personenbezogenen Daten bewusst. Sie stellt sicher, dass die von
              Kunden und Interessenten im Rahmen ihres Internetangebotes
              eingegebenen Daten vertraulich behandelt werden.
            </p>
            <p className="text-gray3 mt-[20px]">
              Personenbezogene Daten sind solche, die Ihrer Person zugeordnet
              werden können. Darunter fallen z. B. Ihr Name, Ihre Anschrift,
              Ihre Telefonnummer und weitere für die Geschäftsabwicklung
              erforderliche Daten. Informationen, die nicht direkt mit Ihrer
              Person in Verbindung gebracht werden, gehören nicht dazu.
            </p>
            <p className="text-gray3 mt-[20px]">
              Die personenbezogenen Daten der Kunden und Interessenten werden
              durch die Anwendung hoher Sicherheitsstandards und durch
              Arbeitsabläufe, die besonders dazu geschaffen wurden, um den
              Missbrauch dieser Daten zu verhindern, geschützt.
            </p>
            <h3 className=" font-semibold text-dark mt-[30px]">
              KUNDENINFORMATIONEN ZUR DATENVERARBEITUNG NACH DER
              EU-DATENSCHUTZ-GRUNDVERORDNUNG (DSGVO)
            </h3>
            <p className="text-gray3 mt-[10px]">
              Der Raisin GmbH (nachfolgend „Raisin“) ist der Schutz
              personenbezogener Daten wichtig. Daher verpflichtet Raisin sich,
              die gesetzlichen Datenschutzbestimmungen einzuhalten, um
              hinreichenden Schutz und Sicherheit der Kundendaten zu erreichen.
              Hiermit informieren wir Sie über die Verarbeitung Ihrer
              personenbezogenen Daten bei Raisin und die Ihnen zustehenden
              datenschutzrechtlichen Ansprüche und Rechte.
            </p>
            <h3 className=" font-bold text-dark mt-[30px]">
              1) Wer ist für die Datenverarbeitung verantwortlich und an wen
              können Sie sich wenden? Verantwortlich für die Datenverarbeitung
              ist:
            </h3>
            <p className="text-gray3 mt-[20px]">Raisin GmbH</p>
            <p className="text-gray3">Schlesische Straße 33/34,</p>
            <p className="text-gray3">10997 Berlin, Germany</p>
            <p className="text-gray3">Telefon: +49 30 770 191 291</p>
            <p className="text-gray3">
              E-Mail-Adresse:{" "}
              <span className="text-orange underline">
                kundenservice@weltsparen.de
              </span>
              ,{" "}
              <span className="text-orange underline">
                kundenservice@weltsparen.at
              </span>
            </p>
            <p className="text-gray3 mt-[20px]">
              Unser betrieblicher Datenschutzbeauftragter ist zu erreichen
              unter: DatenschutzbeauftragterRaisin GmbH
            </p>
            <p className="text-gray3">Schlesische Straße 33/34,</p>
            <p className="text-gray3">10997 Berlin, Germany</p>
            <p className="text-gray3">Telefon: +49 30 770 191 291</p>
            <p className="text-gray3">
              E-Mail-Adresse:{" "}
              <span className="text-orange underline">
                datenschutz@weltsparen.de
              </span>
            </p>
            <h3 className=" font-bold text-dark mt-[30px]">
              2) Welche Daten werden von uns verarbeitet und aus welchen Quellen
              stammen diese Daten?
            </h3>
            <p className="text-gray3 mt-[20px]">
              Wir verarbeiten die personenbezogenen Daten, die wir im Rahmen der
              Geschäftsbeziehung von Ihnen erhalten. Die Geschäftsbeziehung
              erstreckt sich von der Anbahnung eines Vertrags über die
              Abwicklung bis hin zur Beendigung des Vertrages. Zudem verarbeiten
              wir Daten, die wir aus öffentlich zugänglichen Quellen (z. B.
              Handelsregister) zulässigerweise erhalten haben.
            </p>
            <p className="text-gray3 mt-[20px]">
              Des Weiteren verarbeiten wir personenbezogene Daten, zu deren
              Verarbeitung wir als Auftragsverarbeiter aufgrund eines
              Auftragsverarbeitungsvertrages verpflichtet sind. Personenbezogene
              Daten, die ausschließlich für die Kontoeröffnung bei der Raisin
              Bank erforderlich sind, werden von Raisin für die Raisin Bank
              erhoben.
            </p>
            <p className="text-gray3 mt-[20px]">
              Relevante personenbezogene Daten, die von uns verarbeitet werden,
              können sein: z .B. Vor- und Nachname, Anschrift, Geburtsdatum und
              -ort, Mailadresse, Kontoverbindungsdaten, Angaben zum Einkommen,
              Angaben zum Vermögen, Familienstand, Steueridentifikationsnummer
              und -ansässigkeit, Steuernummer, Ausweisdaten, Login Daten,
              Kundennummer, etc.
            </p>
            <p className="text-gray3 mt-[20px]">
              Insbesondere Ihre Angaben zum Beruf und zum Familienstand
              verarbeiten wir im Auftrag der Raisin Bank.
            </p>
            <p className="text-gray3 mt-[20px]">
              Wenn wir Sie telefonisch kontaktieren, erfolgt dies grundsätzlich
              nur mit Ihrer Zustimmung oder in dringenden Angelegenheiten.
              Telefonische Kontakte erfolgen über Ihre bei uns im Rahmen der
              Registrierung hinterlegte Telefonnummer. Wir verarbeiten im
              Zusammenhang mit der Kontaktaufnahme Ihre Kontaktdaten sowie
              gegebenenfalls Ihr Anliegen oder im Telefonat besprochene Details.
              Beachten Sie bitte die Hinweise zur Aufzeichnungspflicht für
              Telefonate und elektronische Kommunikation unter Ziffer 3. (b).
            </p>
            <h3 className=" font-bold text-dark mt-[30px]">
              3) Für welche Zwecke und auf welcher Rechtsgrundlage werden die
              Daten verarbeitet?
            </h3>
            <p className="text-gray3 mt-[20px]">
              &nbsp;&nbsp;&nbsp;(a) Zur Erfüllung von vertraglichen Pflichten
              (Art. 6 Abs. 1 lit b) DSGVO): Die Verarbeitung personenbezogener
              Daten (Art. 4 Nr. 2 DSGVO) erfolgt zur Erbringung unserer
              Dienstleistungen im Rahmen des Plattformvertrages und sonstiger
              diesbezüglich erforderlicher Tätigkeiten. Auch vorvertragliche
              Angaben, die Sie im Rahmen des Registrierungsprozesses machen,
              sind mitumfasst.
            </p>
            <p className="text-gray3 mt-[20px]">
              &nbsp;&nbsp;&nbsp;(b) Zur Erfüllung rechtlicher Verpflichtungen
              (Art. 6 Abs. 1 lit c) DSGVO): Die Verarbeitung personenbezogener
              Daten kann zum Zweck der Erfüllung unterschiedlicher gesetzlicher
              Verpflichtungen erfolgen (z. B. Abgabenordnung etc.).Insbesondere
              sind wir gesetzlich verpflichtet, Telefonate sowie sonstige
              elektronische Kommunikation zu Beweiszwecken aufzuzeichnen, die
              sich auf die Vermittlung von Finanzanlagen beziehen. Dies gilt
              auch dann, wenn beispielsweise das Telefongespräch nicht zum
              Abschluss eines Vertrages führt. Die Aufzeichnung und Aufbewahrung
              erfolgt zur Erfüllung der gesetzlichen Pflichten gem. Art. 6 Abs.
              1 lit c) DSGVO i.V.m. § 18 a FinVermV. Sie können jederzeit eine
              Kopie der Aufzeichnung bei uns anfordern.
            </p>
            <p className="text-gray3 mt-[20px]">
              &nbsp;&nbsp;&nbsp;(c) Im Rahmen Ihrer Einwilligung (Art. 6 Abs. 1
              lit a) DSGVO): Im Fall, dass Sie uns eine Einwilligung zur
              Verarbeitung Ihrer personenbezogenen Daten für bestimmte Zwecke
              erteilt haben, erfolgt eine Verarbeitung gemäß den in der
              Zustimmungserklärung festgelegten Zwecken und im darin erteilten
              Umfang. Sie haben die Möglichkeit, die erteilte Einwilligung
              jederzeit mit Wirkung für die Zukunft zu widerrufen. Der Widerruf
              kann formfrei entweder an datenschutz@weltsparen.de oder
              postalisch an Raisin GmbH, Schlesische Straße 33/34, 10997 Berlin,
              Deutschland gerichtet werden.
            </p>
            <p className="text-gray3 mt-[20px]">
              &nbsp;&nbsp;&nbsp;(d) Zur Wahrung berechtigter Interessen (Art. 6
              Abs. 1 lit f) DSGVO): Im Rahmen einer Interessenabwägung kann
              zugunsten von Raisin oder eines Dritten eine Datenverarbeitung
              über die eigentliche Erfüllung des Vertrags hinaus zur Wahrung
              berechtigter Interessen von uns oder Dritten erfolgen. Eine
              diesbezügliche Datenverarbeitung erfolgt bei:
            </p>
            <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                Prüfung und Optimierung von Verfahren zur Bedarfsanalyse und
                direkter Kundenansprache;
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[20px] ml-[20px] items-start">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                Maßnahmen, die zur Geschäftssteuerung, Weiterentwicklung von
                Dienstleistungen sowie
                <br /> Kundenrückgewinnungen dienen;
              </p>
            </div>
            <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
              <Image
                src={"./assets/icons/toggle.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-gray3">
                Werbung oder Markt- und Meinungsforschung, soweit Sie einer
                derartigen Nutzung nicht nach Art. 21 DSGVO widersprochen haben.
              </p>
            </div>
            <h2 className=" font-semibold text-dark mt-[30px]">
              INFORMATION ÜBER IHR WIDERSPRUCHSRECHT NACH ARTIKEL 21
              EU-DATENSCHUTZ-GRUNDVERORDNUNG (DSGVO)
            </h2>
            <h3 className=" font-bold text-dark mt-[20px]">
              1) Einzelfallbezogenes Widerspruchsrecht
            </h3>
            <p className="text-gray3 mt-[20px]">
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs.
              1 lit e) DSGVO (Datenverarbeitung im öffentlichen Interesse) und
              Art. 6 Abs. 1 lit f) DSGVO (Datenverarbeitung auf der Grundlage
              einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies
              gilt auch für ein auf diese Bestimmung gestütztes Profiling im
              Sinne von Artikel 4 Abs. 4 DSGVO. Sollten Sie Widerspruch
              einlegen, werden wir Ihre personenbezogenen Daten nicht mehr
              verarbeiten, es sei denn, wir können zwingende schutzwürdige
              Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
              Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>
            <h3 className=" font-bold text-dark mt-[20px]">
              2) Widerspruchsrecht gegen Verarbeitung von Daten zur
              Direktwerbung
            </h3>
            <p className="text-gray3 mt-[20px]">
              In Einzelfällen verarbeiten wir Ihre personenbezogenen Daten, um
              Direktwerbung zu betreiben. Sie haben das Recht, jederzeit
              Widerspruch gegen die Verarbeitung Sie betreffender
              personenbezogener Daten zum Zwecke derartiger Werbung einzulegen;
              dies gilt auch für das Profiling, soweit es mit solcher
              Direktwerbung in Verbindung steht. Widersprechen Sie der
              Verarbeitung für Zwecke der Direktwerbung, so werden wir Ihre
              personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.
            </p>
            <h3 className=" font-bold text-dark mt-[20px]">
              3) Ihr Widerspruch kann formfrei erfolgen an:
            </h3>
            <p className="text-gray3 mt-[10px]">
              Telefon Privatkunden: +49 (0)30 770 191 291
            </p>
            <p className="text-gray3">
              E-Mail Privatkunden:{" "}
              <span className="text-orange underline">
                kundenservice@weltsparen.de
              </span>
            </p>
            <p className="text-gray3 mt-[10px]">
              Telefon Geschäftskunden: +49 (0)30 770 191 292
            </p>
            <p className="text-gray3">
              E-Mail Geschäftskunden{" "}
              <span className="text-orange underline">
                geschaeftskunden@weltsparen.de
              </span>
            </p>
            <h2 className=" font-semibold text-dark mt-[30px]">
              INFORMATIONEN ZUM ÜBERWEISUNGSVERKEHR
            </h2>
            <h3 className=" font-bold text-dark mt-[20px]">
              Webseite-Personalisierung
            </h3>
            <p className="text-gray3 mt-[20px]">
              Mit der Aktivierung von Cookies in Ihrem Browser bestätigen Sie,
              dass Raisin folgende Daten für die Zwecke der
              Webseite-Personalisierung, Browsererlebnis-Optimierung, Analyse
              Ihres Verhaltens auf der Webseite und Lieferung relevanter
              Werbeanzeigen verarbeiten kann: (IP-) Adresse, Name, Vorname,
              Geschlecht, E-Mail-Adresse, Login-Daten, Zeitzoneneinstellung,
              Betriebssystem und -plattform, Informationen über Besuche
              einschließlich der URL, Suchbegriffe, Informationen darüber, was
              Sie sich auf unserer Webseite angesehen haben oder dort gesucht
              haben, Reaktionszeit der Webseite, Herunterladen-Fehler, Dauer von
              Besuchen bestimmter Seiten, Information über Webseite-Interaktion
              (z. B. Scrollen, Klicks und Mouse-Overs) und die für das Verlassen
              der Seite verwendeten Methoden, Aktivitäten von Benutzern, Surfen
              auf Webseiten. Die Rechtsgrundlage für die Verarbeitung von
              Cookies ist unser berechtigtes Interesse nach Artikel 6 Abs. 1
              Buchstabe f) DSGVO.
            </p>
            <h3 className=" font-bold text-dark mt-[20px]">
              Direktmarketing (Nichtkunden)
            </h3>
            <p className="text-gray3 mt-[20px]">
              Raisin verarbeitet personenbezogene Daten von Personen, die den
              Empfang personalisierter (gezielter) Newsletters abonniert haben.
              Die Rechtsgrundlage für die Verarbeitung dieser Daten ist die
              Zustimmung gemäß Artikel 6 Abs. 1 Buchstabe a) DSGVO. Sie haben
              das Recht, Ihre Zustimmung jederzeit zu widerrufen. Raisin
              verarbeitet diese Daten als Verantwortliche im Sinne von Artikel 4
              Abs. 7 DSGVO. Die für diesen Zweck verarbeiteten Daten können
              enthalten: E-Mail-Adresse, Geschlecht, Login-Daten,
              Zeitzoneneinstellung, Betriebssystem und -plattform, Informationen
              über Besuche einschließlich URL, Suchbegriffe, Information
              darüber, was Sie auf unserer Seite gesucht oder sich angesehen
              haben, Reaktionszeit der Webseite, Herunterladen-Fehler, Dauer von
              Besuchen bestimmter Seiten, Information über Webseite-Interaktion
              (z. B. Scrollen, Klicks und Mouse-Overs) und die für das Verlassen
              der Seite verwendeten Methoden, Aktivitäten von Benutzern, Surfen
              auf Webseiten.
            </p>
            <h3 className=" font-bold text-dark mt-[20px]">
              Direktmarketing (Weltsparen-Kunden)
            </h3>
            <p className="text-gray3 mt-[20px]">
              Raisin verarbeitet personenbezogene Daten zum Zweck des gezielten
              E-Mail-Marketings für bestehende Kunden. Die für diesen Zweck
              verarbeiteten Daten können enthalten: E-Mail-Adresse, Geschlecht,
              Login-Daten, Zeitzoneneinstellung, Betriebssystem und -plattform,
              Informationen über Besuche einschließlich URL, Suchbegriffe,
              Information darüber, was Sie auf unserer Seite gesucht oder sich
              angesehen haben, Reaktionszeit der Webseite, Herunterladen-Fehler,
              Dauer von Besuchen bestimmter Seiten, Information über
              Webseite-Interaktion (z. B. Scrollen, Klicks und Mouse-Overs) und
              die für das Verlassen der Seite verwendeten Methoden, Aktivitäten
              von Benutzern, Surfen auf Webseiten. Die Rechtsgrundlage für die
              Verarbeitung dieser Daten ist unser berechtigtes Interesse nach
              Artikel 6 Abs. 1 Buchstabe f) DSGVO. Raisin verarbeitet diese
              Daten als Verantwortliche im Sinne von Artikel 4 Abs. 7 DSGVO. Sie
              haben das Recht, Ihre Zustimmung mit der Verarbeitung widerrufen.
            </p>
            <h2 className=" text-5xl text-dark mt-[80px]">Services</h2>
            <h3 className=" font-semibold text-dark mt-[30px]">MARKETING</h3>
            <p className="text-gray3 mt-[20px] mb-[94px]">
              Diese Technologien werden von Werbetreibenden verwendet, um
              Anzeigen zu schalten, die für Ihre Interessen relevant sind.
            </p>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
