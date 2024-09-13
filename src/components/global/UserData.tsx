import Image from "next/image";
import Link from "next/link";
import attantionImg from "../../../public/assets/icons/attantion.svg";
import closeImg from "../../../public/assets/icons/close.svg";
import { useState } from "react";
import {
  useGetCurrentUserQuery,
  useGetVerStatQuery,
} from "@/store/reducers/user/userApi";

const UserData = () => {
  const [notifyOpen, setNotifyOpen] = useState(true);
  const { data: verStatus } = useGetVerStatQuery();
  const { data: user } = useGetCurrentUserQuery();

  return (
    <div className=" h-[353px] md:h-[313px] bg-body px-5 md:px-0 w-full flex justify-center">
      <div className="flex w-full max-w-[1276px] flex-col">
        {(notifyOpen || !verStatus) && (
          <div className="flex gap-x-3 justify-between w-full border border-solid border-notify-border bg-notify h-12 mt-8 py-3.5 px-4 rounded-lg">
            <div className="flex gap-x-3">
              <Image src={attantionImg} alt="" width={21.88} height={20} />
              <p className="text-dark2 flex gap-x-2.5 items-center">
                Identifizierung noch ausstehend
                <Link href="/verification" className="text-orange">
                  Mehr erfahren
                </Link>
              </p>
            </div>
            <div>
              <Image
                src={closeImg}
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setNotifyOpen(false)}
              />
            </div>
          </div>
        )}
        <h2 className="text-dark text-3xl font-bold mt-8">
          Willkommen, {user?.name}
        </h2>
        <div className="flex gap-x-8 mt-5">
          <div className="flex flex-col bg-white gap-1 py-8 px-5 w-full h-[127px] md:h-[107px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-dark flex font-bold text-4xl">€{"0"}</p>
            <p className="text-gray1 flex text-sm">Aktive Anlagen</p>
          </div>
          <div className="flex flex-col bg-white gap-1 py-8 px-5 w-full h-[127px] md:h-[107px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-dark flex font-bold text-4xl">€{"0"}</p>
            <p className="text-gray1 flex text-sm">Verfügbarer Betrag</p>
          </div>
          <div className="flex flex-col bg-white gap-1 py-8 px-5 w-full h-[127px] md:h-[107px] rounded-lg shadow-[0_2px_10px_0_#4B5B6B26]">
            <p className="text-dark flex font-bold text-4xl">€{"0"}</p>
            <p className="text-gray1 flex text-sm">Angefragter Anlagebetrag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
