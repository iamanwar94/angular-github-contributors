import React from "react";

interface HeaderProps {
  title: any;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <p
        className="cursor-pointer"
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
