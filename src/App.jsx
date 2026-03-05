// ==================== STEP 0 ====================
// Import the CSS file for styling this component
import './App.css';
// Import the useState hook from React to manage component state
import { useState } from 'react';

// Define the App component
const App = () => {
  // ==================== STEP 2 ====================
  // Create a state variable 'count' to track the number of samosas
  // 'count' is the current value, 'setCount' is the function to update it
  // Starting value is 0
  const [count, setCount] = useState(0);

  // Create a state variable 'multiplier' to track how many samosas per click
  // 'multiplier' is the current value, 'setMultiplier' is the function to update it
  // Starting value is 1 (one samosa per click)
  const [multiplier, setMultiplier] = useState(1);

  // Define a function that will be called when the samosa is clicked
  // It increases the count by the current multiplier amount
  const updateCount = () => setCount(count + multiplier);

  // ==================== STEP 4 & STEP 5 ====================
  // Doubles the multiplier if the user has at least 10 samosas
  // Also deducts 10 samosas from the count as the cost of the upgrade
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      // Subtract 10 samosas from the count as payment for the upgrade
      setCount(count - 10);
    }
  };

  // Define a function to handle the Party Pack upgrade purchase
  // Multiplies the multiplier by 5 if the user has at least 100 samosas
  // Also deducts 100 samosas from the count as the cost of the upgrade
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      // Subtract 100 samosas from the count as payment for the upgrade
      setCount(count - 100);
    }
  };

  // Define a function to handle the Full Feast upgrade purchase
  // Multiplies the multiplier by 10 if the user has at least 1000 samosas
  // Also deducts 1000 samosas from the count as the cost of the upgrade
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      // Subtract 1000 samosas from the count as payment for the upgrade
      setCount(count - 1000);
    }
  };
  // Return the JSX that will be rendered to the screen
  return (
    // Main container div with className "App"
    <div className="App">
      {/* ==================== STEP 1 ==================== */}
      {/* Header section containing the title and count display */}
      <div className="header">
        {/* Main title of the game */}
        <h1>Samosa Selector</h1>
        
        {/* Display the count with the actual count value from state */}
        <h2>Count: {count}</h2>
      </div>

      {/* ==================== STEP 2 ==================== */}
      {/* Large samosa image that the user will click to increase count */}
      {/* The onClick handler calls updateCount() when the samosa is clicked */}
      <img 
        className="samosa" 
        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200" 
        alt="samosa"
        onClick={updateCount}
      />

      {/* ==================== STEP 3 ==================== */}
      {/* Container for upgrade cards that displays them in a row */}
      <div className="container">
        {/* Double Stuffed Upgrade Card */}
        <div className="upgrade">
          {/* Name of the upgrade */}
          <h3>Double Stuffed 👯‍♀️</h3>
          {/* Description of what this upgrade does */}
          <p>2x per click</p>
          {/* Button to purchase this upgrade - onClick calls buyDoubleStuffed function */}
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>

        {/* Party Pack Upgrade Card */}
        <div className="upgrade">
          {/* Name of the upgrade */}
          <h3>Party Pack 🎉</h3>
          {/* Description of what this upgrade does */}
          <p>5x per click</p>
          {/* Button to purchase this upgrade - onClick calls buyPartyPack function */}
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>

        {/* Full Feast Upgrade Card */}
        <div className="upgrade">
          {/* Name of the upgrade */}
          <h3>Full Feast 👩🏽‍🍳</h3>
          {/* Description of what this upgrade does */}
          <p>10x per click</p>
          {/* Button to purchase this upgrade - onClick calls buyFullFeast function */}
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default App;
