import Link from "next/link";

const EngBar = () => {
  return (
    <div className="flex flex-col">
      <p className="text-gray3 mt-[10px]">
        Trotz des Ausstiegs von Großbritanniens aus der EU sind Einlagen
        beibritischen Banken weiter als sicher anzusehen. Die
        britischeEinlagensicherung liegt derzeit jedoch unter der in der EU
        geltendengesetzlichen Grenze von 100.000 EUR pro Kunde und Bank –
        Einlagenwerden nach dem 31. Dezember 2020 bis zu einer Höhe von 85.000
        GBP(ca. 98.350 EUR) pro Kunde und Bank durch das britische
        FinancialServices Compensation Scheme (FSCS) geschützt.
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">
        OFFIZIELLE BEZEICHNUNG:
      </h2>
      <p className="text-gray3 mt-[10px]">
        Financial Services Compensation Scheme
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">WEBSITE:</h2>
      <Link
        href={"http://www.fscs.org.uk"}
        className="text-orange underline mt-[10px]"
      >
        http://www.fscs.org.uk
      </Link>
      <h2 className="text-dark font-semibold mt-[20px]">ANSCHRIFT:</h2>
      <p className="text-gray3 mt-[10px]">
        PO Box 300, Mitcheldean, GL17 1DY, United Kingdom
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">E-MAIL:</h2>
      <p className="text-orange underline mt-[10px]">enquiries@fscs.org.uk</p>
      <h2 className="text-dark font-semibold mt-[20px]">TELEFON:</h2>
      <p className="text-gray3 mt-[10px]">+44 20 7741 4100</p>
      <h2 className="text-dark font-semibold mt-[20px]">SICHERUNGSGRENZE:</h2>
      <p className="text-gray3 mt-[10px]">85.000 £ je Kunde und Bank</p>
      <h2 className="text-dark font-semibold mt-[20px]">HÖHE DER RESERVEN:</h2>
      <p className="text-gray3 mt-[10px]">
        7.4 Mrd. GBP (entspricht 0,65 % der gedeckten Einlagen)
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">STAND:</h2>
      <p className="text-gray3 mt-[10px]">31. Dezember 2019</p>
      <h2 className="text-dark font-semibold mt-[20px]">QUELLE:</h2>
      <p className="text-gray3 mt-[10px]">
        https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1
      </p>
    </div>
  );
};

export default EngBar;
