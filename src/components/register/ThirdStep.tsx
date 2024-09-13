import Stepper from "./Stepper";
import { useState, useEffect, useRef } from "react";
import Input from "@/components/global/Input";
import Image from "next/image";
import Button from "@/components/global/Button";
import Select from "../global/Select";
import Checkbox from "../global/Checkbox";
import Link from "next/link";
import countries from "country-list";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DetailsFormSchema } from "@/schemas/RegisterSchemas";
import { environment } from "../../../projectConfig";

const tooltipText =
  "Auf Grund der FATCA-Bestimmungen (Foreign Account Tax Compliance Act) muss bei der Kontoeröffnung festgestellt werden, ob Sie möglicherweise in den USA steuerpflichtig sind. US Person ist definiert als: (1) US-Staatsbürger (auch doppelte Staatsbürgerschaft) (2) Wohnsitz in den USA (US resident alien, z.B. Greencard oder substantial presence, Details siehe https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status) (3) In den USA / auf US-Territorium geboren (4) Aus einem anderen Grund in den USA steuerpflichtig (z.B. Doppelwohnsitz, gemeinsame Steuererklärung mit US-Person etc.)";

const familienstandData = [
  { id: 1, name: "getrennt lebend" },
  { id: 2, name: "ledig" },
  { id: 3, name: "verheiratet" },
  { id: 4, name: "verwitwet" },
  { id: 5, name: "geschieden" },
];

const berufData = [
  { id: 1, name: "Angestellter" },
  { id: 2, name: "Arbeiter" },
  { id: 3, name: "Auszubildender" },
  { id: 4, name: "Beamter" },
  { id: 6, name: "Freiberufler" },
  { id: 7, name: "Geschäftsführender Gesellschafter" },
  { id: 8, name: "Hausfrau" },
  { id: 9, name: "Hausmann" },
  { id: 10, name: "Leitender Angestellter" },
  { id: 11, name: "Ohne Beschäftigung" },
  { id: 12, name: "Pensionär" },
  { id: 13, name: "Rentner" },
  { id: 14, name: "Schüler" },
  { id: 15, name: "Sonstige Privatpersonen" },
  { id: 16, name: "Sonstiger Selbstständiger" },
  { id: 17, name: "Student" },
];

const gewordenData = [
  { id: 1, name: "Werbung im Internet (z.B. bei Google)" },
  { id: 2, name: "Plakatwerbung" },
  { id: 3, name: "TV-Werbung" },
  { id: 4, name: "Empfehlung" },
  { id: 5, name: "Radio" },
];

interface ThindStepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateTotalData: (newData: any) => void;
}

interface Option {
  id: number;
  name: number | string;
}

interface ThirdStepFormValues {
  birth_country: string;
  birth_city: string;
  profession: string;
  nationality: string;
  nationality_2: string;
  us_citizen: boolean;
  social_status: string;
  pay_tax_country: string;
  ssn: string;
}

