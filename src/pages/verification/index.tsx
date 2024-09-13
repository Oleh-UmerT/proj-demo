import PageLayout from "@/components/layout/PageLayout";
import axiosInstance from "@/config/http";
import {
  useGetCurrentUserQuery,
  useGetVerStatQuery,
} from "@/store/reducers/user/userApi";
import { useEffect, useState } from "react";
import useImage from "use-image";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/global/Button";
import Link from "next/link";
import Input from "@/components/global/Input";
import DocFrontModal from "@/components/modals/DocFrontModal";
import DocBackModal from "@/components/modals/DocBackModal";
import SelfieModal from "@/components/modals/SelfieModal";
import SuccesModal from "@/components/modals/SuccessModal";
import UserData from "@/components/global/UserData";
import { getSession } from "next-auth/react";

const Verification = () => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);

  const { data: verStatus } = useGetVerStatQuery();

  const openModal1 = () => setModal1IsOpen(true);
  const closeModal1 = () => setModal1IsOpen(false);

  const openModal2 = () => {
    setModal2IsOpen(true);
    closeModal1();
  };
  const closeModal2 = () => setModal2IsOpen(false);

  const openModal3 = () => {
    setModal3IsOpen(true);
    closeModal2();
  };
  const closeModal3 = () => setModal3IsOpen(false);

  const openModal4 = () => {
    setModal4IsOpen(true);
    closeModal3();
  };
  const closeModal4 = () => setModal4IsOpen(false);
  return (
    <>
      <Head>
        <title>Mono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/small-logo.svg" sizes="any" />
      </Head>{" "}
      {/* <PageLayout> */}
      <UserData />
      <div className="flex w-full justify-center px-5 md:px-0 pt-[40px]">
        <div className="max-w-[1276px] w-full">
          <div className="flex flex-col">
            <h1 className="text-dark text-3xl font-semibold">
              Identifizierung
            </h1>
            <p className="text-dark mt-3">
              Nach erfolgreicher Prüfung Ihrer eingereichten Unterlagen erhalten
              Sie umgehend weitere Information per E-Mail.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-between mt-8">
            <div className="flex items-center justify-center gap-y-5 flex-col bg-white gap-1 py-5 px-5 w-[404px] h-[292px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
              <Image
                src={
                  verStatus
                    ? "./assets/images/ver-true.svg"
                    : "./assets/images/ver-none.svg"
                }
                alt=""
                width={128}
                height={128}
              />
              <h2 className="text-dark font-bold">
                1- AUSWEISDOKUMENT VORDERSEITE
              </h2>
              {verStatus && (
                <p className="text-gray1 text-center max-w-[364px]">
                  Das hochgeladene Dokument wurde durch unsere
                  <br /> Experten geprüft und verifiziert.
                </p>
              )}
              {!verStatus && (
                <p className="text-gray1 text-center max-w-[364px]">
                  Dokumente wurden noch nicht hochgeladen.
                  <br /> Klicke den Button um die Verifizierung zu beginnen
                </p>
              )}
            </div>
            <div className="flex items-center justify-center gap-y-5 flex-col bg-white gap-1 py-5 px-5 w-[404px] h-[292px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
              <Image
                src={
                  verStatus
                    ? "./assets/images/ver-true.svg"
                    : "./assets/images/ver-none.svg"
                }
                alt=""
                width={128}
                height={128}
              />
              <h2 className="text-dark font-bold">
                2- AUSWEISDOKUMENT RÜCKSEITE
              </h2>
              {verStatus && (
                <p className="text-gray1 text-center max-w-[364px]">
                  Das hochgeladene Dokument wurde durch unsere
                  <br /> Experten geprüft und verifiziert.
                </p>
              )}
              {!verStatus && (
                <p className="text-gray1 text-center max-w-[364px]">
                  Dokumente wurden noch nicht hochgeladen.
                  <br />
                  Klicke den Button um die Verifizierung zu beginnen
                </p>
              )}
            </div>
            <div className="flex items-center justify-center gap-y-5 flex-col bg-white gap-1 py-5 px-5 w-[404px] h-[292px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
              <Image
                src={
                  verStatus
                    ? "./assets/images/ver-true.svg"
                    : "./assets/images/ver-none.svg"
                }
                alt=""
                width={128}
                height={128}
              />
              <h2 className="text-dark font-bold">3- SELFIE MIT AUSWEIS</h2>
              {verStatus && (
                <p className="text-gray1 text-center max-w-[364px]">
                  Das hochgeladene Dokument wurde durch unsere
                  <br /> Experten geprüft und verifiziert.
                </p>
              )}
              {!verStatus && (
                <p className="text-gray1 text-center max-w-[364px]">
                  Dokumente wurden noch nicht hochgeladen.
                  <br />
                  Klicke den Button um die Verifizierung zu beginnen
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-[50px] mb-[150px]">
            <div className="w-[240px]">
              <Button
                variant="outline-orange"
                lable="Verifizierung Starten"
                func={openModal1}
              />
            </div>
          </div>
        </div>
      </div>
      <DocFrontModal
        isOpen={modal1IsOpen}
        onRequestClose={closeModal1}
        func={openModal2}
      />
      <DocBackModal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        func={openModal3}
      />
      <SelfieModal
        isOpen={modal3IsOpen}
        onRequestClose={closeModal3}
        func={openModal4}
      />
      <SuccesModal
        isOpen={modal4IsOpen}
        onRequestClose={closeModal4}
        func={openModal3}
      />
      {/* </PageLayout> */}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination: '/',
        premanent: false
      }
    }
  }

  return {
    props: {session}
  }
}

export default Verification;
