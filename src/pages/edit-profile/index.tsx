import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  useGetCurrentUserQuery,
  useGetVerStatQuery,
  useOfferApplyMutation,
} from "@/store/reducers/user/userApi";
import { getSession } from "next-auth/react";
import PersonalInfo from "@/components/editProfileForms/PersonalInfo";
import clsx from "clsx";
import { useState } from "react";
import ContactInfo from "@/components/editProfileForms/ContactInfo";
import PasswordUpdate from "@/components/editProfileForms/Password";

const EditProfile = () => {
  const [selected, setSelected] = useState("personal");
  const router = useRouter();
  const { id, iv } = router.query;
  const { data: verStatus } = useGetVerStatQuery();
  const { data: user } = useGetCurrentUserQuery();

  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>{" "}
      {/* <PageLayout> */}
      <div className="w-full h-[103px] relative flex justify-center">
        <Image
          src={"./assets/icons/profile.svg"}
          alt=""
          width={126}
          height={126}
          className="absolute z-10 mt-[40px]"
        />
        <div className="absolute z-10 mt-[176px] flex flex-col gap-y-4">
          <h1 className="text-dark font-semibold text-xl">
            {user?.name && user.name}
          </h1>
          <span className="text-gray1 flex items-center gap-x-2.5">
            Status:
            <div className="flex justify-center items-center gap-x-2 py-2.5 px-4 bg-opacity-40 bg-[#F4E9CD] w-[120px] h-[36px] border-2 border-solid border-[#F4E9CD] rounded-full text-[#B5893E] font-medium">
              <Image
                src={"./assets/icons/crown.svg"}
                alt=""
                width={17.47}
                height={14}
                className="-mt-[2px]"
              />{" "}
              Verifiziert
            </div>
          </span>
        </div>

        <div className="bg-body w-full max-w-[590px] h-[48px] absolute z-10 mt-[288px] flex items-center p-1 rounded-lg">
          <div
            className={clsx({
              "w-[220px] h-[40px] py-3 px-4 font-bold whitespace-nowrap flex justify-center items-center rounded cursor-pointer":
                true,
              "bg-white text-dark": selected === "personal",
              "text-gray1": selected !== "personal",
            })}
            onClick={() => setSelected("personal")}
          >
            PERSÖNLICHE ANGABEN
          </div>
          <div
            className={clsx({
              "w-[220px] h-[40px] py-3 px-4 font-bold whitespace-nowrap flex justify-center items-center rounded cursor-pointer":
                true,
              "bg-white text-dark": selected === "contact",
              "text-gray1": selected !== "contact",
            })}
            onClick={() => setSelected("contact")}
          >
            KONTAKTDATEN
          </div>
          <div
            className={clsx({
              "w-[220px] h-[40px] py-3 px-4 font-bold whitespace-nowrap flex justify-center items-center rounded cursor-pointer":
                true,
              "bg-white text-dark": selected === "pass",
              "text-gray1": selected !== "pass",
            })}
            onClick={() => setSelected("pass")}
          >
            PASSWORT
          </div>
        </div>
        <Image src={"/assets/images/edit-header.png"} alt="" fill />
      </div>
      <div className="flex w-full justify-center gap-x-8 pt-[40px] mt-[100px] mb-[150px]">
        <div className="w-full max-w-[800px]">
          {selected === "personal" && <PersonalInfo />}
          {selected === "contact" && <ContactInfo />}
          {selected === "pass" && <PasswordUpdate />}
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default EditProfile;
