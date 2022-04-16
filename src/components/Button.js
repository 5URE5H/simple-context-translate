import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function Input() {
  const language = useContext(LanguageContext);

  const buttonText = language === "english" ? "Submit" : "Voorleggen";

  return <button className="ui button primary">{buttonText}</button>;
}
