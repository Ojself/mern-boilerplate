import React from "react";
import { useSelector } from "react-redux";

const GlobalMessage = () => {
  const globalMessage = useSelector((state) => state.globalMessage);
  const visibility = !!globalMessage?.message ? "visible" : "invisible";
  return (
    <div>
      <p className={`${visibility} text-red-600`}>
        {globalMessage?.message || "-"}
      </p>
    </div>
  );
};

export default GlobalMessage;
