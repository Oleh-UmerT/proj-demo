import { useState } from "react";
import Input from "@/components/global/Input";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailFormSchema } from "@/schemas/RegisterSchemas";
import { checkEmail } from "@/services/auth.service";
import { environment } from "../../../projectConfig";

interface EmailFormProps {
  updateTotalData: (newData: any) => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface EmailFormValues {
  email: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ updateTotalData, setStep }) => {
  const [check, setCheck] = useState<boolean>(false);
  const [emailExist, setEmailExist] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EmailFormValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(EmailFormSchema),
  });

  const submitEmailForm: SubmitHandler<EmailFormValues> = async (data) => {
    try {
      const response = await checkEmail(data);
      console.log(response);
      if (!response.data.exist) {
        setEmailExist(false);
        updateTotalData(data);
        setStep(1);
      } else {
        setEmailExist(true);
      }
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <>
      <form
        className="flex w-full min-h-[1012px] bg-body justify-center pt-[100px]"
        onSubmit={handleSubmit(submitEmailForm)}
      >
        <div className="flex flex-col w-full max-w-[574px] h-[580px] bg-white rounded-lg px-8 pt-8 pb-10 shadow-[0_2px_10px_0_#4B5B6B26]">
          <h1 className=" text-dark font-normal text-4xl">Register</h1>
          <div className="mt-7">
            <Input
              lable="E-Mail oder Kontonummer"
              placeholder="E-Mail Adresse"
              type="text"
              {...register("email")}
            />
            {emailExist && (
              <p className="mt-1 text-red-600">This email already exists</p>
            )}
          </div>
          <p className="text-gray3 mt-5">
            Ich stimme den{" "}
            <Link href="/protection" className="text-orange underline">
              Datenschutzbestimmungen
            </Link>{" "}
            der {environment.company.site_name} zu.
          </p>
          <div className="flex items-start gap-2 my-8">
            <Checkbox state={check} setState={setCheck} />
            <p className="text-gray1 mb-[4px] text-sm">
              Verpassen Sie keine Informationen zu Partnerbanken, neuen
              Angeboten, Zinsänderungen und Prämien. Melden Sie sich für unseren
              Newsletter an. Ihre Daten werden nicht an Dritte weitergegeben und
              Sie können sich jederzeit wieder abmelden.
            </p>
          </div>
          <Button lable="Registrieren" variant="default" />
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
          <div className="flex justify-center items-center gap-2.5 w-full h-[60px] mt-7 rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-gray3">Bereits Kunde?</p>
            <Link
              href="/login"
              className="text-orange underline hover:text-orange-hover flex gap-2"
            >
              Hier zum Login{" "}
              <Image
                src={"./assets/icons/orange-arrow.svg"}
                alt=""
                width={9.6}
                height={6}
              />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
