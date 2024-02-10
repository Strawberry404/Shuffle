
import React, { useState, useEffect } from 'react';
import data from './data.json'; // Ensure this path points to your JSON file

function Random() {
    const [Names, setNames] = useState([]);
    const [Topics, setTopics] = useState([]);

    useEffect(() => {
        // Load and shuffle names and topics from the imported data on component mount
        setNames(shuffleArray([...data.Names])); // Use spread to avoid direct mutation
        setTopics(shuffleArray([...data.Topics])); // Use spread to avoid direct mutation
    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const containerStyle = {
      backgroundColor: '#f2e7fe', // Light purple background
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '20px auto',
      fontFamily: '"Arial", sans-serif',
  };

  const nameStyle = {
      color: '#6a1b9a', // Darker purple
      fontWeight: 'bold',
  };

  const topicStyle = {
      backgroundColor: '#ffeb3b', // Gold background
      padding: '10px',
      borderRadius: '5px',
      margin: '10px 0',
  };

  const topicTitleStyle = {
      color: '#3d087e', // Deep purple
  };
  return (
      <div style={containerStyle}>
          <h2 style={{ color: '#9c27b0' }}>Names and Topics</h2>
          {Names.map((Name, index) => {
              const topic = Topics[index % Topics.length];
              return (
                  <div key={index}>
                      <h3 style={nameStyle}>{Name}</h3>
                      {topic && (
                          <div style={topicStyle}>
                              <strong style={topicTitleStyle}>Topic:</strong> {topic.title}
                              <p>{topic.description}</p>
                          </div>
                      )}
                  </div>
              );
          })}
      </div>
  );
}

export default Random;

