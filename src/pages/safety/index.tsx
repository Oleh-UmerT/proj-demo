import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";

export default function Safety() {
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
            Ihre Sicherheit ist uns wichtig
          </h1>
        </div>
        <Image src={"/assets/images/it.png"} alt="" fill />
      </div>
      <div className="w-full px-5 md:px-0 flex justify-center">
        <div className="w-full max-w-[1276px]">
          <div className="mt-[80px]">
            <h2 className="text-dark text-4xl">
              Unser Beitrag zu Ihrer Sicherheit
            </h2>
            <p className="text-gray3 mt-[30px]">
              Die Sicherheit Ihrer Daten hat beim Onlinebanking oberste
              Priorität. Deshalb setzen wir stets auf die aktuellsten
              Sicherheitsstandards: Eine Firewall verhindert den nicht
              autorisierten Zugriff von außen auf die Daten in unseren Systemen.
              Darüber hinaus sorgt ein mehrstufiges Verschlüsselungs- und
              Identifizierungssystem dafür, dass Unbefugte Ihre Daten weder
              erfragen noch abfangen oder lesbar machen können.
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              FIREWALL-SCHUTZ
            </h2>
            <p className="text-gray3 mt-[10px]">
              Hierdurch werden nicht autorisierte Zugriffe unterbunden um die
              Informationen in unseren Systemen abzuschirmen.
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              ONLINEBANKING MIT SSL-VERSCHLÜSSELUNG / SICHERHEITSZERTIFIKAT
            </h2>
            <p className="text-gray3 mt-[10px]">
              Ihre persönlichen Daten werden im Onlinebanking bei der
              Übermittlung über das Internet per SSL (Secure Sockets Layer)
              verschlüsselt. Sie erkennen diese Verschlüsselung daran, dass dem
              bekannten „http“ in der Internetadresse ein “s“ (https) angehängt
              wird. Es handelt sich bei dem Zertifikat um ein Symantec/Norton
              (ehemals Verisign) Secure Site Pro Zertifikat mit Extended
              Validation sowie laufendem Malware- und Schwachstellenscan.
            </p>
          </div>
          <div className="bg-body p-8 mt-[30px]">
            <div>
              <h2 className="text-dark text-base font-semibold">
                WEITERE INFORMATIONEN
              </h2>
              <p className="text-orange underline mt-[10px]">
                https://www.bsi-fuer-buerger.de/
              </p>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-dark text-base font-semibold">
                TOOLS FÜR DIE ONLINE-SICHERHEIT
              </h2>
              <p className="text-orange underline mt-[10px]">
                https://www.bsi-fuer-buerger.de/
              </p>
            </div>
          </div>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            VERSCHLÜSSELUNG
          </h2>
          <p className="text-gray3 mt-[10px]">
            Wenn wir in Ihrem Auftrag Daten an Partnerbanken übermitteln (z.B.
            bei einer Kontoeröffnung), so sind diese Daten stets mit 2048 Bit
            PGP verschlüsselt.
          </p>
          <h2 className="text-dark text-base font-semibold mt-[30px]">PIN</h2>
          <p className="text-gray3 mt-[10px]">
            Die PIN (Persönliche Identifikationsnummer) ist praktisch Ihr
            Schlüssel zum persönlichen Onlinebankingbereich der Bank. Für den
            Zutritt genügen die Eingabe der Kontonummer bei der Raisin Bank
            sowie der sechs- bis sechszehnstelligen PIN (Sonderzeichen sind
            möglich). Die PIN gestattet noch keine Bankgeschäfte wie
            Überweisungen oder Festgeldanlagen. Mit der PIN können Sie lediglich
            den Kontostand einsehen oder Umsätze anzeigen lassen.
          </p>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            PERSÖNLICHES TRANSAKTIONSPASSWORT BZW. MTAN
          </h2>
          <p className="text-gray3 mt-[10px]">
            Mit Ihrem persönlichen Transaktionspasswort bzw. mTAN bestätigen Sie
            alle Transaktionen im Onlinebanking wie Überweisungen oder
            Festgeldanlagen. Sie legen bei der ersten Anmeldung dieses sechs-
            bis sechzehnstellige Auftragskennwort selbst fest bzw. erhalten nach
            jedem Auftrag eine einmalige mTAN auf Ihr Mobiltelefon per SMS
            verschickt.
          </p>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            AUTOMATISCHE ABMELDUNG BEI INAKTIVITÄT
          </h2>
          <p className="text-gray3 mt-[10px]">
            Nach 15 Minuten ohne Aktivität melden wir Sie automatisch vom
            Onlinebanking ab. Die verbleibende Zeit zeigen wir Ihnen auf jeder
            Seite an. Wenn Sie dennoch mit dem Onlinebanking fortfahren wollen,
            loggen Sie sich einfach wieder ein.
          </p>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            ÜBERWEISUNG NUR AUF REFERENZKONTO
          </h2>
          <p className="text-gray3 mt-[10px]">
            Sie geben bei der Kontoeröffnung ein Referenzkonto an.
            Rücküberweisungen sind nur auf dieses von Ihnen bestimmte Konto
            möglich. Das Referenzkonto kann nur schriftlich und mit Ihrer
            Unterschrift geändert werden.
          </p>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            GESICHERTE PERSÖNLICHE POSTBOX
          </h2>
          <p className="text-gray3 mt-[10px]">
            Ihre Postbox finden Sie in Ihrem persönlichen und gesicherten
            Onlinebanking-Bereich. Ihre persönliche Postbox nimmt alle
            elektronischen Informationen auf, die Sie von der Raisin oder der
            Raisin Bank erhalten. Es ist sichergestellt, dass die Kommunikation
            von und zur Postbox verschlüsselt und somit vor dem Zugriff Dritter
            geschützt ist. Sie erhalten jedoch eine E-Mail an Ihre private
            Adresse, wenn neue Nachrichten für Sie vorliegen.
          </p>
          <h2 className="text-dark text-4xl mt-[80px]">
            Ihr Beitrag zur Sicherheit
          </h2>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            BITTE BEACHTEN SIE FOLGENDE GRUNDREGELN FÜR SICHERES ONLINEBANKING
            BEI WELTSPAREN
          </h2>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              WeltSparen fragt beim Login zum Onlinebanking niemals nach Ihrem
              Transaktionspasswort!
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              WeltSparen schickt Ihnen keine E-Mails, die nach Ihren
              Zugangsdaten fragen!
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              WeltSparen bittet grundsätzlich nicht um Rücksendung von
              Zugangsdaten, PIN oder TAP (Transaktionspasswort) per E-Mail!
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
              Geben Sie die URL zum WeltSparen-Onlinebanking
              (https://banking.weltsparen.de) immer direkt über die Tastatur ein
              und beachten Sie, dass Sie dabei lediglich ein Browserfenster bzw.
              ‚Tab‘ geöffnet haben!
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
              Seien Sie äußerst vorsichtig auf Internetseiten, deren Adresse mit
              einer IP-Nummer statt eines Domain-Namens beginnt (z.B.:
              https://1232.456.789/…) oder deren Adresse WeltSparen nur als
              Sub-Domainnamen (z.B.: https://www.weltsparen.domainname.com/…)
              bzw. Namensergänzungen oder Schreibvarianten enthält (z.B.
              https://www.weltsparen-site.net/…)!
            </p>
          </div>
          <h2 className="text-dark text-base font-semibold mt-[30px]">
            WICHTIG BEIM ONLINEBANKING
          </h2>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              Loggen Sie sich möglichst nicht über einen Ihnen unbekannten
              Computer (z.B. Internetcafe) ins Onlinebanking ein.
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
              Ändern Sie Ihre PIN regelmäßig und benutzen Sie dabei
              Kombinationen aus Buchstaben in Groß- und Kleinschreibung und
              Zahlen. Verwenden Sie dabei keine Kombinationen, die einen
              privaten Bezug haben wie beispielsweise Namen, Geburtsdatum,
              Telefonnummer, Postleitzahlen o.ä.
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              Führen Sie keine Online-Transaktionen aus, wenn Sie vermuten, dass
              Ihr PC von einem Trojanischen Pferd oder einem Virus befallen ist.
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              Nutzen Sie immer den Button ‚Abmelden‘, um das Onlinebanking zu
              verlassen.
            </p>
          </div>
          <div className="flex gap-x-2.5 mt-[20px] ml-[20px] mb-[80px] items-start">
            <Image
              src={"./assets/icons/circle.svg"}
              alt=""
              width={12}
              height={12}
            />
            <p className="text-gray3">
              Löschen Sie nach Verlassen des Onlinebanking immer den
              Zwischenspeicher (Cache), sofern nicht nur Sie an Ihrem Computer
              arbeiten. Beim Microsoft Internet Explorer: Extras {"->"}{" "}
              Internetoptionen {"->"} Allgemein {"->"} Temporäre Internetdateien{" "}
              {"->"} Dateien löschen.Bei Firefox: Extras {"->"} Einstellungen{" "}
              {"->"} Datenschutz {"->"} Private Daten {"->"} jetzt löschen.Bei
              Chrome: Klicken Sie auf das Chrome-Menü {"->"} Tools {"->"}{" "}
              Browserdaten löschenSchalten Sie beim Microsoft Internet Explorer
              die Möglichkeit ab, verschlüsselte Seiten auf der Festpatte
              zwischenzuspeichern. Aktivieren Sie die Option Verschlüsselte
              Seiten nicht auf der Festplatte speichern unter Internetoptionen{" "}
              {"->"} Erweitert {"->"} Sicherheit.
            </p>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
