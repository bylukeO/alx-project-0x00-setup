import React from "react";

interface ButtonProps {
  title: string;
  styles?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles, className }) => (
  <button
    className={`px-4 py-2 bg-blue-500 text-white font-semibold ${className}`}
    style={styles}
  >
    {title}
  </button>
);

export default Button;