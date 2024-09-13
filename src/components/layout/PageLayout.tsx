import { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import Button from "../global/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import {
  useGetCurrentUserQuery,
  useGetBalanceQuery,
  useGetVerStatQuery,
} from "@/store/reducers/user/userApi";
import clsx from "clsx";
import { motion } from "framer-motion";
import { getSession } from "next-auth/react";
import logoImg from "../../../public/assets/images/logo.svg";
import whiteArrow from "../../../public/assets/icons/white-arrow.svg";
import profileImg from "../../../public/assets/icons/profile.svg";
import attantionImg from "../../../public/assets/icons/attantion.svg";
import closeImg from "../../../public/assets/icons/close.svg";
import burderMenu from "../../../public/assets/icons/burger.svg";
import phoneImg from "../../../public/assets/icons/phone.svg";
import letterImg from "../../../public/assets/icons/letter.svg";
import smallLogo from "../../../public/assets/icons/small-logo.svg";
import { environment } from "../../../projectConfig";
import BurgerMenu from "../global/BurgerMenu";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const test = async () => {
  const sessionT = await getSession();
  return sessionT;
};

const wrapperVariants = {
  open: {
    display: "block",
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    display: "none",
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [buttonText, setButtonText] = useState("");
  const [notifyOpen, setNotifyOpen] = useState(true);
  const [logoLink, setLogoLink] = useState<string>("/");
  const [isAuthed, seIsAuthed] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpenOffes, setIsOpenOffes] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: fetchError,
  } = useGetCurrentUserQuery();

  // const test2 = async () => {
  //   const testSes = await test();
  //   // console.log(testSes)
  // };

  // console.log(status, isLoadingUser, user, fetchError);

  // test2()

  useEffect(() => {
    if (status === "authenticated") {
      seIsAuthed(true);
      setButtonText("Abmelden");
      setLogoLink("/dashboard");
    } else {
      seIsAuthed(false);
      setButtonText("Anmelden");
      setLogoLink("/");
    }
    // if (!isLoadingUser && !user && status === "authenticated" && fetchError) {
    //   signOut();
    // }
  }, [status]);

  const loginLogoutButton = () => {
    if (status === "authenticated") {
      signOut();
    } else {
      router.push("/login");
    }
  };

  const toRegister = () => {
    router.push("/register");
  };
  const toDataUpdate = () => {
    router.push("/edit-profile");
  };

  return (
    <div>
      <header className="h-auto">
        <div className=" h-12 bg-bar w-full md:flex justify-center hidden">
          <div className="flex w-full max-w-[1276px] justify-between items-center ">
            <p className=" text-dark text-sm font-semibold">
              Mo - Fr von 9:00 - 16:00
            </p>
            <p className=" text-dark text-sm font-semibold">
              Haben Sie Fragen? Schreiben Sie uns!{" "}
              <span className="underline">info@mono-im.de</span> oder Rufen Sie
              uns an +49 (0)30 217 840 00
            </p>
          </div>
        </div>
        <div className=" h-[84px] bg-header w-full flex justify-center">
          <div className="flex w-[1276px] justify-between items-center">
            <Link href={logoLink}>
              <Image src={logoImg} width={158.71} height={40} alt="logo" />
            </Link>
            <BurgerMenu/>
            <div
              className={clsx({
                "md:flex justify-between items-center w-full h-full hidden":
                  true,
                " max-w-[825.4px]": !isAuthed,
                " max-w-[625.4px]": isAuthed,
              })}
            >
              {!isAuthed && (
                <div className="flex justify-between items-center w-full max-w-[465.4px]">
                  <div
                    className="realtive"
                    onMouseEnter={() => {
                      setIsOpen2(false);
                      setIsOpen1(true);
                      setIsOpen3(false);
                    }}
                    onMouseLeave={() => {
                      setIsOpen1(false);
                    }}
                  >
                    <p className="flex text-white gap-2.5 cursor-pointer select-none">
                      So funktioniert&apos;s{" "}
                      <Image
                        src={whiteArrow}
                        alt=""
                        width={12.8}
                        height={8}
                        className=" select-none"
                      />
                    </p>
                    {isOpen1 && (
                      <motion.div
                        animate={isOpen1 ? "open" : "closed"}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-auto bg-body top-18 -ml-3 rounded py-3 px-1"
                      >
                        <motion.ul
                          initial={wrapperVariants.closed}
                          variants={wrapperVariants}
                        >
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/so-funktioniert"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              So funktioniert
                            </Link>
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/uns"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Über {environment.company.site_name}
                            </Link>
                          </motion.li>

                          <motion.li variants={itemVariants}>
                            <Link
                              href="/kontakt"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Kontakt
                            </Link>
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/so-funktioniert"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Häufig gestellte Fragen
                            </Link>
                          </motion.li>
                        </motion.ul>
                      </motion.div>
                    )}
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setIsOpen2(true);
                      setIsOpen1(false);
                      setIsOpen3(false);
                    }}
                    onMouseLeave={() => {
                      setIsOpen2(false);
                    }}
                  >
                    <p className="flex select-none text-white gap-2.5 cursor-pointer">
                      Angebote{" "}
                      <Image
                        src={whiteArrow}
                        alt=""
                        width={12.8}
                        height={8}
                        className=" select-none"
                      />
                    </p>
                    {isOpen2 && (
                      <motion.div
                        animate={isOpen2 ? "open" : "closed"}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-auto bg-body top-18 -ml-3 rounded py-3 px-1"
                      >
                        <motion.ul
                          initial={wrapperVariants.closed}
                          variants={wrapperVariants}
                        >
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/festgeld-offers"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Festgeld
                            </Link>
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Tagesgeld
                            </Link>
                          </motion.li>
                        </motion.ul>
                      </motion.div>
                    )}
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setIsOpen2(false);
                      setIsOpen1(false);
                      setIsOpen3(true);
                    }}
                    onMouseLeave={() => {
                      setIsOpen3(false);
                    }}
                  >
                    <p className="flex select-none text-white gap-2.5 cursor-pointer">
                      Finanzwissen{" "}
                      <Image
                        src={whiteArrow}
                        alt=""
                        width={12.8}
                        height={8}
                        className=" select-none"
                      />
                    </p>
                    {isOpen3 && (
                      <motion.div
                        animate={isOpen3 ? "open" : "closed"}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-auto bg-body top-18 -ml-9 rounded py-3 px-2"
                      >
                        <motion.ul
                          initial={wrapperVariants.closed}
                          variants={wrapperVariants}
                        >
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/einlagensicherung"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Einlagensicherung
                            </Link>
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/steuerinformationen"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Steuerinformationen
                            </Link>
                          </motion.li>
                        </motion.ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
              {isAuthed && (
                <div className="flex justify-between items-center w-full max-w-[245.4px] h-full">
                  <Link
                    href="/dashboard"
                    className={clsx({
                      "flex text-white gap-2.5 cursor-pointer font-medium h-full items-center":
                        true,
                      "border-b-2 border-solid border-yellow pt-[2px]":
                        router.pathname === "/dashboard",
                    })}
                  >
                    MEINE ANLAGEN
                  </Link>
                  <div
                    onMouseEnter={() => {
                      setIsOpenOffes(true);
                    }}
                    onMouseLeave={() => {
                      setIsOpenOffes(false);
                    }}
                    className={clsx({
                      relative: true,
                      "border-b-2 border-solid border-yellow pt-[2px]":
                        router.pathname === "/festgeld" ||
                        router.pathname === "/tagesgeld",
                    })}
                  >
                    <p
                      className={clsx({
                        "flex text-white h-[80px] gap-2.5 cursor-pointer font-medium items-center ":
                          true,
                        "border-b-1 border-solid border-yellow":
                          router.pathname === "/festgeld" ||
                          router.pathname === "/tagesgeld",
                      })}
                    >
                      ANGEBOTE
                    </p>
                    {isOpenOffes && (
                      <motion.div
                        animate={isOpenOffes ? "open" : "closed"}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-auto bg-body top-[55px] -ml-3 rounded py-3 px-2"
                      >
                        <motion.ul
                          initial={wrapperVariants.closed}
                          variants={wrapperVariants}
                        >
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/festgeld"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Festgeld
                            </Link>
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            <Link
                              href="/tagesgeld"
                              className="block py-2 px-3 text-dark hover:text-dark hover:bg-yellow rounded  "
                              aria-current="page"
                            >
                              Tagesgeld
                            </Link>
                          </motion.li>
                        </motion.ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
              <div className="ml-8 flex gap-5">
                {isAuthed && (
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={toDataUpdate}
                  >
                    <Image src={profileImg} alt="" width={36} height={36} />
                    <p className="text-white ">
                      {user?.name && user.name.length > 9
                        ? user?.name.slice(0, 9) + "..."
                        : user?.name}
                    </p>
                  </div>
                )}
                <Button
                  lable={buttonText}
                  variant="default"
                  func={loginLogoutButton}
                />
                {!isAuthed && (
                  <Button
                    lable="Anleger werden"
                    variant="outline"
                    func={toRegister}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-footer w-full flex justify-center items-end pb-5 pt-20">
        <div className=" w-full max-w-[1276px] min-h-[380px] h-full flex flex-col">
          <div className="flex flex-col px-[30px] md:px-0 gap-y-5 w-full md:flex-row md:justify-between">
            <div className="flex flex-col">
              <p className=" text-white font-medium text-xl">
                Haben Sie Fragen?
              </p>
              <div className="flex gap-2.5 mt-1.5">
                <Image src={phoneImg} alt="" width={18.24} height={18} />
                <div className="flex flex-col pt-6">
                  <p className=" text-white font-normal text-base">
                    03361-5062085
                  </p>
                  <p className=" text-white font-normal text-base">
                    (Mo – Fr 10:00 – 18:00 Uhr)
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <Image src={letterImg} alt="" width={18} height={18} />
                <p className=" text-text-secondary font-normal text-base underline">
                  info@email-sparkassa.org
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className=" text-white font-medium text-xl">
                Wie funktioniert es?
              </p>
              <Link
                href="/so-funktioniert"
                className=" text-text-secondary font-normal text-base underline mt-[30px]"
              >
                So funktioniert die Plattform
              </Link>
              <Link
                href="/banks"
                className=" text-text-secondary font-normal text-base underline mt-4"
              >
                Partnerbanken
              </Link>
            </div>
            <div className="flex flex-col">
              <p className=" text-white font-medium text-xl">Unternehmen</p>
              <Link
                href="/uns"
                className=" text-text-secondary font-normal text-base underline mt-[30px]"
              >
                Über {environment.company.site_name}
              </Link>
            </div>
            <div className="flex flex-col">
              <p className=" text-white font-medium text-xl">Hilfe & Kontakt</p>
              <Link
                href="/kontakt"
                className=" text-text-secondary font-normal text-base underline mt-[30px]"
              >
                Kontaktieren Sie uns
              </Link>
              <Link
                href="/so-funktioniert"
                className=" text-text-secondary font-normal text-base underline mt-4"
              >
                Häufig gestellte Fragen
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-[30px] md:ml-0 md:flex-row justify-between md:items-center mt-[90px]">
            <p className="text-sm font-normal text-white">
              © Copyright 2022 Mono by Northmill Group AB
            </p>
            <div className="flex w-full max-w-[345px] justify-between">
              <Link
                href="/imprint"
                className=" text-text-secondary font-normal text-sm underline"
              >
                Impressum
              </Link>
              <Link
                href="/protection"
                className=" text-text-secondary font-normal text-sm underline"
              >
                Datenschutz
              </Link>
              <Link
                href="/conditions"
                className=" text-text-secondary font-normal text-sm underline"
              >
                AGB
              </Link>
              <Link
                href="/safety"
                className=" text-text-secondary font-normal text-sm underline"
              >
                IT-Sicherheit
              </Link>
            </div>
          </div>
          <div className="flex mx-[30px] md:mx-0 gap-[15px] my-[30px]">
            <Image src={smallLogo} alt="" width={33} height={32} />
            <p className="max-w-[771px] text-white font-normal text-sm pt-2">
              Mono ist eine Marke der Northmill Group AB in Schweden. Northmill
              Group AB operiert im D/A/CH Gebiet unter der Marke
              &quot;Mono&quot; und ist reguliert von der Schwedischen
              Finanzaufsicht Riksgälden unter der Referenz-Nummer 556709-4866.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
