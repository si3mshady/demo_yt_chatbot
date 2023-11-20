import React, { useState } from 'react';
import "./App.css"

const YourComponent = () => {
  const [questionInput, setQuestionInput] = useState('');
  const [responseText, setResponseText] = useState('');

  const sendRequest = async () => {
    try {
      const response = await fetch('http://3.82.204.117:5000/generate_text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_prompt: questionInput,
        }),
      });

      const data = await response.json();

      console.log(data.generated_text[0].generated_text);
      
      // Update the responseTextArea with the received response
      setResponseText(data.generated_text[0].generated_text);
    } catch (error) {
      console.error('Error:', error);
    }

    // Clear the input prompt
    setQuestionInput('');
  };

  const updateResponse = () => {
    // Update the responseTextArea with the current input value
    setResponseText(questionInput);

    // Clear the input prompt
    setQuestionInput('');
  };

  return (
    <div className="container">
      <div className="glassmorphism-box">
        <input
          type="text"
          id="questionInput"
          placeholder="Ask me anything"
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        />
        <button onClick={sendRequest} className="hover-transition">
          Ask
        </button>
        <button onClick={updateResponse} className="hover-transition">
          Test
        </button>
      </div>

      <div className="glassmorphism-box response-box">
        <textarea
          id="responseTextArea"
          // placeholder="Response will appear here"
          onChange={(e) => setResponseText(e.target.value)}
          value={responseText}
        />
      </div>
    </div>
  );
};

export default YourComponent;
