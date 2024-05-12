import React, { ReactNode } from "react";

interface Props {
  children: string;
  color?: "dark" | "secondary" | "primary" | "danger";
  functionality: () => void;
}

const Button = ({ children, functionality, color = "dark" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={functionality}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
