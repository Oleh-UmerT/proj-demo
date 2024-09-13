import React, { FC } from "react";
import Modal from "react-modal";
import FileUpload from "../global/FileUpload";
import Button from "../global/Button";
import Image from "next/image";

interface SuccesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  func: () => void;
}

const SuccesModal: FC<SuccesModalProps> = ({
  isOpen,
  onRequestClose,
  func,
}) => {
  const testFunc = (file: File) => {
    console.log(file);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal 4"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: 558,
          minHeight: 428,
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "8px",
          boxShadow: "0px 2px 10px 0px #4B5B6B26",
          padding: "20px",
        },
      }}
    >
      <div className="flex flex-col px-10 md:px-0 items-center">
        <Image
          src={"./assets/images/send.svg"}
          alt=""
          width={128}
          height={128}
        />
        <h2 className="text-xl text-dark font-semibold px-10 md:px-0 text-center mt-5">
          Ihre Dokumente werden überprüft
        </h2>
        <p className="text-gray1 text-center px-10 md:px-0 mt-3.5">
          Ihre Angaben wurden gesendet.
          <br /> Die Verifizierung kann bis zu 3 Tage dauern. Sie
          <br /> erhalten eine weitere Benachrichtigung an Ihre E-
          <br />
          Mail-Adresse. Dankeschön
        </p>
      </div>
      <div className="flex justify-center mt-7 px-10 md:px-0 ml-5">
        <div className="w-[206px]">
          <Button variant="outline-orange" lable="Anlagen anzeigen" func={onRequestClose}/>
        </div>
      </div>
    </Modal>
  );
};

export default SuccesModal;
