export const LanguageToggle = ({ lang, setLang }) => {
  const isRu = lang === "ru";

  const toggleLang = (e) => {
    e.stopPropagation();
    setLang(isRu ? "en" : "ru");
  };

  return (
    <div className="lang-toggle" onClick={toggleLang} title="Switch language">
      <div className="lang-toggle-track">
        <div className={`lang-toggle-thumb ${isRu ? "thumb-ru" : "thumb-en"}`}>{isRu ? "RU" : "EN"}</div>
      </div>
    </div>
  );
};
