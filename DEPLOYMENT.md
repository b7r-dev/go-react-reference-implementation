# Deployment Guide

## 🚀 Vercel Deployment

This application is configured for easy deployment to Vercel. The frontend now includes a mock API service, so it can run standalone without the Go backend.

### Quick Deploy

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Import your repository** (`go-boilerplate`)

5. **Vercel will auto-detect the configuration** from `vercel.json`

6. **Click "Deploy"**

Your app will be live at: `https://your-project-name.vercel.app`

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from the repository root
vercel

# For production deployment
vercel --prod
```

### Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically
- No manual intervention needed!

---

## 📦 Static Site Generation

If you prefer to deploy the static files to another hosting service (Netlify, GitHub Pages, AWS S3, etc.):

### Build the Static Site

```bash
cd frontend
npm install
npm run build
```

The static files will be in `frontend/dist/`

### Deploy to Various Platforms

#### **Netlify**
1. Drag and drop the `frontend/dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=frontend/dist
   ```

#### **GitHub Pages**
1. Push the `dist` folder to a `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Or use `gh-pages` package:
   ```bash
   npm install -g gh-pages
   gh-pages -d frontend/dist
   ```

#### **AWS S3 + CloudFront**
1. Create an S3 bucket configured for static website hosting
2. Upload contents of `frontend/dist` to the bucket
3. Set up CloudFront distribution pointing to the S3 bucket
4. Configure CloudFront to redirect all routes to `index.html` for SPA routing

#### **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select frontend/dist as the public directory
firebase deploy
```

---

## 🔧 Configuration Details

### What's Included

The application now includes:
- ✅ **Mock API Service** (`frontend/src/mockApi.js`) - Simulates the Go backend
- ✅ **Vercel Configuration** (`vercel.json`) - Optimized for Vercel deployment
- ✅ **SPA Routing** - All routes redirect to `index.html` for client-side routing
- ✅ **Dark Mode** - Persisted in localStorage
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Component Library** - Full UI component reference

### Mock API Endpoints

The mock API simulates these endpoints:
- `GET /api/hello` - Welcome message with version info
- `GET /api/users` - List of sample users
- `GET /api/user?id=1` - Get user by ID
- `GET /api/quotes` - List of all quotes
- `GET /api/quote/random` - Random inspirational quote
- `GET /api/health` - Health check

### Switching Back to Real Backend

If you want to use the real Go backend later, simply:

1. Update `frontend/src/App.jsx`:
   ```javascript
   // Replace this:
   import mockApi from './mockApi'
   
   // With fetch calls to your backend:
   const API_BASE_URL = 'https://your-backend-url.com/api'
   ```

2. Update the fetch functions to use `fetch()` instead of `mockApi`

---

## 🎨 Customization

### Update Branding

Edit `frontend/src/App.jsx`:
- Line 130: Change "b7r.dev Boilerplate" to your app name
- Line 132: Update the subtitle
- Line 259: Update footer text

### Add More Mock Data

Edit `frontend/src/mockApi.js`:
- Add more users to `mockUsers` array
- Add more quotes to `mockQuotes` array
- Adjust the `delay()` function to simulate different network speeds

### Styling

The app uses:
- **Tailwind CSS 4** - Utility-first CSS framework
- **Glassmorphism** - Modern glass effect design
- **Dark Mode** - Automatic theme switching
- **Custom Utilities** - Defined in `frontend/src/index.css`

---

## 📊 Performance

The production build is optimized:
- **Minified JavaScript** (~242 KB gzipped to ~71 KB)
- **Minified CSS** (~35 KB gzipped to ~6.5 KB)
- **Code Splitting** - Automatic via Vite
- **Tree Shaking** - Removes unused code
- **Fast Loading** - Optimized for performance

---

## 🐛 Troubleshooting

### Build Fails
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vercel Deployment Issues
- Check that `vercel.json` is in the repository root
- Ensure `frontend/dist` is not in `.gitignore`
- Verify Node.js version compatibility (use Node 18+)

### Routing Issues on Static Hosts
Make sure your hosting provider redirects all routes to `index.html`:
- **Netlify**: Add `_redirects` file with `/* /index.html 200`
- **Apache**: Use `.htaccess` with rewrite rules
- **Nginx**: Configure `try_files $uri /index.html`

---

## 📝 Next Steps

1. **Push to GitHub**: `git push origin main`
2. **Deploy to Vercel**: Follow Option 1 or 2 above
3. **Share your app**: Get your live URL and share it!
4. **Customize**: Make it your own by updating content and styling

---

## 🎉 You're Ready!

Your application is now configured for deployment. Just push to GitHub and deploy to Vercel, or build the static site and deploy anywhere!

For questions or issues, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

