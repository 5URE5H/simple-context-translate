import "./styles.css";
import { useState } from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";

export default function App() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => handleLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => handleLanguageChange("netherland")}
        />
      </div>
      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
}
