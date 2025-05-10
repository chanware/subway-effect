# 🚇 Subway-Themed Website

A creative Next.js website with an immersive subway theme, featuring a unique navigation experience that mimics a subway journey with stations, moving trains, and dynamic station signs.

![Subway Website Demo](https://raw.githubusercontent.com/username/subway-website/main/public/demo-screenshot.png)

## ✨ Features

- **Subway Line Navigation**: Interactive navigation bar styled as a subway line with stations
- **Moving Train Effect**: Animation simulating train movement between pages
- **Station View Effect**: Looking through a subway car window at station signs
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/subway-website.git
cd subway-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Add your assets**

Place your images in the `public/assets` directory:
- `subway-car-interior.png` - Subway car interior with transparent window
- `station-background.png` - Subway station wall background

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

## 🔧 Customization Guide

### Adjusting the Subway Navigation

The subway line navigation is defined in `src/components/SubwayNav.js`. 

Key customization points:
- **Navigation Items**: Modify the `navItems` array to change station names and positions
- **Line Color**: Change the `bg-yellow-500` class to adjust the subway line color
- **Dot Animation**: Modify the transition timing in the `train-moving` CSS class

### Customizing the Station View

The subway station view is defined in `src/components/SubwayHero.js`.

Important customization points:

```jsx
{/* 
  SIGN POSITIONING - ADJUST THESE VALUES TO MOVE THE SIGN:
  - Vertical position: Change -translate-y-37 to move up (more negative) or down (less negative)
  - Horizontal offset: Change -200px value to move left (more negative) or right (less negative)
*/}
<div 
  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-37
    ${isMoving ? 'blur-md transition-all duration-700' : 'transition-all duration-300'}`}
  style={{ 
    /* Your finely-tuned horizontal offset value */
    marginLeft: '-200px'  
  }}
>
```

For sign appearance:
```jsx
{/* 
  SIGN SIZE & APPEARANCE - ADJUST THESE VALUES TO CHANGE THE SIGN:
  1. Change p-6 for padding (larger number = bigger padding)
  2. Add w-64 (or any width class) after shadow-lg to set a fixed width
  3. Change text-3xl and text-lg to adjust title and subtitle sizes
*/}
<div className="station-sign bg-blue-600 text-white p-6 rounded-md shadow-lg">
```

### Animation Effects

The animation effects are defined in `src/app/globals.css`:

```css
/* Animation for train movement */
@keyframes trainMovement {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(0);
  }
}

.train-moving {
  animation: trainMovement 0.7s ease-in-out;
}
```

### Modifying Page Content

Each page content is located in:
- `src/app/page.js` (Home)
- `src/app/about/page.js`
- `src/app/services/page.js`
- `src/app/portfolio/page.js`
- `src/app/contact/page.js`

## 📄 Project Structure

```
subway-website/
├── public/
│   └── assets/         # Store your subway images here
├── src/
│   ├── app/
│   │   ├── page.js     # Home page (/)
│   │   ├── about/
│   │   │   └── page.js # About page (/about)
│   │   ├── services/
│   │   │   └── page.js # Services page (/services)
│   │   ├── portfolio/
│   │   │   └── page.js # Portfolio page (/portfolio)
│   │   ├── contact/
│   │   │   └── page.js # Contact page (/contact)
│   │   ├── globals.css # Global styles including animations
│   │   └── layout.js   # Main layout with navigation
│   ├── components/
│   │   ├── SubwayNav.js  # Navigation bar component
│   │   └── SubwayHero.js # Hero section with window effect
│   └── contexts/
│       └── NavContext.js # For sharing navigation state
```

## 🧰 Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspiration from subway/metro systems worldwide
- Thanks to all contributors

---

Made by Channing