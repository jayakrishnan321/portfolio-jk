# Portfolio - Jayakrishnan U

A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS, featuring smooth animations and a beautiful starfield background.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations and transitions
- **Animated Background**: Dynamic starfield animation for an engaging visual experience
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Components**: 
  - Animated text effects
  - Interactive navigation menu
  - Mobile-friendly hamburger menu
  - Gradient effects and hover animations

## 🚀 Tech Stack

- **React** 19.2.0 - UI library
- **Tailwind CSS** 3.4.18 - Utility-first CSS framework
- **Create React App** - Build tooling and development environment

## 📁 Project Structure

```
portfolio-jayakrishnan/
├── frontend/
│   ├── public/
│   │   └── assets/
│   │       └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AboutMe.js
│   │   │   ├── AnimatedStars.js
│   │   │   ├── AnimatedText.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   └── Projects.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-jayakrishnan
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🎯 Usage

### Development

Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the production-ready files that can be deployed to any static hosting service.

### Run Tests

```bash
npm test
```

## 📦 Components

- **Header**: Fixed navigation header with smooth scroll functionality and mobile menu
- **Hero**: Landing section with animated text and profile image
- **AboutMe**: Personal information and skills section
- **Projects**: Portfolio projects showcase
- **Contact**: Contact form and social links
- **Footer**: Footer with additional information
- **AnimatedStars**: Background starfield animation component
- **AnimatedText**: Text animation component for dynamic typing effects

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying Tailwind classes in component files
2. Updating `tailwind.config.js` for theme customization
3. Editing `src/index.css` for global styles

### Content

Update the content in each component file:
- `Hero.js` - Update name, title, and description
- `AboutMe.js` - Update personal information
- `Projects.js` - Add your projects
- `Contact.js` - Update contact information
