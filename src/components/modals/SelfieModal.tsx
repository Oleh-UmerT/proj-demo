import React, { FC } from "react";
import Modal from "react-modal";
import FileUpload from "../global/FileUpload";
import Button from "../global/Button";

interface SelfieModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  func: () => void;
}

const SelfieModal: FC<SelfieModalProps> = ({
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
      contentLabel="Modal 3"
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
      <h2 className="text-xl font-semibold  px-10 md:px-0 text-dark">
        Schritt 3. Selfie mit Ausweis
      </h2>
      <FileUpload onFileChange={testFunc} imgSrc="./assets/images/selfie.svg" />
      <div>
        <h2 className=" font-bold text-dark mt-7">SCAN-/BILDANFORDERUNGEN</h2>
        <ul className="list-decimal space-y-1 px-10 md:px-0 text-dark mt-3.5 ml-5 mr-2">
          <li className="">
            Ihr Gesicht und ID sollten beide vollständig sichtbar sein.
          </li>
          <li className="">
            Halten Sie ihr Ausweisdokument (bei einem Reisepass) aufgeklappt,
            sodass das Foto und andere Angaben gut zu sehen sind.
          </li>
          <li className="">
            Das Dokument sollte vollständig lesbar sein, also nah genug an die
            Kameralinse halten, dass auch kleinere Texte groß genug sind
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
      <div className="flex justify-between px-10 md:px-0 mt-7">
        <Button variant="gray" lable="ABBRECHEN" func={onRequestClose} />
        <Button
          variant="outline-orange"
          lable="Hochladen & Fertig"
          func={func}
        />
      </div>
    </Modal>
  );
};

export default SelfieModal;
