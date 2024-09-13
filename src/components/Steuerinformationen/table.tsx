import { environment } from "../../../projectConfig";

const countries = [
  "Belgien",
  "Bulgarien",
  "Dänemark",
  "Estland",
  "Finnland",
  "Frankreich",
  "Griechenland",
  "Großbritannien",
  "Irland",
  "Italien",
  "Kroatien",
  "Lettland",
  "Litauen",
  "Luxemburg",
  "Malta",
  "Niederlande",
  "Österreich",
  "Polen",
  "Portugal",
  "Rumänien",
  "Schweden",
  "Slowakei",
  "Slowenien",
  "Spanien",
  "Tschechien",
  "Ungarn",
  "Zypern",
];

export default function Table() {
  return (
    <div className="p-[30px] rounded-lg w-full max-w-[741px] shadow-[0_2px_10px_0_#4B5B6B26]">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y bg-header">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-3"
                  >
                    EU-Land
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Quellensteuer
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Reduzierte
                    <br />
                    Quellensteuer
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Davon steuerlich
                    <br />
                    anrechenbar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {countries?.map((item: any, key: number) => (
                  <tr key={key} className="even:bg-body">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-dark sm:pl-3">
                      {item}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-dark">
                      30 %
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-dark">
                      0 %
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-dark">
                      0 %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-dark mt-[30px]">
              Die fett gedruckten Angaben beziehen sich auf das derzeitige
              Angebot von {environment.company.site_name}, die anderen Angaben
              dienen der reinen Information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
