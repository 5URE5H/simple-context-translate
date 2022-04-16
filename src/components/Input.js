import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function Input() {
  const language = useContext(LanguageContext);

  const labelText = language === "english" ? "Name" : "Naam";

  return (
    <div className="ui field">
      <label>{labelText}</label>
      <input />
    </div>
  );
}
