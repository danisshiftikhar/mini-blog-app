import React from "react";

interface ButtonProps {
  onClickHandler: () => void;
  title: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ onClickHandler, title, color }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${color} px-3 py-2 w-full md:w-1/2 rounded-md cursor-pointer text-white`}
    >
      {title}
    </button>
  );
};

export default Button;
