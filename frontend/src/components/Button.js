import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {Object} props
 * @param {import('@fortawesome/fontawesome-svg-core').IconProp} [props.icon]
 * @param {'success' | 'error' | 'info' | null} [props.variant]
 * @param {boolean} [props.disabled]
 * @param {string} [props.className]
 * @param {React.ReactNode} [props.children]
 * @param {function} [props.onClick]
 * @param {Object} [props.rest]
 */
const Button = ({
  icon,
  children,
  disabled = false,
  className = "",
  variant = null,
  onClick,
  ...rest
}) => {
  const variantStyles = {
    success: "bg-green-600 hover:bg-green-700 active:bg-green-500",
    error: "bg-red-600 hover:bg-red-700 active:bg-red-500",
    info: "bg-blue-600 hover:bg-blue-700 active:bg-blue-500",
  };

  const baseStyle =
    "flex items-center justify-center rounded-md text-white text-sm font-medium transition px-4 py-2 disabled:bg-gray-300 disabled:text-gray-500";

  const variantClass = variant ? variantStyles[variant] : "bg-gray-600 hover:bg-gray-700 active:bg-gray-500";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variantClass} ${className}`}
      {...rest}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
