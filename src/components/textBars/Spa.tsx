import Link from "next/link";

const SpaBar = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-dark font-semibold mt-[20px]">
        OFFIZIELLE BEZEICHNUNG:
      </h2>
      <p className="text-gray3 mt-[10px]">
        The Deposit Guarantee Fund of Credit Institutions
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">WEBSITE:</h2>
      <Link
        href={"http://www.fgd.es/en"}
        className="text-orange underline mt-[10px]"
      >
        http://www.fgd.es/en
      </Link>
      <h2 className="text-dark font-semibold mt-[20px]">ANSCHRIFT:</h2>
      <p className="text-gray3 mt-[10px]">
        The Deposit Guarantee Fund of Credit Institutions, C/José Ortega
        yGasset, 22 – 4ª planta, 28006 Madrid, Spain
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">E-MAIL:</h2>
      <p className="text-orange underline mt-[10px]">fogade@fgd.es</p>
      <h2 className="text-dark font-semibold mt-[20px]">TELEFON:</h2>
      <p className="text-gray3 mt-[10px]">+34 91 431 66 45</p>
      <h2 className="text-dark font-semibold mt-[20px]">SICHERUNGSGRENZE:</h2>
      <p className="text-gray3 mt-[10px]">100.000 € je Kunde und Bank</p>
      <h2 className="text-dark font-semibold mt-[20px]">HÖHE DER RESERVEN:</h2>
      <p className="text-gray3 mt-[10px]">
        3.09 Mrd. EUR (entspricht 0,41 % der gedeckten Einlagen)
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

export default SpaBar;
