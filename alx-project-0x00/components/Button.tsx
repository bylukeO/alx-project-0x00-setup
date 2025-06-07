import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className }) => (
  <button className={`px-4 py-2 bg-blue-500 text-white font-semibold ${className}`}>
    {title}
  </button>
);

export default Button;