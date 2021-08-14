import React from "react";
import PropTypes from "prop-types";

const colors = {
  danger: "bg-danger",
  success: "bg-success",
  warning: "bg-warning",
  primary: "bg-primary",
  secondary: "bg-secondary",
  info: "bg-info",
};

const sizes = {
  xs: "w-24",
  sm: "w-32",
  md: "w-56",
  lg: "w-64",
  xl: "w-80",
  full: "w-full",
};

const positions = {
  left: "self-baseline",
  center: "self-center",
  right: "self-end",
  default: "self-center",
};

const Button = ({
  desktopAlign,
  align,
  desktopSize,
  size,
  color,
  buttonText,
  disabled = false,
  cb = () => {},
}) => {
  const buttonBgColor = colors[color] || colors.primary;
  const buttonSize = sizes[size] || sizes.full;
  const desktopButtonSize = sizes[desktopSize] || size.full;
  const buttonAlign = positions[align] || "center";
  const desktopButtonAlign = positions[desktopAlign] || "center";
  const buttonTextColor = disabled ? "text-gray-300" : "text-white";
  return (
    <button
      disabled={disabled}
      onClick={(e) => cb(e)}
      className={`${buttonBgColor} ${buttonSize} ${buttonAlign} lg:${desktopButtonSize} lg:${desktopButtonAlign} ${buttonTextColor} py-3 px-6 text-white rounded-lg shadow-lg block `}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  buttonText: PropTypes.string,
  cb: PropTypes.func,
  size: PropTypes.string,
  align: PropTypes.string,
  desktopSize: PropTypes.string,
  desktopAlign: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
