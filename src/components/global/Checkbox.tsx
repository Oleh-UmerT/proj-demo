import Image from "next/image";
import checkIcon from "../../../public/assets/icons/check.svg";

interface CheckboxProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckboxProps> = ({ state, setState }) => {
  const onCheck = () => {
    setState(!state);
  };

  return (
    <div className="flex gap-2" onClick={onCheck}>
      <div className="border border-solid border-gray2 w-[18px] h-[18px] rounded cursor-pointer select-none">
        {state && <Image src={checkIcon} alt="" width={17} height={17} />}
      </div>
    </div>
  );
};

export default Checkbox;
