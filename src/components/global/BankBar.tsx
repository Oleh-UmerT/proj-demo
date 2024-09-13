import Image from "next/image";
import { useState, useEffect } from "react";

interface BankBarProps {
  banksArr?: any;
  countriesArr?: any;
}

const tooltipText =
  "Die Länderbewertung von Standard &amp; Poor’s ist eine Einschätzung der Kreditwürdigkeit eines Landes. Sie basiert auf einer Analyse der Effektivität der Institutionen, Regierungsführung, wirtschaftlichen Struktur, Wachstumsaussichten, externen Finanzen sowie der steuerlichen und monetären Flexibilität.S";

function findByCountryCode(countries: any[], countryCode: any) {
  return countries?.find((item) => item.code === countryCode);
}

const BankBar: React.FC<BankBarProps> = ({ banksArr, countriesArr }) => {
  const [selectedContry, setSelectedContry] = useState<any>();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const country = findByCountryCode(countriesArr, banksArr?.countryCode);
    setSelectedContry(country);
  }, [banksArr, countriesArr]);

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center border border-solid border-gray1 w-full p-3 mb-3 h-[290px] md:h-[200px] rounded">
      <div className="w-[220px]">
        <Image
          src={`https://zinsplan.com/${banksArr?.logo}`}
          alt="bank-logo"
          width={175}
          height={60}
        />
      </div>
      <p className="text-dark text-lg w-[120px]">{banksArr?.country?.name}</p>
      <div className="flex flex-col items-center w-[120px] relative">
        <Image
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={"./assets/icons/info.svg"}
          alt=""
          width={18}
          height={18}
        />
        {isHovered && (
          <div className="absolute top-[-435px] bg-dark text-white p-2 rounded-lg border-4 border-solid border-yellow">
            {tooltipText}
          </div>
        )}
        <p className="text-dark text-lg">{selectedContry?.credit_rating}</p>
      </div>
      <p className="text-dark text-lg h-20 max-w-[607px] overflow-hidden text-ellipsis">{banksArr?.description}</p>
    </div>
  );
};

export default BankBar;
