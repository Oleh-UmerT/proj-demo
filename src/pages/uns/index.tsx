import Image from "next/image";
import Head from "next/head";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Link from "next/link";
import { environment } from "../../../projectConfig";
import { useRouter } from "next/router";

export default function AboutUs() {
  const router = useRouter()
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
          <h1 className="text-white font-medium text-[56px] absolute z-10 p-5 md:p-0 mt-[72px] md:mt-[148px]">
            Über {environment.company.site_name}
          </h1>
          <p className="text-white text-[18px] absolute z-10 p-5 md:p-0 mt-[162px] md:mt-[230px] max-w-[792px]">
            Unsere Mission ist es, Sie bei Ihrem Vermögensaufbau zu
            unterstützen. Wir helfen Ihnen, Ihr finanzielles Leben zu
            verbessern, indem wir Ihnen die besten Finanzprodukte aus einer Hand
            anbieten. Außerdem unterstützen wir Banken und Finanzinstitute
            dabei, ihr Geschäft auszubauen.
          </p>
        </div>
        <Image src={"/assets/images/aboutPage/header.png"} alt="" fill />
      </div>
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1276px] flex flex-col-reverse lg:flex-row px-5 lg:px-0 gap-x-[60px] pt-[80px] pb-[84px]">
          <div>
            <h2 className="text-dark text-4xl">Über Mono</h2>
            <p className="text-dark mt-[30px]">
              Raisin wurde 2012 gegründet und ist in Deutschland durch seine
              Plattform für Geldanlage WeltSparen bekannt. Raisin ist ein
              Vorreiter für einfache Spar-, Investment- und
              Altersvorsorgeprodukte. Wir erleichtern Privatkundinnnen und
              -kunden den Zugang zu den globalen Einlagen- und Kapitalmärkten,
              wovon auch Finanzinstitute profitieren.
            </p>
            <p className="text-dark mt-[30px]">
              Wir ermöglichen es Sparerinnen und Sparern sowie Finanzinstituten,
              auf unsere Marktplätze in Europa und den USA zuzugreifen.
              Finanzinstitute nutzen unsere Plattform als eigene Marktplätze für
              ihre Sparprodukte. Sie können ihr Geschäft zudem mit den
              Banking-as-a-Service-Lösungen der Raisin Bank und von Raisin
              Technology auf- und ausbauen. Wir bieten allen Beteiligten der
              Wertschöpfungskette in kürzester Zeit vollständig digitale und
              einfache Produkte an.
            </p>
            <p className="text-dark mt-[30px]">
              Heute sind wir ein schnell wachsendes Fintech, das mit mehr als
              400 Banken aus über 30 Ländern zusammenarbeitet und sie mit
              Sparerinnen und Sparern verbindet. Banken und andere
              Finanzinstitute nutzen unser internationales Netzwerk und unsere
              bewährte digitale Architektur, um ihr Einlagengeschäft zu
              erweitern oder ihren Kunden und Kundinnen neue wettbewerbsfähige
              Sparprodukte anzubieten.
            </p>
          </div>
          <Image
            src={"./assets/images/aboutPage/map.svg"}
            alt=""
            width={543}
            height={528}
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row px-5 lg:px-0 justify-center bg-header gap-5 pt-[80px] pb-[95px]">
        <div className="w-full max-w-[475px]">
          <h2 className="text-white text-4xl font-light">
            Wegweisende Technologien durch Innovation und Service
          </h2>
          <p className="text-white mt-[30px]">
            Unsere Banking- und Technologieunternehmen unterstützen mit
            „as-a-Service“-Lösungen den Weg zu einem besseren und effizienteren
            Finanzsystem für alle.
          </p>
          <p className="text-white mt-[30px]">
            Spezialisierte Tochtergesellschaften haben es uns ermöglicht, neue
            Produkte, ETF-basierte Investmentportfolios oder Rentenprodukte zu
            entwickeln und einzuführen.
          </p>
          <div className="w-[143px] mt-[30px]">
            <Button variant="outline" lable="Mehr Erfahren" func={() => router.push("/")}/>
          </div>
        </div>
        <div className="w-full max-w-[741px]">
          <div className="flex gap-x-4">
            <div className="bg-white rounded-lg  p-[30px] h-[430px] lg:h-[370px] w-[362px]">
              <Image
                src={"./assets/images/aboutPage/mono-bank.svg"}
                alt=""
                width={184}
                height={30}
              />
              <p className="text-dark mt-[20px]">
                Wir verschaffen unseren Kunden und Kundinnen Zugang zu
                best-in-class Finanzprodukten, damit sie ihr finanzielles Leben
                unabhängig gestalten können. Auf unseren kostenlosen,
                nutzerfreundlichen Marktplätzen können Sparerinnen und Sparer
                mit nur einem einzigen Kundenkonto aus Hunderten von
                Sparprodukten von verschiedenen Banken aus Europa wählen.
              </p>
            </div>
            <div className="bg-white rounded-lg p-[30px] h-[430px] lg:h-[370px] w-[362px]">
              <Image
                src={"./assets/images/aboutPage/mono-tech.svg"}
                alt=""
                width={245}
                height={30}
              />
              <p className="text-dark mt-[20px]">
                Raisin Technology bringt die erste Produktinnovation seit
                Jahrzehnten in den US-amerikanischen Einlagenmarkt. Mit einer
                Savings-as-a-Service-Software können Finanzinstitute ihren
                Kundinnen und Kunden nicht nur wettbewerbsfähige Zinsen
                anbieten, sondern auch die automatisierte Erstellung
                individueller Sparstrategien mit wenigen Klicks ermöglichen.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-4">
            <div className="bg-white rounded-lg p-[30px] h-[430px] lg:h-[370px] w-[362px]">
              <Image
                src={"./assets/images/aboutPage/mono-pen.svg"}
                alt=""
                width={302}
                height={30}
              />
              <p className="text-dark mt-[20px]">
                Raisin Pension ermöglicht deutschen Privatkundinnen und -kunden,
                mit dem ersten Rürup-Fondssparplan mit freier ETF-Auswahl und
                garantierten Rentenbedingungen ihre private Altersvorsorge
                aufzubauen. Unternehmen können ihren Mitarbeiterinnen und
                Mitarbeitern über Raisin Pension ETF-basierte betriebliche
                Altersvorsorge anbieten.
              </p>
            </div>
            <div className="bg-white rounded-lg p-[30px] h-[430px] lg:h-[370px] w-[362px]">
              <Image
                src={"./assets/images/aboutPage/mono-invest.svg"}
                alt=""
                width={197}
                height={30}
              />
              <p className="text-dark mt-[20px]">
                Der Raisin Invest ETF Robo bietet Kunden und Kundinnen in
                Deutschland von Anlageexperten entwickelte, global
                diversifizierte ETF-Portfolios mit variabler Aktienquote an. Der
                Raisin Invest ETF-Configurator ermöglicht Anlegern und
                Anlegerinnen, individuelle ETF Portfolios zusammenzustellen oder
                vordefinierte Portfolios zu nutzen. Dabei sind auch
                Investitionen nach ESG-Kriterien möglich.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1276px] flex flex-col-reverse lg:flex-row p-5 gap-[60px] pt-[80px] pb-[48px]">
          <div>
            <h2 className="text-dark text-4xl">Unsere Partner</h2>
            <p className="text-dark mt-[30px]">
              Wir sind stolz darauf, viele führende Universalbanken, Sparkassen
              und Genossenschaftsbanken in Europa und den USA zu unseren
              Partnerinnen und Partnern zu zählen. Unsere Investmentprodukte
              bieten wir in Zusammenarbeit mit mit internationalen
              Vermögensverwaltungsgesellschaften wie Vanguard oder Moonfare an.
            </p>
            <p className="text-dark mt-[30px]">
              Mit den folgenden und vielen weiteren Partnern arbeiten wir
              gemeinsam an einem einfacheren Zugang zu besseren Finanzprodukten.
            </p>
          </div>
          <Image
            src={"./assets/images/aboutPage/4-banks.svg"}
            alt=""
            width={741}
            height={344}
          />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[1276px] flex flex-col items-center gap-x-[60px] pb-[84px]">
          <h2 className="text-dark text-4xl">Auszeichnungen</h2>
          <p className="text-dark mt-[30px] text-center">
            Unser Unternehmen und unsere Marktplätze sind Vorreiter in der
            Finanzbranche. Unsere Bemühungen, sparen und investieren für
            <br /> alle zugänglich und möglich zu machen, wurden vielfach
            ausgezeichnet, unter anderem mit:
          </p>
          <div className="relative w-full h-[170px] mt-[60px]">
            <Image src={"./assets/images/aboutPage/2-logos.svg"} alt="" fill />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-body">
        <div className="w-full max-w-[1276px] flex p-5 flex-col gap-x-[60px] pt-[80px] pb-[84px]">
          <h2 className="text-dark text-4xl">
            {environment.company.site_name} Grundsatzerklärung zu
            <br /> Kooperation mit Geschäftspartnern
          </h2>
          <div className="flex gap-x-8 mt-[30px]">
            <div className="flex flex-col gap-y-[30px] max-w-[622px]">
              <p className="text-dark">
                {environment.company.site_name} ist ein Anbieter von Open
                Banking im Bereich Sparen und Anlagen in Europa und den USA. Wir
                arbeiten mit Banken, Finanzdienstleistern, verschiedenen
                Drittanbietern von Dienstleistungen („Geschäftspartner“) und
                anderen Dritten zusammen, um diese bei der Beschaffung von
                sicherer und ​​konkurrenzfähiger Einlagenfinanzierung zu
                unterstützen und ihnen zu ermöglichen, ihren Kunden Produkte von
                Drittanbietern anzubieten. Durch diese Beziehungen ermöglicht{" "}
                {environment.company.site_name} Kleinsparern den Zugang zu
                hochwertigen, sicheren und wettbewerbsfähigen Spar- und
                Anlageprodukten, die ihnen helfen, ihre Rendite zu maximieren.
              </p>
              <p className="text-dark">
                Als bedeutendes Unternehmen auf dem europäischen und
                internationalen Markt für Open Banking und insbesondere im
                Bereich der Einlagen geht Raisin Vereinbarungen mit Dritten für
                die Beschaffung oder Lieferung von Waren und Dienstleistungen
                ein. Diese Beziehungen zu Geschäftspartnern müssen während ihrer
                gesamten Dauer bewertet und verwaltet werden, damit{" "}
                {environment.company.site_name} die höchsten rechtlichen,
                regulatorischen und ethischen Standards einhält. In diesem
                Grundsatzpapier werden die Anforderungen dargelegt, die Raisin
                an sich selbst stellt, sowie die Grundsätze, deren Einhaltung
                wir von unseren sorgfältig ausgewählten Geschäftspartnern
                erwarten.
              </p>
            </div>
            <div className="flex flex-col gap-y-[30px] max-w-[622px]">
              <p className="text-dark">
                Es ist uns wichtig, Grundsätze nachhaltiger Entwicklung in
                unserer Lieferkette zu gewährleisten. Wir bitten unsere
                Lieferanten, die oben genannten Grundsätze anzuerkennen oder ihr
                Engagement für diese zu demonstrieren, indem sie sicherstellen,
                dass ihr eigener Verhaltenskodex oder ihre
                Unternehmensrichtlinien diese Standards umfassen.
              </p>
              <p className="text-dark">
                Wir unterstützen die folgenden Umwelt-, Sozial- und
                Governance-Standards (ESG), die auf den zehn Prinzipien der
                Global-Compact-Initiative der Vereinten Nationen, den
                Leitprinzipien der Vereinten Nationen für Wirtschaft und
                Menschenrechte und der Erklärung der Internationalen
                Arbeitsorganisation über grundlegende Prinzipien und Rechte bei
                der Arbeit beruhen. Während der gesamten Geschäftsbeziehung
                erwarten wir von unseren Geschäftspartnern, dass sie sich
                ebenfalls an diese Grundsätze halten.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[460px] relative flex justify-center">
        <div className="w-full p-5 lg:p-0 max-w-[1276px]">
          <h1 className="text-white font-medium text-[36px] absolute z-10 mt-[52px]">
            Werde Teil unseres Teams
          </h1>
          <p className="text-white absolute z-10 mt-[120px] max-w-[663px]">
            Wir sind ein dynamisches, schnell wachsendes Unternehmen und ein
            viel prämierter Arbeitgeber mit über 650 Mitarbeiterinnen und
            Mitarbeitern. Neben unserem Hauptsitz in Berlin haben wir Büros in
            Frankfurt, Hamburg, London, Madrid, Mailand, Manchester, New York,
            Paris und Zürich.
          </p>
          <p className="text-white absolute z-10 mt-[244px] max-w-[663px]">
            Your growth is our growth. Wenn Du uns bei unserer Mission
            unterstützen möchtest, Open Banking als neuen Industriestandard im
            Spar- und Investmentbereich zu etablieren, dann bewirb Dich bei uns!
          </p>
          <div className="w-[275px] mt-[352px] absolute z-10">
            <Link
              href="mailto:"
              className="px-5 py-3 bg-yellow text-dark font-extrabold uppercase rounded hover:bg-yellow-hover"
            >
              Jetzt Bewerben
            </Link>
          </div>
        </div>
        <Image src={"/assets/images/aboutPage/men-bg.png"} alt="" fill />
      </div>
      {/* </PageLayout> */}
    </>
  );
}
