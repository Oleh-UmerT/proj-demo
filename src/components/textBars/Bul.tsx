import Link from "next/link";

const BulBar = () => {
  return (
    <div className="flex flex-col">
      <p className="text-gray3 mt-[10px]">
        Einlagen inklusive Zinserträge sind bis zu einem Betrag von 196.000 BGN
        je Kunde und je Bank gesetzlich durch den bulgarischen
        Einlagensicherungsfonds abgesichert. Im Falle einer Auszahlung durch den
        Einlagensicherungsfonds erfolgt diese in bulgarischen Leva (BGN).
        Insofern besteht ein Währungs-/Wechselkursrisiko. Weitere Informationen
        zur Einlagensicherung unter{" "}
        <Link
          href={"http://dif.bg/en"}
          className="text-orange underline mt-[10px]"
        >
          http://dif.bg/en
        </Link>
        .
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">
        OFFIZIELLE BEZEICHNUNG:
      </h2>
      <p className="text-gray3 mt-[10px]">Bulgarian Deposit Insurance Fund</p>
      <h2 className="text-dark font-semibold mt-[20px]">WEBSITE:</h2>
      <Link
        href={
          "https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1"
        }
        className="text-orange underline mt-[10px]"
      >
        https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1
      </Link>
      <h2 className="text-dark font-semibold mt-[20px]">ANSCHRIFT:</h2>
      <p className="text-gray3 mt-[10px]">
        27 Vladayska Street, Sofia 1606, Bulgaria
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">E-MAIL:</h2>
      <p className="text-orange underline mt-[10px]">contact@dif.bg</p>
      <h2 className="text-dark font-semibold mt-[20px]">TELEFON:</h2>
      <p className="text-gray3 mt-[10px]">+359 2 953 -1217 / -1318</p>
      <h2 className="text-dark font-semibold mt-[20px]">SICHERUNGSGRENZE:</h2>
      <p className="text-gray3 mt-[10px]">196.000 BGN je Kunde und Bank</p>
      <h2 className="text-dark font-semibold mt-[20px]">HÖHE DER RESERVEN:</h2>
      <p className="text-gray3 mt-[10px]">
        706.4 Mio. BGN (entspricht 1,17 % der gedeckten Einlagen)
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

export default BulBar;
