import { useState, useEffect } from "react";
import Input from "@/components/global/Input";
import Image from "next/image";
import Button from "@/components/global/Button";
import PasswordStrengthBar from "react-password-strength-bar";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordFormSchema } from "@/schemas/RegisterSchemas";
import { signupUser } from "@/services/auth.service";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { environment } from "../../../projectConfig";

interface PasswordFormValues {
  password: string;
}

interface PasswordFormProps {
  totalData: any;
}

const PasswordUpdate = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const router = useRouter();

  const handlePasswordChange = () => {
    setPasswordsMatch(newPassword === newPasswordCheck);
  };

  const updatePassword = (e: any) => {
    setNewPassword(e.target.value);
  };

  const updatePasswordCheck = (e: any) => {
    setNewPasswordCheck(e.target.value);
  };

  useEffect(() => {
    // handlePasswordChange();
    console.log(newPassword === newPasswordCheck);
    if (newPassword === newPasswordCheck) {
      setValue("password", newPassword);
    }
  }, [newPassword, newPasswordCheck]);

  const {
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    defaultValues: {
      password: "",
    },
    resolver: yupResolver(PasswordFormSchema),
  });

  return (
    <div>
      <form className="flex w-full min-h-[712px] justify-center pt-[100px]">
        <div className="flex flex-col w-full max-w-[800px] h-[768px] bg-white rounded-lg px-8 pt-8 pb-10">
        <h1 className=" text-dark text-xl font-semibold mb-[30px]">Passwort ändern</h1>
          <Input
            type="password"
            placeholder="Old Passwort"
            lable="Altes Passwort**"
          />
          <div className="mt-8">
            <Input
              type="password"
              placeholder="New Passwort"
              lable="Neues Passwort**"
              onChange={updatePassword}
            />
            <PasswordStrengthBar password={newPassword} minLength={6} />
            <p className="text-sm text-gray1">
              Ihr Passwort muss aus 6 bis 16 Zeichen bestehen und kann
              Buchstaben und Zahlen enthalten.
            </p>
          </div>
          <div className="my-8">
            <Input
              type="password"
              placeholder="Passwort wiederholen"
              lable="Neues Passwort wiederholen*"
              onChange={updatePasswordCheck}
            />
          </div>
          <Button lable="Passwort speichern" variant="default" />
          <p className="text-sm text-gray1 flex justify-center text-center mt-4 leading-6">
            Wenn Sie aus technischen Gründen Ihr Passwort nicht eingeben können,
            <br />
            kontaktieren Sie bitte unseren Kundenservice.
          </p>
        </div>
      </form>
    </div>
  );
};

export default PasswordUpdate;
