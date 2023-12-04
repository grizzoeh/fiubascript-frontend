import React from 'react';
import './ComboBox.css';

type ComboBoxProps = {
  options: string[]; 
  onSelect: (value: string) => void; 
};

export const ComboBox: React.FC<ComboBoxProps> = ({ options, onSelect }) => {
  const handleOptionClick = (value: string) => {
    onSelect(value);
  };

  return (
    <div className="custom-combobox">
      {options.map((option) => (
        <div key={option} onClick={() => handleOptionClick(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};
