import Stepper from "./Stepper";
import { useState, useEffect } from "react";
import Input from "@/components/global/Input";
import Image from "next/image";
import Button from "@/components/global/Button";
import Select from "../global/Select";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalFormSchema } from "@/schemas/RegisterSchemas";

interface Option {
  id: number;
  name: number | string;
}

interface FirstStepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateTotalData: (newData: any) => void;
}

interface FirstStepFormValues {
  gender: string;
  academic_position: string;
  last_name: string;
  first_name: string;
  dob: string;
}

function generateYearObjects(
  count = 100,
  startYear = new Date().getFullYear() - 18
) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: startYear - index,
  }));
}

function generateMonthData(month: number, year: number): Option[] {
  const daysInMonth = getDaysInMonth(month, year);

  return Array.from({ length: daysInMonth }, (_, index) => ({
    id: index + 1,
    name: index + 1,
  }));
}

function getDaysInMonth(month: number, year: number): number {
  const daysInMonthMap: Record<number, number> = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  return daysInMonthMap[month];
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const monthsList = [
  { id: 1, name: "Januar" },
  { id: 2, name: "Februar" },
  { id: 3, name: "März" },
  { id: 4, name: "April" },
  { id: 5, name: "Mai" },
  { id: 6, name: "Juni" },
  { id: 7, name: "Juli" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "Oktober" },
  { id: 11, name: "November" },
  { id: 12, name: "Dezember" },
];

const genderList = [
  { id: 1, name: "Herr" },
  { id: 2, name: "Frau" },
];

const titleList = [
  { id: 1, name: "Keiner" },
  { id: 2, name: "Dr." },
  { id: 3, name: "Dr. Dr."},
  { id: 4, name: "Dr. med." },
  { id: 5, name: "Prof" },
  { id: 6, name: "Prof. Dr." },
  { id: 7, name: "Prof. Dr. Dr" },
  { id: 8, name: "Prof. Dr. med" },
];

const FirstStep: React.FC<FirstStepProps> = ({ step, setStep, updateTotalData }) => {
  const [gender, setGender] = useState<Option>({ id: 0, name: "" });
  const [title, setTitle] = useState<Option>({ id: 0, name: ""});
  const [selectedYear, setSelectedYear] = useState<Option>({ id: 0, name: "" });
  const [selectedMonth, setSelectedMonth] = useState<Option>({
    id: 0,
    name: "",
  });
  const [selectedDay, setSelectedDay] = useState<Option>({ id: 0, name: "" });
  const [daysInMonth, setDaysInMonth] = useState<Option[]>([]);
  const yearObjects = generateYearObjects();

  useEffect(() => {
    if (selectedMonth.id !== 0 && selectedYear.id !== 0) {
      setDaysInMonth(
        generateMonthData(selectedMonth.id, selectedYear.name as number)
      );
    }
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    if (gender.id !== 0) {
      setValue("gender", gender.name as string);
    }
    if (title.id !== 0) {
      setValue("academic_position", "None");
    }
    if (
      selectedYear.id !== 0 &&
      selectedMonth.id !== 0 &&
      selectedDay.id !== 0
    ) {
      const newDOB = `${selectedDay.name}-${selectedMonth.id}-${selectedYear.name}`;
      setValue("dob", newDOB);
    }
  }, [gender, title, selectedDay, selectedMonth, selectedYear]);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FirstStepFormValues>({
    defaultValues: {
      gender: "",
      academic_position: "",
      last_name: "",
      first_name: "",
      dob: "",
    },
    resolver: yupResolver(PersonalFormSchema),
  });

  const submitPersonalForm: SubmitHandler<FirstStepFormValues> = async (
    data
  ) => {
    try {
      updateTotalData(data)
      setStep(2);
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <form
        className="flex w-full min-h-[1012px] bg-body justify-center pt-[100px]"
        onSubmit={handleSubmit(submitPersonalForm)}
      >
        <div className="flex flex-col w-full max-w-[788px] h-[670px] bg-white rounded-lg px-8 pt-8 pb-10 shadow-[0_2px_10px_0_#4B5B6B26]">
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
            <div className="flex justify-between">
              <div className="w-full max-w-[354px]">
                <Select
                  lable="Anrede"
                  oprtionsList={genderList}
                  setState={setGender}
                  state={gender}
                />
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable="Titel"
                  oprtionsList={titleList}
                  setState={setTitle}
                  state={title}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full max-w-[354px]">
                <Input
                  lable="Vorname(n)"
                  type="text"
                  placeholder="Vorname"
                  {...register("first_name")}
                />
              </div>
              <div className="w-full max-w-[354px]">
                <Input
                  lable="Nachname"
                  type="text"
                  placeholder="Nachname"
                  {...register("last_name")}
                />
              </div>
            </div>
            <div className="flex justify-between gap-x-5">
              <div className="w-full max-w-[354px]">
                <Select
                  lable="Jahr"
                  oprtionsList={yearObjects}
                  placeholder="Jahr"
                  state={selectedYear}
                  setState={setSelectedYear}
                />
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable="Monat"
                  oprtionsList={monthsList}
                  placeholder="Monat"
                  state={selectedMonth}
                  setState={setSelectedMonth}
                />
              </div>
              <div className="w-full max-w-[354px]">
                <Select
                  lable="Tag"
                  oprtionsList={daysInMonth}
                  placeholder="Tag"
                  state={selectedDay}
                  setState={setSelectedDay}
                />
              </div>
            </div>
          </div>
          <Button lable="WEITER" variant="default" />
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

export default FirstStep;
