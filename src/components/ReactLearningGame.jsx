import React, { useState, useEffect } from 'react';
import { Play, Code, CheckCircle, XCircle, Star, Trophy, BookOpen, Target } from 'lucide-react';

const ReactLearningGame = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [score, setScore] = useState(0);
    const [userCode, setUserCode] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [completedLevels, setCompletedLevels] = useState([]);
    const [showPreview, setShowPreview] = useState(false);

    const levels = [
        {
            id: 1,
            title: "Hello React World",
            description: "Create a simple component that displays 'Hello, React!'",
            difficulty: "Beginner",
            points: 100,
            starter: `function HelloWorld() {
  return (
    // Your code here
  );
}`,
            solution: `function HelloWorld() {
  return (
    <div>Hello, React!</div>
  );
}`,
            hint: "Use JSX to return a div with the text 'Hello, React!'",
            test: (code) => {
                return code.includes('Hello, React!') && code.includes('return') && code.includes('<div>');
            }
        },
        {
            id: 2,
            title: "Props Master",
            description: "Create a component that accepts and displays a 'name' prop",
            difficulty: "Beginner",
            points: 150,
            starter: `function Greeting(props) {
  return (
    // Display: "Hello, [name]!"
  );
}`,
            solution: `function Greeting(props) {
  return (
    <div>Hello, {props.name}!</div>
  );
}`,
            hint: "Use curly braces {} to display the props.name value",
            test: (code) => {
                return code.includes('props.name') && code.includes('{') && code.includes('}');
            }
        },
        {
            id: 3,
            title: "State Champion",
            description: "Create a counter that increments when clicked",
            difficulty: "Intermediate",
            points: 200,
            starter: `function Counter() {
  // Add state here
  
  return (
    <div>
      <p>Count: {/* display count */}</p>
      <button onClick={/* increment function */}>
        Increment
      </button>
    </div>
  );
}`,
            solution: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
            hint: "Use useState hook to manage the counter state",
            test: (code) => {
                return code.includes('useState') && code.includes('setCount') && code.includes('onClick');
            }
        },
        {
            id: 4,
            title: "List Renderer",
            description: "Render a list of items using map()",
            difficulty: "Intermediate",
            points: 250,
            starter: `function ItemList() {
  const items = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {/* Map over items and render list items */}
    </ul>
  );
}`,
            solution: `function ItemList() {
  const items = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
            hint: "Use items.map() to render each item as an <li> element",
            test: (code) => {
                return code.includes('map') && code.includes('<li') && code.includes('key');
            }
        },
        {
            id: 5,
            title: "Event Handler Hero",
            description: "Create a form that handles input changes",
            difficulty: "Intermediate",
            points: 300,
            starter: `function InputForm() {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input 
        value={text}
        onChange={/* handle change */}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}`,
            solution: `function InputForm() {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}`,
            hint: "Use e.target.value to get the input value in onChange",
            test: (code) => {
                return code.includes('onChange') && code.includes('e.target.value') && code.includes('setText');
            }
        },
        {
            id: 6,
            title: "Effect Master",
            description: "Use useEffect to update document title",
            difficulty: "Advanced",
            points: 350,
            starter: `function TitleUpdater() {
  const [title, setTitle] = useState('React Game');
  
  // Use useEffect to update document.title
  
  return (
    <div>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter page title"
      />
      <p>Page title will update above!</p>
    </div>
  );
}`,
            solution: `function TitleUpdater() {
  const [title, setTitle] = useState('React Game');
  
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <div>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter page title"
      />
      <p>Page title will update above!</p>
    </div>
  );
}`,
            hint: "Use useEffect with title as dependency to update document.title",
            test: (code) => {
                return code.includes('useEffect') && code.includes('document.title') && code.includes('[title]');
            }
        }
    ];

    const currentLevelData = levels[currentLevel];

    useEffect(() => {
        if (currentLevelData) {
            setUserCode(currentLevelData.starter);
            setFeedback('');
            setShowSolution(false);
            setShowPreview(false);
        }
    }, [currentLevel]);

    const checkCode = () => {
        if (currentLevelData.test(userCode)) {
            setFeedback('🎉 Correct! Well done!');
            setScore(score + currentLevelData.points);
            setCompletedLevels([...completedLevels, currentLevel]);
            setTimeout(() => {
                if (currentLevel < levels.length - 1) {
                    setCurrentLevel(currentLevel + 1);
                }
            }, 2000);
        } else {
            setFeedback('❌ Not quite right. Check the hint below!');
        }
    };

    const nextLevel = () => {
        if (currentLevel < levels.length - 1) {
            setCurrentLevel(currentLevel + 1);
        }
    };

    const prevLevel = () => {
        if (currentLevel > 0) {
            setCurrentLevel(currentLevel - 1);
        }
    };

    const resetCode = () => {
        setUserCode(currentLevelData.starter);
        setFeedback('');
        setShowSolution(false);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'text-green-500';
            case 'Intermediate': return 'text-yellow-500';
            case 'Advanced': return 'text-red-500';
            default: return 'text-gray-500';
        }
    };

    const renderPreview = () => {
        try {
            // This is a simplified preview - in a real app you'd use a proper code execution environment
            if (userCode.includes('Hello, React!')) {
                return <div className="p-4 bg-white rounded">Hello, React!</div>;
            }
            if (userCode.includes('props.name')) {
                return <div className="p-4 bg-white rounded">Hello, John!</div>;
            }
            if (userCode.includes('useState') && userCode.includes('count')) {
                return (
                    <div className="p-4 bg-white rounded">
                        <p>Count: 5</p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
                    </div>
                );
            }
            if (userCode.includes('map') && userCode.includes('items')) {
                return (
                    <div className="p-4 bg-white rounded">
                        <ul>
                            <li>Apple</li>
                            <li>Banana</li>
                            <li>Orange</li>
                        </ul>
                    </div>
                );
            }
            return <div className="p-4 bg-gray-100 rounded">Preview will appear here</div>;
        } catch (error) {
            return <div className="p-4 bg-red-100 rounded text-red-600">Error in code</div>;
        }
    };

    if (currentLevel >= levels.length) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen text-white">
                <div className="text-center">
                    <Trophy className="mx-auto mb-4 text-yellow-400" size={80} />
                    <h1 className="text-4xl font-bold mb-4">🎉 Congratulations!</h1>
                    <p className="text-xl mb-6">You've completed all React challenges!</p>
                    <div className="bg-white/10 rounded-lg p-6 mb-6">
                        <p className="text-2xl mb-2">Final Score: {score} points</p>
                        <p className="text-lg">You've mastered: JSX, Props, State, Lists, Events, and Effects!</p>
                    </div>
                    <button
                        onClick={() => {
                            setCurrentLevel(0);
                            setScore(0);
                            setCompletedLevels([]);
                        }}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
                    >
                        Play Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-indigo-900 to-purple-900 min-h-screen text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">React Quest</h1>
                    <p className="text-indigo-200">Learn React by solving coding challenges</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                        <Star className="text-yellow-400" size={20} />
                        <span className="text-xl font-semibold">{score} points</span>
                    </div>
                    <div className="text-sm text-indigo-200">
                        Level {currentLevel + 1} of {levels.length}
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{completedLevels.length}/{levels.length} completed</span>
                </div>
                <div className="w-full bg-indigo-800 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(completedLevels.length / levels.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Challenge Panel */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Target className="text-blue-400" size={24} />
                        <h2 className="text-xl font-bold">{currentLevelData.title}</h2>
                        <span className={`text-sm px-2 py-1 rounded ${getDifficultyColor(currentLevelData.difficulty)}`}>
                            {currentLevelData.difficulty}
                        </span>
                    </div>

                    <p className="text-indigo-200 mb-4">{currentLevelData.description}</p>

                    <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen size={16} />
                            <span className="font-semibold">Hint:</span>
                        </div>
                        <p className="text-sm text-blue-200">{currentLevelData.hint}</p>
                    </div>

                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={checkCode}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            <Play size={16} />
                            Test Code
                        </button>
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            <Code size={16} />
                            Preview
                        </button>
                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            Solution
                        </button>
                        <button
                            onClick={resetCode}
                            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            Reset
                        </button>
                    </div>

                    {feedback && (
                        <div className={`p-3 rounded-lg mb-4 ${feedback.includes('Correct') ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                            }`}>
                            {feedback}
                        </div>
                    )}

                    {showSolution && (
                        <div className="bg-yellow-500/20 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold mb-2">Solution:</h4>
                            <pre className="text-sm bg-black/30 rounded p-3 overflow-x-auto">
                                <code>{currentLevelData.solution}</code>
                            </pre>
                        </div>
                    )}

                    {showPreview && (
                        <div className="bg-gray-500/20 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold mb-2">Preview:</h4>
                            {renderPreview()}
                        </div>
                    )}
                </div>

                {/* Code Editor */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Code Editor</h3>
                        <div className="text-sm text-indigo-200">
                            {currentLevelData.points} points
                        </div>
                    </div>

                    <textarea
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="w-full h-80 bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your React code here..."
                        spellCheck="false"
                    />

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={prevLevel}
                            disabled={currentLevel === 0}
                            className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-lg transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextLevel}
                            disabled={currentLevel === levels.length - 1}
                            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-lg transition-colors"
                        >
                            Next Level
                        </button>
                    </div>
                </div>
            </div>

            {/* Level Progress */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {levels.map((level, index) => (
                        <div
                            key={level.id}
                            className={`p-3 rounded-lg text-center cursor-pointer transition-all ${completedLevels.includes(index)
                                    ? 'bg-green-500/20 text-green-200'
                                    : index === currentLevel
                                        ? 'bg-blue-500/20 text-blue-200'
                                        : 'bg-gray-500/20 text-gray-400'
                                }`}
                            onClick={() => setCurrentLevel(index)}
                        >
                            <div className="flex justify-center mb-1">
                                {completedLevels.includes(index) ? (
                                    <CheckCircle size={20} />
                                ) : index === currentLevel ? (
                                    <Target size={20} />
                                ) : (
                                    <XCircle size={20} />
                                )}
                            </div>
                            <div className="text-xs font-semibold">{level.title}</div>
                            <div className="text-xs">{level.points}pts</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReactLearningGame;