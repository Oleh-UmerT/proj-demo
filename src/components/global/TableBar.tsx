import Image from "next/image";
import Button from "./Button";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const tooltipTextMain =
  "Je nach Angebot und Berechnungsmethode der Bank kann der errechnete Zinsertrag vom tatsächlich zur Anwendung kommenden Zinsertrag abweichen.S";

const tooltipText =
  "Die einmalige Prämie gilt ausschließlich für Neukunden und bei Abschluss des ersten Zinsplan Produkts.";

interface TableBarProps {
  data?: any;
  banksArr?: any;
  countriesArr?: any;
  inputValue?: number;
  withDetails?: boolean;
  withNotify?: boolean;
  withButton?: boolean;
  offersPage?: boolean;
  fixedDeposit?: boolean;
  investAmount?: number;
}

function findBankByCountryCode(banks: any[], countryCode: any) {
  return banks?.find((bank) => bank.countryCode === countryCode);
}

function findBankByBID(banks: any[], bid: any) {
  return banks?.find((bank) => bank.bid === bid);
}

function findByCountryCode(countries: any[], countryCode: any) {
  return countries?.find((item) => item.code === countryCode);
}

function calculateBonus(value: number) {
  if (value < 9999) {
    return "25";
  } else if (value >= 10000 && value < 39999) {
    return "50";
  } else if (value >= 40000 && value < 74999) {
    return "75";
  } else {
    return "270";
  }
}

