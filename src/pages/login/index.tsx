import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Head from "next/head";
import Input from "@/components/global/Input";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPageContext, Redirect } from "next";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActions } from "@/hooks/useAction";
import { getSession } from "next-auth/react";
import { LoginSchema } from "@/schemas/AuthSchemas";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [check, setCheck] = useState<boolean>(false);
  const { notifyError } = useActions();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
  });

  const submitLoginForm: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      let credentials = {
        username: data.email,
        password: data.password,
      };
      const response = await signIn("credentials", {
        ...credentials,
        // callbackUrl: `${window.location.origin}/api/auth/callback/credentials`,
        redirect: false,
      });
      if (response?.status !== 200) {
        setError("email", {
          type: "manual",
          message: "    ",
        });
        setError("password", {
          type: "manual",
          message:
            "Sorry, your email or password is incorrect. Please try again",
        });
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      notifyError("Something went wrong!");
    }
  };

  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>
      {/* <PageLayout> */}
      <form
        className="flex w-full min-h-[1012px] bg-body justify-center pt-[100px]"
        onSubmit={handleSubmit(submitLoginForm)}
      >
        <div className="flex flex-col w-full max-w-[574px] h-[538px] bg-white rounded-lg px-8 pt-8 pb-10 shadow-[0_2px_10px_0_#4B5B6B26]">
          <h1 className=" text-dark font-normal text-4xl">Login</h1>
          <div className="mt-7">
            <Input
              lable="E-Mail oder Kontonummer"
              placeholder="E-Mail oder Kontonummer*"
              type="text"
              {...register("email")}
            />
          </div>
          <div className="mt-5">
            <Input
              lable="Passwort"
              placeholder="Passwort*"
              type="password"
              {...register("password")}
            />
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-2">
              <Checkbox state={check} setState={setCheck} />
              <p className="text-gray1 mt-[2px]">Login merken</p>
            </div>
            <Link
              href="#"
              className="text-orange underline hover:text-orange-hover"
            >
              Passwort vergessen?
            </Link>
          </div>
          <Button lable="ANMELDEN" variant="default" />
          <div className="flex justify-center items-center gap-2.5 w-full h-[60px] mt-7 rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-gray3">Noch kein Kunde?</p>
            <Link
              href="/register"
              className="text-orange underline hover:text-orange-hover flex gap-2"
            >
              Als Privatkunde Registrieren{" "}
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
      {/* </PageLayout> */}
    </>
  );
};

export default Login;

export const getServerSideProps = async (context: NextPageContext) => {
  let session = await getSession(context);
  if (session) {
    const redirect: Redirect = {
      statusCode: 301,
      destination: "/",
    };
    return {
      redirect: redirect,
    };
  } else {
    return {
      props: {
        session,
      },
    };
  }
};
