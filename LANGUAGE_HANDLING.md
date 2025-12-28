# Language Handling Documentation

## Overview

The website supports **bilingual content** (Serbian and English) with proper SEO implementation and user preference persistence.

## Language Codes

- **Serbian (Default)**: `sr-Latn-RS`
  - `sr` = Serbian language
  - `Latn` = Latin script (not Cyrillic)
  - `RS` = Serbia country code

- **English**: `en`

## Implementation Details

### 1. Language Context (`src/context/LanguageContext.jsx`)

**Features:**
- ✅ Reads initial language from localStorage
- ✅ Defaults to Serbian (`sr`) if no preference saved
- ✅ Updates `<html lang>` attribute when language changes
- ✅ Persists language preference to localStorage
- ✅ Provides translations via `t` object
- ✅ Exposes `toggleLanguage()` function

**How It Works:**
```javascript
// On mount: Read from localStorage or default to 'sr'
const savedLang = localStorage.getItem('preferredLanguage') || 'sr';

// When language changes:
useEffect(() => {
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'sr' ? 'sr-Latn-RS' : 'en';

  // Save to localStorage
  localStorage.setItem('preferredLanguage', lang);
}, [lang]);
```

### 2. SEO Component (`src/components/SEO.jsx`)

The SEO component uses react-helmet-async to dynamically set the `<html lang>` attribute:

```javascript
<Helmet>
  <html lang={lang === 'sr' ? 'sr-Latn-RS' : 'en'} />
  {/* Other meta tags... */}
</Helmet>
```

**Benefits:**
- Proper language declaration for search engines
- Accessibility (screen readers use correct pronunciation)
- SEO signals (Google knows content language)

### 3. Default Language (`index.html`)

```html
<html lang="sr-Latn-RS">
```

This is the initial server-rendered language before React hydrates. It matches the default language in LanguageContext.

### 4. Language Toggle (`src/components/Navbar.jsx`)

The navbar has flag buttons that toggle between languages:

```javascript
<button onClick={toggleLanguage} className="lang-btn">
  {lang === 'sr' ? '🇬🇧' : '🇷🇸'}
</button>
```

- **Serbian (active)**: Shows 🇬🇧 (click to switch to English)
- **English (active)**: Shows 🇷🇸 (click to switch to Serbian)

## User Experience Flow

### First Visit:
1. User lands on site → Default language: **Serbian** (`sr-Latn-RS`)
2. `<html lang="sr-Latn-RS">` is set
3. All content displays in Serbian

### Language Toggle:
1. User clicks flag button in navbar
2. `toggleLanguage()` called → switches `sr` ↔ `en`
3. `useEffect` triggers:
   - Updates `document.documentElement.lang`
   - Saves to `localStorage.setItem('preferredLanguage', 'en')`
4. All content re-renders in English
5. SEO meta tags update (title, description, og:locale, etc.)

### Return Visit:
1. User returns to site
2. `getInitialLanguage()` reads from localStorage
3. Last selected language is restored
4. Content displays in user's preferred language

## SEO Benefits

### 1. **Hreflang Tags**
```html
<link rel="alternate" hreflang="sr" href="https://site.com/?lang=sr"/>
<link rel="alternate" hreflang="en" href="https://site.com/?lang=en"/>
<link rel="alternate" hreflang="x-default" href="https://site.com/"/>
```

Tells Google:
- Serbian version exists at `?lang=sr`
- English version exists at `?lang=en`
- Default (no preference) shows Serbian

### 2. **Open Graph Locale**
```html
<meta property="og:locale" content="sr_RS" />
<!-- or -->
<meta property="og:locale" content="en_US" />
```

Social media platforms (Facebook, LinkedIn) show correct language version when shared.

### 3. **Dynamic Meta Tags**
All SEO tags change with language:
- Title: "Advokatska Kancelarija..." (SR) vs "Law Firm..." (EN)
- Description: Different for each language
- Keywords: Localized keywords

## Testing Language Handling

### Test 1: Default Language
1. Open site in incognito/private mode
2. Verify page is in Serbian
3. Check `document.documentElement.lang` in console → should be `"sr-Latn-RS"`

### Test 2: Language Toggle
1. Click flag button in navbar
2. Verify all content switches to English
3. Check `document.documentElement.lang` → should be `"en"`
4. Check localStorage: `localStorage.getItem('preferredLanguage')` → should be `"en"`

### Test 3: Language Persistence
1. Switch to English
2. Refresh page (F5)
3. Verify page stays in English
4. Close browser and reopen
5. Navigate to site → should still be English

### Test 4: SEO Tags
1. Switch language
2. View page source or inspect `<head>`
3. Verify:
   - `<html lang>` attribute changes
   - `<title>` changes
   - `<meta name="description">` changes
   - `<meta property="og:locale">` changes

## localStorage Structure

```javascript
// Key
"preferredLanguage"

// Values
"sr" // Serbian
"en" // English
```

**Note**: If key doesn't exist, defaults to `"sr"`.

## Accessibility

Proper `lang` attribute helps:
- **Screen readers**: Pronounce text correctly
- **Translation tools**: Auto-detect language
- **Search engines**: Understand content language
- **Browser features**: Spell-check in correct language

## Common Issues & Solutions

### Issue: Language resets on refresh
**Cause**: localStorage not being set
**Fix**: Check browser console for errors in LanguageContext

### Issue: SEO tags not updating
**Cause**: react-helmet-async not working
**Fix**: Verify HelmetProvider wraps App in main.jsx

### Issue: Wrong language shows first, then switches
**Cause**: React hydration delay
**Fix**: This is normal - initial HTML is Serbian, then React reads localStorage and may switch

### Issue: Search engines indexing wrong language
**Cause**: Hreflang tags incorrect
**Fix**: Verify sitemap.xml has proper language variants

## Future Enhancements

### Option 1: URL-based language (/en, /sr)
Currently using state/localStorage. Could use:
- `example.com/` → Serbian
- `example.com/en/` → English

Requires React Router and URL structure changes.

### Option 2: Auto-detect browser language
```javascript
const browserLang = navigator.language; // e.g., "sr-RS", "en-US"
if (browserLang.startsWith('en')) {
  // Default to English
}
```

### Option 3: Add more languages
Easy to add:
1. Add translations to `src/data/content.js`
2. Update language toggle to cycle through options
3. Add new hreflang tags

## Related Files

- `src/context/LanguageContext.jsx` - Core language logic
- `src/components/SEO.jsx` - SEO meta tags
- `src/components/Navbar.jsx` - Language toggle button
- `src/data/content.js` - All translations
- `index.html` - Default HTML lang attribute
- `src/main.jsx` - HelmetProvider setup

---

**Language handling is now complete with:**
✅ localStorage persistence
✅ Dynamic `<html lang>` updates
✅ Proper SEO implementation
✅ Consistent default language (Serbian)
