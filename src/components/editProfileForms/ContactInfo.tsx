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

interface ContactInfoProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateTotalData: (newData: any) => void;
}

interface Option {
  id: number;
  name: number | string;
}

interface ContactInfoFormValues {
  phone: string;
  street: string;
  house: string;
  zip: string;
  city: string;
  country: string;
}

const ContactInfo = ({

}) => {
  const [phonePrefix, setPhonePrefix] = useState<Option>({ id: 0, name: "" });
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [land, setLand] = useState<Option>({ id: 0, name: "" });

  const phoneInputChange = (e: any) => {
    setPhoneNumber(e.target.value);
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
  } = useForm<ContactInfoFormValues>({
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

  return (
    <div>
      <form className="flex w-full min-h-[712px] justify-center pt-[100px]">
        <div className="flex flex-col w-full max-w-[800px] h-[564px] bg-white rounded-lg px-8 pt-8 pb-10">
          <h1 className=" text-dark text-xl font-semibold">Kontaktdaten</h1>
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

export default ContactInfo;
