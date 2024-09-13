import React, { FC, useState } from "react";
import Modal from "react-modal";
import FileUpload from "../global/FileUpload";
import Button from "../global/Button";
import { useFileUploadMutation } from "@/store/reducers/user/userApi";

interface DocFrontModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  func: () => void;
}

const DocFrontModal: FC<DocFrontModalProps> = ({
  isOpen,
  onRequestClose,
  func,
}) => {
  const [
    fileUpload,
    { data, isSuccess: isSuccessUpload, isLoading: isLoadingFile },
  ] = useFileUploadMutation();
  const [newFile, setNewFile] = useState<File>();
  const [base64String, setBase64String] = useState("");

  const onFileChange = (file: File) => {
    console.log(file);
    setNewFile(file);
  };

  const submitFileUploadForm = async () => {
    if (newFile) {
      const reader = new FileReader();
      reader.readAsDataURL(newFile);
      reader.onload = () => {
        const base64Result = reader.result as string;
        setBase64String(base64Result);
        console.log(newFile)

        const formdata = new FormData();
        formdata.append("id_front", newFile);
        formdata.append("id_back", newFile);
        formdata.append("selfie", newFile);
        fileUpload(formdata);
      };
    }
  };

  const nextStep = () => {
    submitFileUploadForm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal 1"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: 558,
          minHeight: 786,
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
      <h2 className="text-xl font-semibold px-10 md:px-0 text-dark">
        Schritt 1. Ausweisdokument Vorderseite
      </h2>
      <FileUpload
        onFileChange={onFileChange}
        imgSrc="./assets/images/doc-front.svg"
      />
      <div>
        <h2 className=" font-bold text-dark px-10 md:px-0 mt-7">SCAN-/BILDANFORDERUNGEN</h2>
        <ul className="list-decimal space-y-1 px-10 md:px-0 text-dark mt-3.5 mx-5">
          <li className="">
            Mach ein klares Foto deines Ausweises, auf dem jedes einzelne Detail
            lesbar und nicht verschwommen ist.
          </li>
          <li className="">
            Schalte den Blitz aus, um Blendung auf deinen Dokumenten zu
            vermeiden.
          </li>
        </ul>
      </div>
      <div>
        <h2 className=" font-bold text-dark px-10 md:px-0 mt-7">AKZEPTIERTE DOKUMENTE</h2>
        <ul className="list-decimal text-dark px-10 md:px-0 mt-3.5 mx-5">
          <li className="">Personalausweiß</li>
          <li className="">Führerschein</li>
          <li className="">Reisepass</li>
          <li className="">Aufenthaltstitel</li>
        </ul>
      </div>
      <div className="flex justify-between  px-10 md:px-0 mt-7">
        <Button variant="gray" lable="ABBRECHEN" func={onRequestClose} />
        <Button
          variant="outline-orange"
          lable="Hochladen und weiter"
          func={nextStep}
        />
      </div>
    </Modal>
  );
};

export default DocFrontModal;
