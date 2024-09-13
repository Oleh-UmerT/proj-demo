import clsx from "clsx";

interface ButtonProps {
  lable: string;
  variant: string;
  func?: () => void;
}

const Button: React.FC<ButtonProps> = ({ lable, variant, func }) => {
  return (
    <button
      onClick={func}
      className={clsx({
        "px-5 py-3 bg-yellow text-dark font-bold whitespace-nowrap max-h-[50px] uppercase rounded hover:bg-yellow-hover":
          variant === "default",
        "px-5 py-2.5 bg-transparent text-yellow whitespace-nowrap max-h-[50px] border-2 border-yellow font-bold uppercase rounded hover:bg-yellow hover:text-dark hover:border-transparent":
          variant === "outline",
          "px-5 py-3 bg-green text-white font-bold whitespace-nowrap max-h-[50px] uppercase rounded hover:bg-green-hover":
          variant === "green",
          "px-4 py-3 bg-transparent text-orange border-2 whitespace-nowrap max-h-[50px] border-orange font-bold uppercase rounded hover:bg-orange hover:text-dark hover:border-transparent":
          variant === "outline-orange",
          "px-5 py-3 bg-body text-dark font-bold whitespace-nowrap max-h-[50px] uppercase rounded hover:bg-bar":
          variant === "gray",
          "px-5 py-2.5 text-sm bg-transparent text-dark border-2 whitespace-nowrap max-h-[50px] border-input font-bold uppercase rounded hover:bg-input hover:text-dark hover:border-transparent":
          variant === "outline-gray",
      })}
    >
      {lable}
    </button>
  );
};

export default Button;
