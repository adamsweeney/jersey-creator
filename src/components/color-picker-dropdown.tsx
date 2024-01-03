import React, { useRef, useState, MouseEvent } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type ColorDropdownProps = {
  color: string;
  onColorChange: (color: string) => void;
};

const ColorPickerDropdown = ({ color, onColorChange }: ColorDropdownProps) => {
  // const [selectedColor, setSelectedColor] = useState<string>("#ff0000");
  // Use HTMLInputElement as the type for the ref
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    colorInputRef.current?.click(); // Use optional chaining for safety
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 align-items-center"
        onClick={handleButtonClick}
      >
        <input
          ref={colorInputRef}
          type="color"
          value={color}
          onChange={handleColorChange}
          className="hidden"
          style={{ height: 30, width: 55 }}
        />
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default ColorPickerDropdown;
