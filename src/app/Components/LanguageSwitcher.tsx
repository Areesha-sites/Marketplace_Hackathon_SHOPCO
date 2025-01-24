'use client';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const pathname = usePathname(); // Get the current path
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change language in i18n
    // Update the path with the new language
    const newPath = `/${lang}${pathname.replace(`/${i18n.language}`, '')}`;
    router.push(newPath); // Navigate to the new path with the updated locale
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-3 py-1 ${
          i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        className={`px-3 py-1 ${
          i18n.language === 'ur' ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
        onClick={() => changeLanguage('ur')}
      >
        اردو
      </button>
    </div>
  );
};

export default LanguageSwitcher;