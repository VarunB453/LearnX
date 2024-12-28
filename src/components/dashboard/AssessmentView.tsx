import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'What is the primary purpose of VR development?',
    options: [
      'Creating virtual environments',
      'Web development',
      'Mobile app development',
      'Database management'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which component is essential for VR interaction?',
    options: [
      'Keyboard',
      'Motion controllers',
      'Mouse',
      'Touchscreen'
    ],
    correctAnswer: 1
  }
];

function AssessmentView() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    return `${correctAnswers}/${questions.length}`;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {!showResults ? (
        <>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h3>
            <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700/50"
                >
                  <input
                    type="radio"
                    name="answer"
                    checked={selectedAnswers[currentQuestion] === index}
                    onChange={() => handleAnswer(index)}
                    className="text-purple-500 focus:ring-purple-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>
            
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={selectedAnswers.length !== questions.length}
                className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 disabled:opacity-50"
              >
                Show Results
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 disabled:opacity-50"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
          <p className="text-xl">
            Your score: <span className="text-purple-500">{calculateScore()}</span>
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswers([]);
              setShowResults(false);
            }}
            className="mt-6 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600"
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default AssessmentView;