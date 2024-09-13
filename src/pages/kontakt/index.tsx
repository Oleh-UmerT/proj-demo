import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { environment } from "../../../projectConfig";

export default function ContactUs() {
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
          <h1 className="text-white text-4xl md:text-[56px] absolute z-10 mt-[72px] ml-[20px] md:ml-0 lg:mt-[198px]">
            Service & Kontakt
          </h1>
        </div>
        <Image src={"/assets/images/contact.png"} alt="" fill />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1276px] p-5">
          <div className="mt-[80px]">
            <h2 className="text-dark text-base font-semibold">
              Liebe Kundin, lieber Kunde,
            </h2>
            <p className="text-gray3 mt-[20px]">
              aufgrund des aktuell sehr hohen Volumens an telefonischen und
              schriftlichen Anfragen verzögert sich derzeit die Bearbeitung.
              Dafür bitten wir Sie um Entschuldigung.
            </p>
            <div className=" border border-solid border-gray2 rounded-lg w-full p-5 mt-[30px]">
              <h2 className="text-dark text-xl font-medium">
                Den WeltSparen-Kundenservice erreichen Sie aktuell wie folgt:
              </h2>
              <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3">
                  Montag – Dienstag: 9:00 – 16:00 Uhr
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3">Mittwoch: 12:30 – 16:30 Uhr</p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px] ml-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3">
                  Donnerstag – Freitag: 9:00 – 16:00 Uhr
                </p>
              </div>
            </div>
            <p className="text-gray3 mt-[30px]">
              Es ist uns ein wichtiges Anliegen, möglichst schnell wieder in der
              gewohnten Geschwindigkeit die Anliegen unserer Kundinnen und
              Kunden zu bearbeiten.
              <br /> Wir haben bereits entsprechende Maßnahmen ergriffen, um
              unsere Erreichbarkeit für Sie wieder mit dem gewohnten Servicegrad
              gewährleisten zu können. Bis dahin bitten wir Sie noch um ein
              wenig Geduld und Ihr Verständnis.
            </p>
            <p className="text-gray3 mt-[20px]">Mit freundlichen Grüßen,</p>
            <p className="text-gray3 mt-[20px]">
              Ihr {environment.company.site_name}
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              WIE KÖNNEN WIR IHNEN HELFEN?
            </h2>
            <p className="text-gray3 mt-[10px]">
              In unserem{" "}
              <Link href="/so-funktioniert" className="text-orange underline">
                Hilfe Center
              </Link>{" "}
              finden Sie nützliche Informationen und Hilfestellungen rund um
              WeltSparen.
            </p>
            <p className="text-gray3 mt-[20px]">
              Hier einige der häufigsten Themen:
            </p>
            <h2 className="text-dark text-base font-semibold mt-[30px]">
              KONTAKTIEREN SIE UNS!:
            </h2>
            <div className="flex items-center flex-col md:flex-row gap-2.5 w-full p-5 mt-7 rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
              <div className="flex gap-2.5 mt-1.5 w-full md:w-1/2 items-center">
                <Image
                  src={"./assets/icons/phone-yellow.svg"}
                  alt=""
                  width={32.44}
                  height={32}
                />
                <div className="flex flex-col">
                  <p className=" text-dark font-medium text-base">
                    03361-5062085
                  </p>
                  <p className=" text-dark font-normal text-base">
                    (Mo – Fr 10:00 – 18:00 Uhr)
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5 mt-1.5 w-full md:w-1/2 items-center">
                <Image
                  src={"./assets/icons/letter-yellow.svg"}
                  alt=""
                  width={41.14}
                  height={32}
                />
                <div className="flex flex-col">
                  <Link
                    href={environment.emails.href2}
                    className=" text-dark font-medium text-base underline"
                  >
                    {environment.emails.template2}
                  </Link>
                  <p className=" text-dark font-normal text-base">
                    The best way to get answer fast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-body flex justify-center py-5 items-center mt-[60px] md:mt-[186px]">
          <div className="w-full max-w-[1276px] flex flex-wrap lg:flex-nowrap justify-center gap-8">
            <div className="bg-white w-full max-w-[404px] h-[269px] p-5 rounded-lg border-b border-solid border-gray2">
              <h2 className="text-dark text-xl font-medium">
                WeltSpar-Konto eröffnen
              </h2>
              <div className="flex gap-x-2.5 mt-[20px] items-start">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline mt-[-5px]">
                  Voraussetzungen für die Eröffnung eines WeltSpar-Kontos
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">
                  Legitimation per Videochat (Videoident)
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">
                  Legitimation in der Postfiliale (Postident)
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px] items-start">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline mt-[-5px]">
                  Unterschiede: Referenzkonto, WeltSpar-Konto, Anlagekonto und
                  Depotbankkonto
                </p>
              </div>
            </div>
            <div className="bg-white w-full max-w-[404px] h-[269px] p-5 rounded-lg border-b border-solid border-gray2">
              <h2 className="text-dark text-xl font-medium">
                Machen Sie mehr aus Ihrem Geld
              </h2>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">
                  Jetzt anlegen: Tages- und Festgelder
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">
                  Tagesgeldkonto: Ein- und Auszahlungen
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">
                  Auszahlung auf mein Referenzkonto
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px] items-start">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline mt-[-5px]">
                  Erforderliche Unterlagen für die Eröffnung eines Anlagekontos
                </p>
              </div>
            </div>
            <div className="bg-white w-full max-w-[404px] h-[269px] p-5 rounded-lg border-b border-solid border-gray2">
              <h2 className="text-dark text-xl font-medium">
                WeltSpar-Konto verwalten
              </h2>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">Passwort ändern</p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">
                  Passwort vergessen / Zugang entsperren
                </p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">Kontaktdaten ändern</p>
              </div>
              <div className="flex gap-x-2.5 mt-[20px]">
                <Image
                  src={"./assets/icons/circle.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                <p className="text-gray3 underline">Referenzkonto ändern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}