const ThindStep: React.FC<ThindStepProps> = ({
  step,
  setStep,
  updateTotalData,
}) => {
  const [countryArray, setCountryArray] = useState<any[]>([]);
  const [deutschlandIndex, setDeutschlandIndex] = useState<number>();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [birthCountry, setBirthCountry] = useState<Option>({ id: 0, name: "" });
  const [profession, setProfession] = useState<Option>({ id: 0, name: "" });
  const [nationality, setNationality] = useState<Option>({ id: 0, name: "" });
  const [nationality2, setNationality2] = useState<Option>({ id: 0, name: "" });
  const [usCitizen, setUsCitizen] = useState<boolean>(false);
  const [socialStatus, setSocialStatus] = useState<Option>({ id: 0, name: "" });
  const [SSN, setSSN] = useState<Option>({ id: 0, name: "" });

  useEffect(() => {
    if (birthCountry.id !== 0) {
      setValue("birth_country", birthCountry.name as string);
    }
    if (profession.id !== 0) {
      setValue("profession", profession.name as string);
    }
    if (nationality.id !== 0) {
      setValue("nationality", nationality.name as string);
    }
    setValue("nationality_2", nationality2.name as string);
    if (socialStatus.id !== 0) {
      setValue("social_status", socialStatus.name as string);
    }
    setValue("ssn", SSN.name as string);
    setValue("us_citizen", usCitizen);
    setValue("pay_tax_country", "Deutschland");
  }, [
    birthCountry,
    profession,
    nationality,
    nationality2,
    usCitizen,
    socialStatus,
    SSN,
  ]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const allCountries = countries.getNames();
        const deutschlandIndex = allCountries.findIndex(
          (country) => country === "Germany"
        );

        const formattedCountries = allCountries.map((country, index) => {
          return {
            id: index + 1,
            name: country === "Germany" ? "Deutschland" : country,
          };
        });

        setCountryArray(formattedCountries);
        setDeutschlandIndex(deutschlandIndex);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<ThirdStepFormValues>({
    defaultValues: {
      birth_country: "",
      birth_city: "",
      profession: "",
      nationality: "",
      nationality_2: "",
      social_status: "",
      us_citizen: usCitizen,
      pay_tax_country: "",
      ssn: "",
    },
    resolver: yupResolver(DetailsFormSchema),
  });

  const submitDetailsForm: SubmitHandler<ThirdStepFormValues> = async (
    data
  ) => {
    try {
      updateTotalData(data);
      setStep(4);
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <form
        className="flex w-full min-h-[1622px] bg-body justify-center pt-[100px]"
        onSubmit={handleSubmit(submitDetailsForm)}
      >
        <div className="flex flex-col w-full max-w-[788px] h-[1306px] bg-white rounded-lg px-8 pt-8 pb-10 shadow-[0_2px_10px_0_#4B5B6B26]">
          <Stepper state={step} />
          <div className="flex justify-center items-center gap-2.5 w-full h-[60px] mt-14 rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-gray3 flex gap-x-2.5 text-sm">
              <Image
                src={"./assets/icons/clock.svg"}
                alt=""
                width={16}
                height={16}
                className="mb-[2px]"
              />{" "}
              In nur 3 Minuten haben Sie die Registrierung abgeschlossen
            </p>
          </div>
          <div className="mt-7 mb-8 flex flex-col gap-y-5">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Familienstand
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable=""
                  oprtionsList={familienstandData}
                  setState={setSocialStatus}
                  state={socialStatus}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">Beruf</p>
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable=""
                  oprtionsList={berufData}
                  setState={setProfession}
                  state={profession}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Geburtsort
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Input
                  lable=""
                  type="text"
                  placeholder="Geburtsort"
                  {...register("birth_city")}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Geburtsland
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable=""
                  oprtionsList={countryArray}
                  defSelected={deutschlandIndex}
                  setState={setBirthCountry}
                  state={birthCountry}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Staatsangehörigkeit
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable=""
                  oprtionsList={countryArray}
                  defSelected={deutschlandIndex}
                  setState={setNationality}
                  state={nationality}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Zweite Staatsangehörigkeit
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable=""
                  oprtionsList={countryArray}
                  placeholder="Falls zutreffend, bitte auswählen ..."
                  setState={setNationality2}
                  state={nationality2}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Land der Steueransässigkeit
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Input
                  lable=""
                  type="text"
                  value="Deutschland"
                  readOnlyProp={true}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[354px]">
                <p className="mt-1 text-dark font-semibold text-md">
                  Wie sind Sie auf {environment.company.site_name} aufmerksam geworden?
                </p>
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable=""
                  oprtionsList={gewordenData}
                  setState={setSSN}
                  state={SSN}
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-dark">
                Sind Sie in den USA steueransässig?
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Checkbox state={usCitizen} setState={setUsCitizen} />
                <p className="text-gray1 mt-[2px] flex gap-x-2.5 relative">
                  Ich bin keine US Person
                  <Image
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={"./assets/icons/info.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />
                  {isHovered && (
                    <div className="absolute top-[-400px] bg-dark text-white p-2 rounded-lg border-4 border-solid border-yellow">
                      {tooltipText}
                    </div>
                  )}
                </p>
              </div>
            </div>
            <div>
              <p className="text-dark font-bold uppercase">
                Geschäftsbedingungen
              </p>
              <p className="text-gray3 mt-2.5">
                Es gelten die{" "}
                <Link href="#" className=" underline text-orange">
                  Geschäftsbedingungen
                </Link>{" "}
                und{" "}
                <Link href="#" className=" underline text-orange">
                  Datenschutzbestimmungen
                </Link>
                . Ich handle im eigenen wirtschaftlichen Interesse und nicht auf
                fremde Veranlassung (insbesondere nicht als Treuhänder)
              </p>
            </div>
            <div>
              <p className="text-dark font-bold uppercase">
                Erklärung über die persönlichen und wirtschaftlichen
                Verhältnisse
              </p>
              <p className="text-gray3 mt-2.5">
                Den in den Geschäftsbedingungen hinterlegten Informationsbogen
                für den Einleger über die gesetzliche Einlagensicherung habe ich
                empfangen. Ich bestätige, dass ich nicht in mehreren Ländern
                Steuer ansässig bin. (Bei mehr als einer Steueransässigkeit,
                kontaktieren Sie bitte den Kundenservice)
              </p>
            </div>
          </div>
          <Button lable="Akzeptieren und PIN festlegen" variant="default" />
          <p className="flex items-center gap-x-2.5 text-gray1 mt-4 justify-center">
            <Image
              src={"./assets/icons/lock.svg"}
              alt=""
              width={12.75}
              height={16}
              className="mb-[2px]"
            />
            Ihre Angaben werden verschlüsselt übertragen.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ThindStep;
