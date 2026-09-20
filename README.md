# 🚀 Haripriyan V — Professional AI/ML & Software Developer Portfolio

A modern, high-performance personal portfolio built for **Haripriyan V**, a 3rd-year B.E. Computer Science & Engineering (AI & ML) student at V.S.B. Engineering College.

Designed specifically for recruiter usability, internship applications, hackathons, and technical showcase.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5
- **Styling**: Tailwind CSS (Dark Modern Architecture)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel Ready

---

## 📂 Quick Setup & Local Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ How to Update Your Personal Information

All your personal URLs, email, and social accounts can be updated in **ONE** single place:
👉 **`src/config/profile.js`**

```javascript
export const profile = {
  name: "Haripriyan V",
  email: "haripriyan.engg@gmail.com",
  linkedin: "https://www.linkedin.com/in/hari-priyan-v",
  github: "https://github.com/Haripriyan-V",
  leetcode: "https://leetcode.com/u/jzBa8sTZM1/",
  resume: "/Haripriyan_V_Resume.pdf",
};
```

---

## 📄 Updating Your Resume PDF (Zero Code Changes Required)

To update your resume in the future, simply replace the PDF file located at:
```text
public/Haripriyan_V_Resume.pdf
```
Using the exact filename `Haripriyan_V_Resume.pdf`.
The portfolio will automatically serve and download the new resume without requiring any code edits or redeployment configuration changes.

---

## 🌐 Deploy to Vercel

1. Push this folder to your GitHub account as a new repository: `haripriyan-portfolio`.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **"Deploy"**.
4. Your portfolio will be live with full SSL and global CDN!
