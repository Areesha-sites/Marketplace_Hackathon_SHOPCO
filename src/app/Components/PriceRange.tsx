import { useState } from "react";

const RangeSlider = () => {
  const [leftValue, setLeftValue] = useState(50); // Default $50
  const [rightValue, setRightValue] = useState(200); // Default $200

  const handleLeftChange = (e:any) => {
    const value = parseInt(e.target.value);
    if (value < rightValue) {
      setLeftValue(value);
    }
  };

  const handleRightChange = (e:any) => {
    const value = parseInt(e.target.value);
    if (value > leftValue) {
      setRightValue(value);
    }
  };
  return (
    <div className="slider-container">
      {/* Slider bar */}
      <div className="slider-bar">
        {/* Highlighted black section between the two circles */}
        <div
          className="slider-highlight"
          style={{
            left: `${(leftValue / 200) * 100}%`,
            right: `${100 - (rightValue / 200) * 100}%`,
          }}
        ></div>
      </div>

      {/* Left slider */}
      <input
        type="range"
        min="0"
        max="200"
        value={leftValue}
        className="range-input"
        onChange={handleLeftChange}
      />
      {/* Right slider */}
      <input
        type="range"
        min="0"
        max="200"
        value={rightValue}
        className="range-input"
        onChange={handleRightChange}
      />
{/* Values */}
<div className="slider-values">
        <span>${leftValue}</span>
        <span>${rightValue}</span>
      </div>
    </div>
  );
};

export default RangeSlider
