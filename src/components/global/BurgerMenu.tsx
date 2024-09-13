import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import whiteArrow from "../../../public/assets/icons/white-arrow.svg";
import profileImg from "../../../public/assets/icons/profile.svg";
import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { environment } from "../../../projectConfig";
import burderMenu from "../../../public/assets/icons/burger.svg";
import logoImg from "../../../public/assets/images/logo.svg";
import Button from "./Button";
import { useGetCurrentUserQuery } from "@/store/reducers/user/userApi";

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

const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const BurgerMenu = () => {
  const [logoLink, setLogoLink] = useState<string>("/");
  const [isAuthed, seIsAuthed] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpenOffes, setIsOpenOffes] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: fetchError,
  } = useGetCurrentUserQuery();

  const [open, setOpen] = useState(false);
  const node = useRef<any>();
  useOnClickOutside(node, () => setOpen(false));

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
    <div ref={node} className="absolute w-full z-20 right-0 top-0">
      <Image
        onClick={() => setOpen(!open)}
        src={burderMenu}
        alt=""
        width={24}
        height={19}
        className="absolute right-0 z-30 select-none mr-4 mt-6"
      />
      {open && (
        <div className=" bg-header flex flex-col pt-16">
          <Link href={logoLink} className=" -mt-[42px]">
            <Image src={logoImg} width={158.71} height={40} alt="logo" />
          </Link>
          <div
            className={clsx({
              "flex flex-col": true,
            })}
          >
            {!isAuthed && (
              <div className="flex flex-col gap-y-5 mt-4">
                <div
                  className="realtive"
                  onClick={() => {
                    setIsOpen2(false);
                    setIsOpen1(!isOpen1);
                    setIsOpen3(false);
                  }}
                >
                  <p className="flex text-white gap-2.5 cursor-pointer select-none ml-2">
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
                      transition={{ duration: 0.5 }}
                      className="absolute z-20 w-full bg-header border-b-2 border-solid border-dark top-18 py-3 px-1"
                    >
                      <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                      >
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/so-funktioniert"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
                            aria-current="page"
                          >
                            So funktioniert
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/uns"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
                            aria-current="page"
                          >
                            Über {environment.company.site_name}
                          </Link>
                        </motion.li>

                        <motion.li variants={itemVariants}>
                          <Link
                            href="/kontakt"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
                            aria-current="page"
                          >
                            Kontakt
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/so-funktioniert"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
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
                  className={clsx({
                    relative: true,
                    "mt-[170px]": isOpen1,
                  })}
                  onClick={() => {
                    setIsOpen2(!isOpen2);
                    setIsOpen1(false);
                    setIsOpen3(false);
                  }}
                >
                  <p className="flex select-none text-white gap-2.5 cursor-pointer ml-2">
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
                      transition={{ duration: 0.5 }}
                      className="absolute z-20 w-full bg-header border-b-2 border-solid border-dark top-18 py-3 px-1"
                    >
                      <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                      >
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/festgeld-offers"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
                            aria-current="page"
                          >
                            Festgeld
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
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
                  className={clsx({
                    relative: true,
                    "mt-[90px]": isOpen2,
                  })}
                  onClick={() => {
                    setIsOpen2(false);
                    setIsOpen1(false);
                    setIsOpen3(!isOpen3);
                  }}
                >
                  <p className="flex select-none text-white gap-2.5 cursor-pointer ml-2">
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
                      transition={{ duration: 0.5 }}
                      className="absolute z-20 w-full bg-header border-b-2 border-solid border-dark top-18 py-3 px-1"
                    >
                      <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                      >
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/einlagensicherung"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
                            aria-current="page"
                          >
                            Einlagensicherung
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/steuerinformationen"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
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
              <div className="flex flex-col gap-y-5 mt-4">
                <Link
                  href="/dashboard"
                  className={clsx({
                    "flex text-white px-5 gap-2.5 cursor-pointer font-medium h-full items-center":
                      true,
                  })}
                >
                  MEINE ANLAGEN
                </Link>
                <div
                  onClick={() => {
                    setIsOpenOffes(!isOpenOffes);
                  }}
                  className={clsx({
                    relative: true,
                  })}
                >
                  <p
                    className={clsx({
                      "flex text-white h-[80px] px-5 gap-2.5 cursor-pointer font-medium items-center ":
                        true,
                    })}
                  >
                    ANGEBOTE
                  </p>
                  {isOpenOffes && (
                    <motion.div
                      animate={isOpenOffes ? "open" : "closed"}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 w-full bg-header border-b-2 border-solid border-dark top-18 py-3 px-1"
                    >
                      <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                      >
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/festgeld"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
                            aria-current="page"
                          >
                            Festgeld
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/tagesgeld"
                            className="block py-2 px-3 text-white hover:text-white hover:bg-yellow rounded  "
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
            <div
              className={clsx({
                "mx-2 mb-2 flex gap-5 pt-5 flex-col": true,
                "mt-[120px]": isOpen3 && !isAuthed,
                "mt-[140px]": isOpenOffes && isAuthed
              })}
            >
              {isAuthed && (
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={toDataUpdate}
                >
                  <Image src={profileImg} alt="" width={36} height={36} />
                  <p className="text-white ">
                    {user?.name && user.name}
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
      )}
    </div>
  );
};

export default BurgerMenu;
