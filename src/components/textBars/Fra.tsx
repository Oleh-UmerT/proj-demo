import Link from "next/link";

const FraBar = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-dark font-semibold mt-[20px]">
        OFFIZIELLE BEZEICHNUNG:
      </h2>
      <p className="text-gray3 mt-[10px]">
        Deposit Guarantee and Resolution Fund
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">WEBSITE:</h2>
      <Link
        href={"https://www.garantiedesdepots.fr/fr"}
        className="text-orange underline mt-[10px]"
      >
        https://www.garantiedesdepots.fr/fr
      </Link>
      <h2 className="text-dark font-semibold mt-[20px]">ANSCHRIFT:</h2>
      <p className="text-gray3 mt-[10px]">
        65, rue de la Victoire, 75009 Paris, France
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">E-MAIL:</h2>
      <p className="text-orange underline mt-[10px]">
        contact@garantiedesdepots.fr
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">TELEFON:</h2>
      <p className="text-gray3 mt-[10px]">+33 0158 18 38 08</p>
      <h2 className="text-dark font-semibold mt-[20px]">SICHERUNGSGRENZE:</h2>
      <p className="text-gray3 mt-[10px]">100.000 € je Kunde und Bank</p>
      <h2 className="text-dark font-semibold mt-[20px]">HÖHE DER RESERVEN:</h2>
      <p className="text-gray3 mt-[10px]">
        4,48 Mrd. EUR (entspricht 0,37 % der gedeckten Einlagen).
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

export default FraBar;
