import { MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!darkMode) {
      document.querySelector("body").classList.remove("bg-dark", "text-white");
      document.querySelector("body").classList.add("bg-light", "text-dark");
    } else {
      document.querySelector("body").classList.remove("bg-light", "text-dark");
      document.querySelector("body").classList.add("bg-dark", "text-white");
    }
  }, [darkMode]);

  const handleDarkMode = (e) => {
    e.preventDefault();

    setDarkMode(!darkMode);

    console.log("DARK MODE: ", darkMode);
  };

  return (
    <button
      onClick={handleDarkMode}
      className="btn btn-dark d-flex justify-content-center align-items-center"
    >
      <MoonIcon
        className="text-white"
        style={{ width: "1rem", height: "1rem" }}
      />
    </button>
  );
}
