import React, { createContext, useState } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en", // Default language
  setLanguage: () => {}, // No-op default function
});

export const LanguageProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 