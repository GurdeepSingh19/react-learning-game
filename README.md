# React Quest 🎮⚛️

*Learn React by solving coding challenges in an interactive game environment*

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## 🚀 Overview

React Quest is an interactive learning game that teaches React.js through hands-on coding challenges. Instead of reading documentation or watching tutorials, you learn by writing actual React code and seeing immediate results.

### ✨ Key Features

- **🎯 Progressive Learning**: 6 levels from beginner to advanced
- **💻 Real Code Challenges**: Write actual React code, not multiple choice
- **⚡ Instant Feedback**: Your code is tested immediately
- **💡 Smart Hints**: Get help when you're stuck
- **👀 Live Preview**: See your code in action
- **🏆 Scoring System**: Earn points and track progress
- **🎨 Beautiful UI**: Modern, responsive interface with smooth animations

## 📚 What You'll Learn

| Level | Topic | Concept | Difficulty |
|-------|-------|---------|------------|
| 1 | **Hello World** | JSX Basics | 🟢 Beginner |
| 2 | **Props Master** | Component Props | 🟢 Beginner |
| 3 | **State Champion** | useState Hook | 🟡 Intermediate |
| 4 | **List Renderer** | Array Mapping | 🟡 Intermediate |
| 5 | **Event Handler** | User Interactions | 🟡 Intermediate |
| 6 | **Effect Master** | useEffect Hook | 🔴 Advanced |

## 🎮 How to Play

1. **Read the Challenge**: Each level presents a specific React concept to implement
2. **Write Code**: Use the built-in editor to write your React component
3. **Test Your Solution**: Click "Test Code" to validate your implementation
4. **Get Feedback**: Receive instant feedback on your code
5. **Use Hints**: Stuck? Check the hint or view the solution
6. **Preview Results**: See your component rendered in real-time
7. **Level Up**: Complete challenges to unlock new levels

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/react-quest.git

# Navigate to project directory
cd react-quest

# Install dependencies
npm install

# Start the development server
npm start
```

The game will open in your browser at `http://localhost:3000`

## 🎯 Game Mechanics

### Scoring System
- **Beginner Levels**: 100-150 points
- **Intermediate Levels**: 200-300 points  
- **Advanced Levels**: 350+ points

### Code Validation
Each challenge includes automated tests that check:
- ✅ Correct syntax and structure
- ✅ Proper use of React concepts
- ✅ Expected functionality
- ✅ Best practices

### Progress Tracking
- Visual progress bar
- Completed level indicators
- Total score accumulation
- Achievement badges

## 🏗️ Technical Architecture

### Built With
- **React 18+** - Core framework
- **Tailwind CSS** - Styling and animations
- **Lucide React** - Icons and UI elements
- **Modern JavaScript** - ES6+ features

### Key Components
```
src/
├── components/
│   ├── ReactLearningGame.jsx   
├── App.jsx
├── index.css
└── main.jsx          
```

### Code Validation Engine
```javascript
// Example validation function
test: (code) => {
  return code.includes('useState') && 
         code.includes('setCount') && 
         code.includes('onClick');
}
```

## 🎨 Customization

### Adding New Levels
Create new challenges in `src/data/levels.js`:

```javascript
{
  id: 7,
  title: "Custom Challenge",
  description: "Your challenge description",
  difficulty: "Intermediate",
  points: 200,
  starter: `// Starting code template`,
  solution: `// Complete solution`,
  hint: "Helpful hint for learners",
  test: (code) => {
    // Validation logic
    return code.includes('expectedPattern');
  }
}
```

### Styling Customization
Modify Tailwind classes in components or add custom CSS:

```css
/* Custom theme colors */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
}
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup
```bash
# Fork the repository
git clone https://github.com/yourusername/react-quest.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# ...

# Commit your changes
git commit -m 'Add amazing feature'

# Push to your branch
git push origin feature/amazing-feature

# Open a Pull Request
```

### Contribution Guidelines
- Follow existing code style and patterns
- Add tests for new features
- Update documentation as needed
- Ensure all levels work correctly
- Test on different screen sizes

### Ideas for Contributions
- 🎯 New React challenges (hooks, context, etc.)
- 🎨 UI/UX improvements
- 🧪 Enhanced code validation
- 📱 Mobile responsiveness
- 🌍 Internationalization
- 🎵 Sound effects and music
- 📊 Analytics and progress tracking

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for beautiful styling
- Lucide for clean icons
- The React community for inspiration

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please open an issue:

1. Check if the issue already exists
2. Provide detailed description
3. Include steps to reproduce (for bugs)
4. Add screenshots if helpful

## 📊 Stats

- **6 Interactive Levels** covering core React concepts
- **1,500+ Points** available to earn
- **100% Hands-on Learning** - no passive content
- **Real Code Validation** - not just syntax checking

## 🎯 Roadmap

### Version 2.0
- [ ] Advanced React patterns (Context, Reducers)
- [ ] TypeScript challenges
- [ ] Team/multiplayer mode
- [ ] Code sharing and community

### Version 2.1
- [ ] Mobile app version
- [ ] Achievement system
- [ ] Leaderboards
- [ ] Custom challenge creator

---

**Ready to master React through gaming?** 🚀

[Play React Quest Now](https://your-deployed-app.com) | [Report Issues](https://github.com/GurdeepSingh19/react-learning-game/issues) | [Contribute](https://github.com/GurdeepSingh19/react-learning-game/blob/main/CONTRIBUTING.md)

---

*Made with ❤️ by Gurdeep, for developers*
