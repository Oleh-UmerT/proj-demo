import clsx from "clsx";
import Image from "next/image";

interface StepperProps {
  state: number;
}

const Stepper: React.FC<StepperProps> = ({ state }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div
          className={clsx({
            "w-12 h-12 rounded-full bg-body flex items-center justify-center":
              true,
            "bg-yellow": state >= 1,
          })}
        >
          {state <= 1 ? (
            <p className="text-dark text-xl font-bold">1</p>
          ) : (
            <Image
              src={"./assets/icons/check-white.svg"}
              alt=""
              width={25.71}
              height={20}
              className="mb-[2px]"
            />
          )}
        </div>
        <p className="absolute -left-12 whitespace-nowrap font-semibold text-dark">
          Persönliche Angaben
        </p>
      </div>
      <div className="max-w-[205px] w-full h-1 bg-body"></div>
      <div className="relative">
        <div
          className={clsx({
            "w-12 h-12 rounded-full bg-body flex items-center justify-center":
              true,
            "bg-yellow": state >= 2,
          })}
        >
          {state <= 2 ? (
            <p
              className={clsx({
                " text-xl font-bold": true,
                "text-gray1": state < 2,
                " text-dark": state >= 2,
              })}
            >
              2
            </p>
          ) : (
            <Image
              src={"./assets/icons/check-white.svg"}
              alt=""
              width={25.71}
              height={20}
              className="mb-[2px]"
            />
          )}
        </div>
        <p
          className={clsx({
            "absolute -left-[24px] whitespace-nowrap font-semibold": true,
            "text-gray1": state < 2,
            "text-dark": state === 2,
          })}
        >
          Kontaktdaten
        </p>
      </div>
      <div className="max-w-[205px] w-full h-1 bg-body"></div>
      <div className="relative">
        <div
          className={clsx({
            "w-12 h-12 rounded-full bg-body flex items-center justify-center":
              true,
            "bg-yellow": state >= 3,
          })}
        >
          {state <= 3 ? (
            <p
              className={clsx({
                " text-xl font-bold": true,
                "text-gray1": state < 3,
                " text-dark": state >= 3,
              })}
            >
              3
            </p>
          ) : (
            <Image
              src={"./assets/icons/check-white.svg"}
              alt=""
              width={25.71}
              height={20}
              className="mb-[2px]"
            />
          )}
        </div>
        <p
          className={clsx({
            "absolute -left-9 whitespace-nowrap font-semibold": true,
            "text-gray1": state < 3,
            " text-dark": state >= 3,
          })}
        >
          Weitere Angaben
        </p>
      </div>
    </div>
  );
};

export default Stepper;
