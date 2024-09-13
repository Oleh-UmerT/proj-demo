import Stepper from "./Stepper";
import { useState, useEffect, useRef } from "react";
import Input from "@/components/global/Input";
import Image from "next/image";
import Button from "@/components/global/Button";
import Select from "../global/Select";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PhoneFormSchema } from "@/schemas/RegisterSchemas";

const numberPattern = [
  { id: 1, name: "Austria (+43)" },
  { id: 2, name: "Germany (+49)" },
  { id: 3, name: "Switzerland (+41)" },
];

const Lands = [
  { id: 1, name: "Deutschland" },
  { id: 2, name: "Österreich" },
  { id: 3, name: "Schweiz" },
  { id: 4, name: "Lichtenstein" },
];

interface SecondStepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateTotalData: (newData: any) => void;
}

interface Option {
  id: number;
  name: number | string;
}

interface SecondStepFormValues {
  phone: string;
  street: string;
  house: string;
  zip: string;
  city: string;
  country: string;
}

const SecondStep: React.FC<SecondStepProps> = ({ step, setStep, updateTotalData }) => {
  const [phonePrefix, setPhonePrefix] = useState<Option>({ id: 0, name: "" });
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [land, setLand] = useState<Option>({ id: 0, name: "" });

  
  const removeNonNumeric = (num: any) => {
    let cleanedNum = num?.toString().replace(/[^0-9]/g, "");
    // Обрезаем до 20 символов
    cleanedNum = cleanedNum.slice(0, 20);
    return cleanedNum;
  };
  

  const phoneInputChange = (e: any) => {
    
    setPhoneNumber(removeNonNumeric(e.target.value));
  };

  useEffect(() => {
    if (land.id !== 0) {
      setValue("country", land.name as string);
    }
    if (phonePrefix.id !== 0 && phoneNumber) {
      setValue("phone", `${phonePrefix.name}${phoneNumber}`);
    }
  }, [phoneNumber, land, phonePrefix]);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<SecondStepFormValues>({
    defaultValues: {
      phone: "",
      street: "",
      house: "",
      zip: "",
      city: "",
      country: "",
    },
    resolver: yupResolver(PhoneFormSchema),
  });

  const submitPhoneForm: SubmitHandler<SecondStepFormValues> = async (data) => {
    try {
      updateTotalData(data)
      setStep(3);
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <form
        className="flex w-full min-h-[1012px] bg-body justify-center pt-[100px]"
        onSubmit={handleSubmit(submitPhoneForm)}
      >
        <div className="flex flex-col w-full max-w-[788px] h-[764px] bg-white rounded-lg px-8 pt-8 pb-10 shadow-[0_2px_10px_0_#4B5B6B26]">
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
              <div className="w-full max-w-[209px]">
                <Select
                  lable="Mobilfunknummer"
                  oprtionsList={numberPattern}
                  setState={setPhonePrefix}
                  state={phonePrefix}
                />
              </div>
              <div className="w-full max-w-[499px] mt-3.5">
                <Input
                  lable=""
                  placeholder="Mobilfunknummer"
                  type="text"
                  id="phoneRef"
                  onChange={phoneInputChange}
                  value={phoneNumber}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full max-w-[354px]">
                <Input
                  lable="Straße"
                  type="text"
                  placeholder="Straße"
                  {...register("street")}
                />
              </div>
              <div className="w-full max-w-[354px]">
                <Input
                  lable="Haus-Nr."
                  type="text"
                  placeholder="Haus-Nr"
                  {...register("house")}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full max-w-[354px]">
                <Input
                  lable="PLZ"
                  type="text"
                  placeholder="Plz"
                  {...register("zip")}
                />
              </div>
              <div className="w-full max-w-[354px]">
                <Input
                  lable="Ort"
                  type="text"
                  placeholder="Ort"
                  {...register("city")}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full max-w-[354px]">
                <Select
                  lable="Land"
                  oprtionsList={Lands}
                  defSelected={0}
                  setState={setLand}
                  state={land}
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

export default SecondStep;
