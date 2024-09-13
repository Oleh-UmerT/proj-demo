import React, { useState, DragEvent, ChangeEvent, useRef } from "react";
import Image from "next/image";

interface FileUploadProps {
  onFileChange: (file: File) => void;
  imgSrc: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, imgSrc }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<any>();

  const inputRef = useRef<any>();

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      onFileChange(file);
      setPreviewSrc(URL.createObjectURL(file));
    }
  };

  const handleFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onFileChange(file);
      setPreviewSrc(URL.createObjectURL(file));
    }
  };

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className="w-full h-[308px] flex flex-col justify-center items-center cursor-pointer border-dashed border-text-secondary border-2 rounded mt-5"
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleDivClick}
      style={{
        backgroundImage: `url(${previewSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!previewSrc && (
        <>
          <Image src={imgSrc} alt="" width={260} height={180} />
          <p className="text-center text-gray1 mt-5">
            Drag & Drop or <br />
            Click to Browse files
          </p>
        </>
      )}
      <input
        type="file"
        accept=".jpg, .jpeg, .png,"
        onChange={handleFileUploadChange}
        style={{ display: "none" }}
        ref={inputRef}
      />
    </div>
  );
};

export default FileUpload;
