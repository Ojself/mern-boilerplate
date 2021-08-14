import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black p-4">
      <h5 className="text-white text-center text-2xl">
        &copy; {new Date().getFullYear()}
      </h5>
    </footer>
  );
};

export default Footer;
