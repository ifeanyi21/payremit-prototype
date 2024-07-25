import { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 shadow-md p-4">
      <button
        className="w-full text-left p-2 rounded"
        style={{ backgroundColor: "rgb(37 99 235)", color: "white" }}
        onClick={toggleOpen}
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 p-2 border rounded bg-gray-100">{children}</div>
      )}
    </div>
  );
};

export default Dropdown;
