# Super Hero Company - Warehouse Management System

A modern, professional warehouse management system for manufacturing and selling superhero equipment.

## 🚀 Features

- **Secure Login System** - Multi-user authentication with role-based access
- **Password & Security Settings** - Comprehensive security configuration
- **User Management** - Complete user directory with role assignments
- **Authorization & Permissions** - Role-based access control (Admin, HR, Warehouse, Accounting)
- **Menu Permission Management** - Granular control over menu access per role
- **Activity Logs** - Real-time tracking of user actions and system events
- **Change Log** - Application update history and audit trail
- **Modern UI/UX** - Futuristic design with smooth animations

## 🔐 Login Credentials

### Administrator Account
- **Username:** `admin`
- **Password:** `OK!See001`

### Audit Accounts
- **Username:** `audit01` | **Password:** `P@ssw0rd779`
- **Username:** `audit02` | **Password:** `P@ssw0rd423`
- **Username:** `audit03` | **Password:** `P@ssw0rd221`
- **Username:** `audit04` | **Password:** `P@ssw0rd726`
- **Username:** `audit05` | **Password:** `P@ssw0rd115`

## 📋 User Directory

### Management & Administration
- **Steve Roger** - CEO
- **Tony Stark** - IT Head
- **Bruce Banner** - Developer
- **Scott Lang** - Developer
- **Charles Xavier** - Security Officer
- **Clark Kent** - System Admin

### Human Resources
- **Natalia Romanova** - HR Manager

### Warehouse Operations
- **Bruce Wayne** - Warehouse Manager
- **Dick Grayson** - Warehouse Staff
- **Barbara Gordon** - Warehouse Staff
- **Selina Kyle** - Warehouse Staff

### Accounting & Finance
- **Diana Prince** - Account Manager
- **Peter Parker** - Account Staff
- **Miles Morales** - Account Staff
- **Gwen Stacy** - Account Staff

## 🎨 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Client-side functionality
- **Google Fonts** - Orbitron & Outfit typefaces

## 📦 Installation & Deployment

### Option 1: GitHub Pages

1. Fork or clone this repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Save and wait 2-3 minutes
6. Access at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

### Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire folder
3. Your site is live instantly!
4. Custom domain: Site settings → Change site name

### Option 3: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload folder
3. Deploy with one click
4. Access your live site

### Option 4: Local Testing

1. Download all files
2. Open `index.html` in a web browser
3. No server required!

## 🔒 Security Notes

⚠️ **Important:** This is a demonstration application with client-side authentication only.

- Passwords are stored in the HTML file (visible in source code)
- Suitable for **testing and demonstration purposes only**
- **NOT recommended for production** with sensitive data
- For production use, implement proper backend authentication

### Recommendations:
- Change all passwords after deployment
- Use for internal testing only
- Do not store real sensitive data
- Consider this a prototype/proof-of-concept

## 🛠️ Customization

### Changing Passwords
Edit the `validCredentials` object in the JavaScript section:

```javascript
const validCredentials = {
    'admin': 'YOUR-NEW-PASSWORD',
    'audit01': 'NEW-PASSWORD-1',
    // ... etc
};
```

### Changing Colors
Modify CSS variables in the `:root` section:

```css
:root {
    --primary: #0a0e27;
    --accent: #00d9ff;
    --success: #00ff88;
    /* ... etc */
}
```

### Adding Users
Update the user table in the User Management section with new employee data.

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📄 File Structure

```
superhero-warehouse/
├── index.html          # Main application file
├── README.md           # This file
└── DEPLOYMENT.md       # Detailed deployment guide
```

## 🚧 Future Enhancements

- Backend authentication system
- Database integration
- Real-time inventory tracking
- API integrations
- Mobile app version
- Advanced reporting features
- Export functionality

## 📞 Support

For issues or questions:
1. Check the DEPLOYMENT.md guide
2. Review browser console for errors
3. Ensure JavaScript is enabled
4. Try a different browser

## 📝 License

This is a demonstration project created for Super Hero Company Limited.

## 🎯 Version

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Status:** Demo/Testing

---

**Super Hero Company Limited** - Manufacturing Excellence in Superhero Equipment
