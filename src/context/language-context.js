import { createContext } from 'react';

// The context object lives in its own module so the provider component and the
// useLang hook can each import it without a component file exporting non-components
// (which breaks React Fast Refresh — react-refresh/only-export-components).
export const LanguageContext = createContext(null);
