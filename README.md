# Portfolio Website - React + Redux Toolkit + Tailwind CSS

A modern, responsive portfolio website built with React.js, Redux Toolkit for state management, and Tailwind CSS for styling. Features smooth animations with Framer Motion and a clean, professional design.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **State Management**: Redux Toolkit for efficient state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions and animations
- **Dark/Light Theme**: Toggle between themes with persistent state
- **Interactive Components**: Dynamic navigation, project filtering, and contact form
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Optimized with Vite for fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react-redux
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── Header.jsx         # Navigation header
│   └── Footer.jsx         # Footer component
├── store/
│   ├── slices/           # Redux slices
│   └── index.js          # Store configuration
├── data/
│   └── portfolioData.js  # Portfolio content and data
├── App.jsx               # Main App component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Adding New Projects
Edit `src/data/portfolioData.js` to add new projects:

```javascript
{
  id: 5,
  image: '/images/new-project.jpg',
  title: 'New Project',
  description: 'Project description...',
  technologies: ['React', 'Node.js'],
  links: {
    preview: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
}
```

### Modifying Content
- **Personal Info**: Update content in `src/data/portfolioData.js`
- **Skills**: Modify the `skillsData` array
- **Experience**: Update the `experiencesData` array
- **Testimonials**: Edit the `testimonialsData` array

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Components**: Customize component styles in individual files

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: Placeholder SVGs for fast loading
- **Animations**: Hardware-accelerated with Framer Motion

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### State Management

The app uses Redux Toolkit with two main slices:

- **uiSlice**: Manages theme, sidebar state, active section, and loading states
- **portfolioSlice**: Handles portfolio data and contact form state

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Yash Kapure**
- Email: yashkapure06@gmail.com
- LinkedIn: [linkedin.com/in/yash-kapure](https://linkedin.com/in/yash-kapure)
- GitHub: [github.com/Yashkapure06](https://github.com/Yashkapure06)

---

Made with ❤️ using React, Redux Toolkit, and Tailwind CSS
