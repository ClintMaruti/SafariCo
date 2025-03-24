import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "link";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-blue-600 hover:underline"
      }`}
    >
      {children}
    </button>
  );
};
