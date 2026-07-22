import { useContext } from 'react';
import { LanguageContext } from './language-context';

export const useLang = () => useContext(LanguageContext);
