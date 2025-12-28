# Pre-Deployment Checklist

Complete these tasks before deploying your law firm website to production.

## 🔴 CRITICAL - Must Complete

### 1. Environment Variables (.env)
- [ ] Set EmailJS credentials in `.env` file
- [ ] Test contact form works correctly
- [ ] Verify email delivery

### 2. Domain & URLs
- [ ] Update domain in `src/components/SEO.jsx` (line 7)
- [ ] Update all URLs in `public/sitemap.xml`
- [ ] Update sitemap URL in `public/robots.txt`

### 3. Images & Assets
- [ ] Create Open Graph image (1200x630px) → save as `public/og-image.jpg`
- [ ] Create/replace favicon → `public/favicon.ico`
- [ ] Replace Vite logo with law firm logo
- [ ] Optimize all images (compress, proper alt text)

### 4. Content Verification
- [ ] Review all Serbian translations
- [ ] Review all English translations
- [ ] Verify phone number format: `+381 21 xxx xxx`
- [ ] Verify email address: `info@trifunovic-law.com`
- [ ] Verify office address: `Rade Kondića 116a, 21410 Futog`
- [ ] Verify working hours in content.js

### 5. Legal & Privacy
- [ ] Add Privacy Policy page (required for GDPR)
- [ ] Add Terms of Service (optional but recommended)
- [ ] Add Cookie Notice (required for EU visitors)
- [ ] Verify privacy notice in contact form is accurate

### 6. Testing
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test all navigation links work
- [ ] Test contact form submission
- [ ] Test language toggle works
- [ ] Test all section scroll anchors work
- [ ] Test map loads correctly
- [ ] Test Google Maps / Waze buttons work
- [ ] Verify no console errors

## 🟡 IMPORTANT - Should Complete

### 7. Social Media (if applicable)
- [ ] Create Facebook Business Page
- [ ] Create LinkedIn Company Page
- [ ] Create Instagram Business Account
- [ ] Add social links to `src/components/SEO.jsx` (organizationSchema.sameAs)
- [ ] Add social media links to Footer component

### 8. Analytics & Tracking
- [ ] Set up Google Analytics 4
- [ ] Set up Google Tag Manager (optional)
- [ ] Set up Facebook Pixel (if running ads)
- [ ] Set up conversion tracking for contact form

### 9. Performance
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Optimize images (use WebP format if possible)
- [ ] Enable gzip compression on server
- [ ] Set up CDN (most hosting providers do this automatically)

### 10. Security
- [ ] Ensure HTTPS is enabled
- [ ] Verify SSL certificate is valid
- [ ] Check no API keys are exposed in client code
- [ ] Verify `.env` is in `.gitignore` (already done)

## 🟢 NICE TO HAVE - Optional

### 11. Additional Features
- [ ] Add live chat widget (Tawk.to, Crisp, etc.)
- [ ] Add Google reCAPTCHA to contact form
- [ ] Add client testimonials section (with real reviews)
- [ ] Create actual blog articles
- [ ] Add case studies / success stories

### 12. Documentation
- [ ] Document how to update content
- [ ] Document how to add new blog posts
- [ ] Document how to update team members
- [ ] Create admin guide for non-technical staff

## 📊 Post-Deployment (First Week)

### 13. Search Engine Setup
- [ ] Create Google Business Profile
  - Add business info
  - Verify location (postcard)
  - Add photos
  - Set up messaging
- [ ] Set up Google Search Console
  - Verify ownership
  - Submit sitemap.xml
  - Monitor indexing
- [ ] Set up Bing Webmaster Tools
  - Verify ownership
  - Submit sitemap.xml

### 14. Monitoring
- [ ] Monitor contact form submissions
- [ ] Check Google Search Console for errors
- [ ] Monitor website uptime
- [ ] Check PageSpeed score weekly
- [ ] Monitor Google Business Profile views

### 15. Marketing
- [ ] Share website on social media
- [ ] Update email signature with website link
- [ ] Update business cards with website
- [ ] Add website to legal directories
- [ ] Submit to local business directories

## 🎯 Monthly Tasks (Ongoing)

- [ ] Publish 1-2 blog articles
- [ ] Respond to Google reviews
- [ ] Update business hours if changed
- [ ] Check for broken links
- [ ] Monitor competitor websites
- [ ] Review analytics data
- [ ] Backup website

## ⚠️ Common Deployment Issues

### Contact Form Not Working
- Check EmailJS environment variables are set correctly
- Verify EmailJS service is active
- Check browser console for errors
- Test in incognito mode

### Map Not Loading
- Verify coordinates are correct
- Check Leaflet CSS is loaded
- Test internet connection
- Check browser console for errors

### SEO Meta Tags Not Showing
- Verify react-helmet-async is installed
- Check HelmetProvider wraps App
- Test with Facebook Debugger: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)

### Mobile Layout Broken
- Test viewport meta tag is present
- Check CSS media queries
- Test on real devices, not just browser resize
- Verify no fixed-width elements

## 📞 Deployment Platforms

### Recommended Hosting Options:

**1. Vercel (Easiest, Free)**
- Automatic HTTPS
- CDN included
- Zero config deployment
- Connect GitHub repo
- Set environment variables in dashboard

**2. Netlify (Easy, Free)**
- Similar to Vercel
- Drag & drop deployment
- Form handling built-in
- Set environment variables in dashboard

**3. Traditional Hosting (cPanel, etc.)**
- Upload `dist` folder after `npm run build`
- Configure web server to serve index.html for all routes
- Manually set up HTTPS
- More technical setup required

## 🚀 Deployment Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (if using Vercel CLI)
vercel --prod

# Deploy to Netlify (if using Netlify CLI)
netlify deploy --prod
```

## ✅ Final Verification

Before announcing your website:

1. [ ] Visit website on your phone
2. [ ] Submit a test contact form
3. [ ] Check test email was received
4. [ ] Share on Facebook, check preview looks good
5. [ ] Google your business name, verify site appears
6. [ ] Test all links work
7. [ ] Have a colleague test the website

---

**Ready to Deploy?** 🎉

Once you've completed the critical items (red section), you're ready to go live!

Post-deployment, focus on:
1. Google Business Profile (MOST IMPORTANT)
2. Getting client reviews
3. Publishing quality blog content
4. Building local citations

Good luck with your law firm website! 🏛️