const TableBar: React.FC<TableBarProps> = ({
  data,
  banksArr,
  countriesArr,
  inputValue = 5000,
  withDetails,
  withButton,
  withNotify,
  offersPage,
  investAmount,
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const { data: session, status } = useSession();
  const [selectedBank, setSelectedBank] = useState<any>();
  const [selectedBankBID, setSelectedBankBID] = useState<any>();
  const [selectedContry, setSelectedContry] = useState<any>();
  const [bon, setBon] = useState<string>("");
  const [selectedInfo, setSelectedInfo] = useState<any>("details");
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredMain, setIsHoveredMain] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseEnterMain = () => setIsHoveredMain(true);
  const handleMouseLeaveMain = () => setIsHoveredMain(false);

  useEffect(() => {
    const bank = findBankByCountryCode(banksArr, data?.bank?.countryCode);
    const bankByBID = findBankByBID(banksArr, data?.bank?.bid);
    const country = findByCountryCode(countriesArr, data?.bank?.countryCode);
    setSelectedBank(bank);
    setSelectedContry(country);
    setSelectedBankBID(bankByBID);
    const bonus = calculateBonus(inputValue);
    setBon(bonus);
  }, [data, banksArr, countriesArr]);

  const goToOffer = () => {
    if (status !== "authenticated") {
      router.push("/login");
    } else {
      router.push(`/create-offer/${data?.oid}?iv=${inputValue}`);
    }
  };

  const getDuration = () => {
    if (Number.isInteger(data?.duration / 12)) {
      return (
        <p className="text-dark w-full max-w-[115px] h-[48px] md:flex hidden items-center border-r border-solid border-gray1">
          {data?.duration ? data.duration / 12 : "NaN"} Jahre
        </p>
      );
    } else {
      return (
        <p className="text-dark w-full max-w-[115px] h-[48px] md:flex hidden items-center border-r border-solid border-gray1">
          {data?.duration ? data.duration : "NaN"} Monat
        </p>
      );
    }
  };

  return (
    <div className="max-w-[1276px] w-full border-solid border border-input rounded-lg mb-[20px]">
      {/* open part */}
      <div
        className={clsx({
          "flex flex-col border-b border-dashed border-input p-5": true,
          "border-none": withDetails,
        })}
      >
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-y-4 items-center pr-4 ">
          <p className="text-green w-full max-w-[80px] md:max-w-[180px] text-2xl md:text-4xl font-bold border-r border-solid border-gray1">
            {data?.interestRate || data?.interestRate >= 0
              ? data.interestRate
              : "NaN"}
            %<span className="text-green text-base font-medium"> / p.a.</span>
          </p>
          {!data.is_overnight ? (
            getDuration()
          ) : (
            <p className="text-dark w-full max-w-[115px] h-[48px] md:flex hidden items-center font-semibold border-r border-solid border-gray1">
              Tagesgeld
            </p>
          )}
          <div className="border-r border-solid border-gray1 md:pr-5 ml-3 md:-ml-5 ">
            <div className="h-[48px] w-[145px] relative">
              <Image
                src={`https://zinsplan.com/${data?.bank?.logo}`}
                alt="bank-logo"
                fill
              />
            </div>
          </div>

          {!offersPage && (
            <div className="flex w-full max-w-[150px] flex-col border-r border-solid border-gray1">
              <span className="text-dark font-semibold">
                {data?.currency ? data.currency : "undefined"}
              </span>
              <span className="text-gray1">Währung</span>
            </div>
          )}
          {!offersPage && (
            <div className="flex w-full max-w-[190px] flex-col border-r border-solid border-gray1">
              <span className="text-dark font-semibold">
                {data?.zinsen ? data.zinsen : "undefined"}
              </span>
              <span className="text-gray1">Zinstyp</span>
            </div>
          )}
          {!offersPage && (
            <div className="flex w-full max-w-[190px] flex-col border-r border-solid border-gray1">
              <span className="text-dark font-semibold">
                {investAmount ? `€ ${investAmount},00` : "undefined"}
              </span>
              <span className="text-gray1">Anlagebetrag</span>
            </div>
          )}
          {offersPage && (
            <div className="lg:flex w-full max-w-[150px] flex-col border-r border-solid border-gray1 hidden">
              <span className="text-dark">
                {selectedBank?.country.name
                  ? selectedBank.country.name
                  : "undefined"}
              </span>
              <span className="text-gray1">to EUR</span>
            </div>
          )}
          {offersPage && (
            <div className="flex w-full max-w-[150px] pl-4 md:pl-0 flex-col border-r border-solid border-gray1">
              <span className="text-green flex gap-x-2 relative">
                {data?.interestRate
                  ? (data.interestRate * (inputValue ? inputValue : 5000)) /
                    100
                  : "undefined"}{" "}
                € Zinsen
                <Image
                  onMouseEnter={handleMouseEnterMain}
                  onMouseLeave={handleMouseLeaveMain}
                  src={"./assets/icons/info.svg"}
                  alt=""
                  width={18}
                  height={18}
                  className="hidden md:flex"
                />
                {isHoveredMain && (
                  <div className="absolute top-[-240px] bg-dark text-white p-2 rounded-lg border-4 border-solid border-yellow">
                    {tooltipTextMain}
                  </div>
                )}
              </span>
              <span className="text-green flex gap-x-2 relative">
                {bon} € Prämie
                <Image
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  src={"./assets/icons/info.svg"}
                  alt=""
                  width={18}
                  className="hidden md:flex"
                  height={18}
                />
                {isHovered && (
                  <div className="absolute top-[-215px] bg-dark text-white p-2 rounded-lg border-4 border-solid border-yellow">
                    {tooltipText}
                  </div>
                )}
              </span>
            </div>
          )}
          {withButton && (
            <div className="max-w-full md:max-w-[160px]">
              <Button
                variant="outline-orange"
                lable="Jetzt anlegen"
                func={goToOffer}
              />
            </div>
          )}
        </div>
        {withNotify && (
          <div>
            <div className="flex gap-x-3 justify-between w-full border border-solid border-notify-border bg-notify h-[92px] mt-2.5 py-3.5 px-4 rounded-lg">
              <div className="flex gap-x-3">
                <Image
                  src={"./assets/icons/attantion.svg"}
                  alt=""
                  width={21.88}
                  height={20}
                />
                <div className="flex flex-col">
                  <p className="text-dark text-sm font-bold">
                    Ihr Antrag wurde von uns entgegengenommen.
                  </p>
                  <p className="text-sm text-dark">
                    Verifizierung ausstehend - Nach Erfolgreicher Verifizierung
                    können Sie mit Ihrer Anlage fortfahren.
                  </p>
                  <p className="text-sm text-dark">
                    Ihre Anfrage wird bearbeitet. Sie erhalten weitere
                    Informationen in den nächsten 2 Werktagen
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* closing part */}
      {openDetails && (
        <div className="flex flex-col p-5">
          <div className="flex gap-x-[40px] border-b-2 border-solid border-gray2">
            <p
              className={clsx({
                "cursor-pointer font-semibold pb-2.5": true,
                "text-dark border-b-2 border-solid border-orange":
                  selectedInfo === "details",
                "text-gray1 border-b border-solid border-transparent":
                  selectedInfo !== "details",
              })}
              onClick={() => setSelectedInfo("details")}
            >
              ANGEBOTSDETAILS
            </p>
            <p
              className={clsx({
                "cursor-pointer font-semibold pb-2.5": true,
                "text-dark border-b-2 border-solid border-orange":
                  selectedInfo === "bank",
                "text-gray1 border-b border-solid border-transparent":
                  selectedInfo !== "bank",
              })}
              onClick={() => setSelectedInfo("bank")}
            >
              BANK
            </p>
            <p
              className={clsx({
                "cursor-pointer font-semibold pb-2.5": true,
                "text-dark border-b-2 border-solid border-orange":
                  selectedInfo === "protection",
                "text-gray1 border-b border-solid border-transparent":
                  selectedInfo !== "protection",
              })}
              onClick={() => setSelectedInfo("protection")}
            >
              EINLAGENSICHERUNG
            </p>
          </div>
          {selectedInfo === "details" && (
            <div className="flex w-full gap-x-[60px] mt-[30px]">
              <div className="flex flex-col w-full max-w-[427px]">
                <h3 className="text-dark text-lg font-semibold">
                  Zinsinformation
                </h3>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Zinssatz effektiv</p>
                  <p className="w-1/2 text-dark">{data.interestRate} % p.a.</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Zinssatz nominal</p>
                  <p className="w-1/2 text-dark">{data.interestRate} % p.a.</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Zinseszins</p>
                  <p className="w-1/2 text-dark">Nein</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Laufzeit</p>
                  <p className="w-1/2 text-dark">{data.duration}</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Verfügbarkeit</p>
                  <p className="w-1/2 text-dark"></p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Zinsgutschrift</p>
                  <p className="w-1/2 text-dark">Am Ende der Laufzeit</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Zinsauszahlung</p>
                  <p className="w-1/2 text-dark">Am Ende der Laufzeit</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3">
                  <p className="w-1/2 text-gray1">Zinsänderungen</p>
                  <p className="w-1/2 text-dark">
                    Fester Zinssatz während der Laufzeit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[749px]">
                <h3 className="text-dark text-lg font-semibold">Geldanlage</h3>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Einlagensicherung</p>
                  <p className="w-2/3 text-dark">{data.bank.insuranceName}</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Währung</p>
                  <p className="w-2/3 text-dark">{data.currency}</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Mindest-/Maximaleinlage</p>
                  <p className="w-2/3 text-dark">
                    {data.minDeposit},00 - {data.maxDeposit},00
                  </p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Kosten</p>
                  <p className="w-2/3 text-dark">Keine</p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Verlängerung</p>
                  <p className="w-2/3 text-dark">
                    Eine Verlängerung wird automatisch veranlasst, sofern Sie
                    diese nicht im Onlinebanking deaktivieren.
                  </p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Quellensteuer</p>
                  <p className="w-2/3 text-dark">
                    {selectedContry ? selectedContry.taxDescription : ""}
                  </p>
                </div>
                <div className="flex items-center mt-[10px] border-b broder-solid border-gray2 py-3 gap-x-5">
                  <p className="w-1/3 text-gray1">Einzureichende Unterlagen</p>
                  <p className="w-2/3 text-dark">100% Online</p>
                </div>
              </div>
            </div>
          )}
          {selectedInfo === "bank" && (
            <div className=" w-full mt-[30px]">
              <h3 className="text-dark text-lg font-semibold">
                {selectedBankBID.name}
              </h3>
              <p className="text-dark mt-[10px]">
                {selectedBankBID.description}
              </p>
              <h3 className="text-dark text-lg font-semibold mt-[30px]">
                Über das Land
              </h3>
              <p className="text-dark mt-[10px]">
                {selectedContry.description}
              </p>
            </div>
          )}
          {selectedInfo === "protection" && (
            <div className=" w-full mt-[30px]">
              <h3 className="text-dark text-lg font-semibold">
                Sicherheit Ihrer Einlagen
              </h3>
              <p className="text-dark mt-[10px]">
                Sicherheit Ihrer Einlagen Einlagen inklusive aufgelaufener
                Zinserträge sind bis zu einem Betrag von 100.000 EUR je Kunde
                und je Bank gesetzlich durch den Europäischen Europäischen
                Einlagensicherungsfonds abgesichert.Innerhalb der Europäischen
                Union sind die Mindestanforderungen in allen Mitgliedsstaaten
                harmonisiert durch die Richtlinien 94/19/EG, 2009/14/EG und
                2014/49/EU.Zu beachten ist, dass sich diese Absicherung auf die
                gesamten Einlagen eines Kunden bei einer Bank bezieht.Dies ist
                dann relevant, wenn nicht nur die vermittelte Einlagen eines
                Kunden bei einer bestimmten Bank angelegt wurden, sondern noch
                weitere Einlagen dieses Kunden bei der jeweiligen Bank angelegt
                wurden.
              </p>
            </div>
          )}
        </div>
      )}
      {!withDetails && (
        <div
          className="md:flex w-full justify-center cursor-pointer select-none hidden"
          onClick={() => setOpenDetails(!openDetails)}
        >
          <p className="flex text-gray1 text-sm py-2.5 gap-x-1">
            Details anzeigen{" "}
            <Image
              src={"./assets/icons/gray-arrow.svg"}
              alt=""
              width={11.2}
              height={7}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default TableBar;
