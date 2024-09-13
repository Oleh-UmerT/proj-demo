import Link from "next/link";

const DeuBar = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-dark font-semibold mt-[20px]">
        OFFIZIELLE BEZEICHNUNG:
      </h2>
      <p className="text-gray3 mt-[10px]">
        Entschädigungseinrichtung deutscher Banken GmbH Zusätzlich je nach Bank
        variierende Deckung durch Mitgliedschaft imprivaten
        Einlagensicherungsfonds des Bundesverbands deutscher Bankene.V.
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">WEBSITE:</h2>
      <Link
        href={"http://www.edb-banken.de"}
        className="text-orange underline mt-[10px]"
      >
        http://www.edb-banken.de
      </Link>
      <h2 className="text-dark font-semibold mt-[20px]">ANSCHRIFT:</h2>
      <p className="text-gray3 mt-[10px]">
        Burgstraße 28, 10178 Berlin, Germany
      </p>
      <h2 className="text-dark font-semibold mt-[20px]">E-MAIL:</h2>
      <p className="text-orange underline mt-[10px]">info@edb-banken.de</p>
      <h2 className="text-dark font-semibold mt-[20px]">TELEFON:</h2>
      <p className="text-gray3 mt-[10px]">+49 30 59 00 11 960</p>
      <h2 className="text-dark font-semibold mt-[20px]">SICHERUNGSGRENZE:</h2>
      <p className="text-gray3 mt-[10px]">100.000 € je Kunde und Bank</p>
      <h2 className="text-dark font-semibold mt-[20px]">HÖHE DER RESERVEN:</h2>
      <p className="text-gray3 mt-[10px]">
        3.006 Mrd. EUR (entspricht 0,52 % der gedeckten Einlagen)
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

export default DeuBar;
