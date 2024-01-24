import React from "react";

interface Props {
  children: string;
  buttonClick: () => void;
  color?: "primary" | "secondary" | "danger" | "dark";
}
const Button = ({ children, color = "secondary", buttonClick }: Props) => {
  return (
    <div className={`btn btn-${color}`} onClick={buttonClick}>
      {children}
    </div>
  );
};

export default Button;
