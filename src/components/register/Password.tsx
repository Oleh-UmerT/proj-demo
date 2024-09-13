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

const PasswordCreate: React.FC<PasswordFormProps> = ({ totalData }) => {
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

  const submitRegister: SubmitHandler<PasswordFormValues> = async (data) => {
    try {
      const dataToSend = {
        ...totalData,
        ...data,
      };
      const response = await signupUser(dataToSend);
      if (response.status >= 200 && response.status < 300) {
        const loginData = {
          username: totalData.email,
          password: data.password,
        };
        const resLogin = await signIn("credentials", {
          ...loginData,
          redirect: false,
        });

        router.push("/dashboard");
      } else {
        router.push("/")
      }
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <form
        className="flex w-full min-h-[1012px] bg-body justify-center pt-[100px]"
        onSubmit={handleSubmit(submitRegister)}
      >
        <div className="flex flex-col w-full max-w-[788px] h-[768px] bg-white rounded-lg px-8 pt-8 pb-10 shadow-[0_2px_10px_0_#4B5B6B26]">
          <div>
            <p className="text-dark font-medium text-4xl">
              Herzlich Willkommen, {totalData.first_name}
            </p>
            <p className="text-gray3 mt-5 leading-6">
              Bitte legen Sie nun ein Passwort für Ihren Onlinebanking-Zugang
              fest. Wichtig: Dieses Passwort benötigen Sie, um sich in Ihr
              Onlinebanking einzuloggen. Führen Sie anschließend ein
              Ident-Verfahren durch, um Ihr {environment.company.site_name}-Konto zu aktivieren. In
              Kürze erhalten Sie eine E-Mail mit weiteren Details zur
              Kontoeröffnung.
            </p>
          </div>
          <div className="mt-8">
            <Input
              type="password"
              placeholder="Passwort"
              lable="Passwort*"
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
              lable="Passwort wiederholen*"
              onChange={updatePasswordCheck}
            />
          </div>
          <Button lable="Passwort speichern" variant="default" />
          <p className="text-sm text-gray1 flex justify-center text-center mt-4 leading-6">
            Wenn Sie aus technischen Gründen Ihr Passwort nicht eingeben können,
            <br />
            kontaktieren Sie bitte unseren Kundenservice.
          </p>
          <div className="flex justify-center mt-8 gap-x-8">
            <div className="flex justify-center items-center gap-2.5 w-full h-[66px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
              <Image
                src={"./assets/icons/phone-yellow.svg"}
                alt=""
                width={32}
                height={32}
              />
              <div>
                <p className="font-semibold text-dark">03361-5062085</p>
                <p className="text-gray3">(Mo – Fr 9:00 – 16:00 Uhr)</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full h-[66px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
              <Image
                src={"./assets/icons/letter-yellow.svg"}
                alt=""
                width={41}
                height={32}
              />
              <div>
                <p className="font-semibold text-dark">
                  info@email-sparkassa.org
                </p>
                <p className="text-gray3">
                  Der beste Weg zu einer schnellen Antwort
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordCreate;
