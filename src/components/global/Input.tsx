import React, { useState } from "react";
import Image from "next/image";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  lable: string;
  placeholder?: string;
  type: string;
  value?: any;
  readOnlyProp?: boolean;
  withTopText?: boolean;
  topText?: string;
}

const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    lable,
    placeholder,
    type,
    value,
    readOnlyProp,
    withTopText,
    topText,
    ...otherProps
  } = props;
  const [changeType, setChangeType] = useState(type);
  const changeInputType = () => {
    if (changeType === "password") {
      setChangeType("text");
    } else {
      setChangeType("password");
    }
  };
  return (
    <div>
      <p className=" text-dark text-sm font-semibold">{lable}</p>
      <div className=" relative">
        {withTopText && (
          <span className="absolute text-sm ml-2 text-dark px-1 bg-white z-10">
            {topText}
          </span>
        )}
        <input
          ref={ref}
          type={changeType}
          {...otherProps}
          placeholder={placeholder || ""}
          className=" text-dark border border-solid border-input rounded h-12 w-full py-3 px-4 mt-2.5 placeholder:text-gray1"
          value={value}
          readOnly={readOnlyProp}
        />

        {type === "password" && (
          <Image
            src={"./assets/icons/eye.svg"}
            alt=""
            width={19.25}
            height={14}
            onClick={changeInputType}
            className="top-[50%] right-4 absolute cursor-pointer"
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = "MyComponent";

export default Input;
