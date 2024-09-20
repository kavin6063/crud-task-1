import { useState } from "react";
import Switch from "../components/shared/Switch";

const Header = ({ text = "Shopping List" }) => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark((prevDark) => !prevDark);
    document.body.classList.toggle("dark");
  };

  const headerClass = `mt-5 mb-4 container mx-auto flex flex-row items-center justify-center rounded-2xl border border-gray-200 w-[300px] bg-[#ffffff] dark:bg-[#020617] shadow-xl`;
  const headerText = `text-3xl font-bold text-center text-[#0c4a6e] dark:text-[#fafaf9] p-5`;

  return (
    <header className={headerClass}>
      <h1 className={headerText}>{text}</h1>
      <button onClick={() => darkModeHandler()}>
        <Switch checked={dark} onChange={darkModeHandler} />
      </button>
    </header>
  );
};

export default Header;
