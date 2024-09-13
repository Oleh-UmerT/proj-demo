import { useEffect, useState } from "react";
import Button from "../global/Button";
import Input from "../global/Input";
import Select from "../global/Select";
import Image from "next/image";

interface Option {
  id: number;
  name: number | string;
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
  { id: 3, name: "Dr. Dr." },
  { id: 4, name: "Dr. med." },
  { id: 5, name: "Prof" },
  { id: 6, name: "Prof. Dr." },
  { id: 7, name: "Prof. Dr. Dr" },
  { id: 8, name: "Prof. Dr. med" },
];

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

const PersonalInfo = () => {
  const [gender, setGender] = useState<Option>({ id: 0, name: "" });
  const [title, setTitle] = useState<Option>({ id: 0, name: "" });
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

  return (
    <div>
      <form className="flex w-full min-h-[812px] justify-center pt-[100px]">
        <div className="flex flex-col w-full max-w-[800px] h-[670px] bg-white rounded-lg px-8 pt-8 pb-10">
          <h1 className=" text-dark text-xl font-semibold">
            Persönliche Angaben
          </h1>
          <div className="mt-7 mb-8 flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="w-full max-w-[800px]">
                <Select
                  lable="Anrede"
                  oprtionsList={genderList}
                  setState={setGender}
                  state={gender}
                />
              </div>
              <div className="w-full max-w-[800px]">
                <Select
                  lable="Titel"
                  oprtionsList={titleList}
                  setState={setTitle}
                  state={title}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="w-full max-w-[800px]">
                <Input lable="Vorname(n)" type="text" placeholder="Vorname" />
              </div>
              <div className="w-full max-w-[800px]">
                <Input lable="Nachname" type="text" placeholder="Nachname" />
              </div>
            </div>
            <div className="flex justify-between gap-x-5">
              <div className="w-full max-w-[800px]">
                <Select
                  lable="Jahr"
                  oprtionsList={yearObjects}
                  placeholder="Jahr"
                  state={selectedYear}
                  setState={setSelectedYear}
                />
              </div>
              <div className="w-full max-w-[800px]">
                <Select
                  lable="Monat"
                  oprtionsList={monthsList}
                  placeholder="Monat"
                  state={selectedMonth}
                  setState={setSelectedMonth}
                />
              </div>
              <div className="w-full max-w-[800px]">
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
          <Button lable="Speichern" variant="default" />
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

export default PersonalInfo;
