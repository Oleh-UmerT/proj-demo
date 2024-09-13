import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Head from "next/head";
import EmailForm from "@/components/register/EmailForm";
import FirstStep from "@/components/register/FirstStep";
import SecondStep from "@/components/register/SecondStep";
import ThindStep from "@/components/register/ThirdStep";
import PasswordCreate from "@/components/register/Password";

const Login = () => {
  const [step, setStep] = useState<number>(0);
  const [totalData, setTotalData] = useState<any>();

  const updateTotalData = (newData: any) => {
    setTotalData((prevData: any) => ({
      ...prevData,
      ...newData,
    }));
  };
  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>
      {/* <PageLayout> */}
      {step === 0 && (
        <EmailForm setStep={setStep} updateTotalData={updateTotalData} />
      )}
      {step === 1 && (
        <FirstStep
          step={step}
          setStep={setStep}
          updateTotalData={updateTotalData}
        />
      )}
      {step === 2 && (
        <SecondStep
          step={step}
          setStep={setStep}
          updateTotalData={updateTotalData}
        />
      )}
      {step === 3 && (
        <ThindStep
          step={step}
          setStep={setStep}
          updateTotalData={updateTotalData}
        />
      )}
      {step === 4 && <PasswordCreate totalData={totalData} />}
      {/* </PageLayout> */}
    </>
  );
};

export default Login;
