import React, { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import ColorPickerDropdown from "../components/color-picker-dropdown";
import Jersey from "../components/jersey";

const IndexPage: React.FC<PageProps> = () => {
  const [jerseyColor, setJerseyColor] = useState<string>("#FFFFFF");
  const [numberColor, setNumberColor] = useState<string>("#000000");
  const [stripeColor, setStripeColor] = useState<string>("#FFFFFF");
  const [collarColor, setCollarColor] = useState<string>("#FFFFFF");
  return (
    <div className="m-5 lg:flex flex-col lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">
          Jersey Creator
        </h2>
      </div>
      <div className="w-full lg:flex flex-col">
        <div className="w-full lg:flex">
          <div className="w-32 m-10">
            <h4 className="text-sm">Jersey Color</h4>
            <ColorPickerDropdown
              color={jerseyColor}
              onColorChange={setJerseyColor}
            />
          </div>
          <div className="w-32 m-10">
            <h4 className="text-sm">Number Color</h4>
            <ColorPickerDropdown
              color={numberColor}
              onColorChange={setNumberColor}
            />
          </div>
          <div className="w-32 m-10">
            <h4 className="text-sm">Stripe Color</h4>
            <ColorPickerDropdown
              color={stripeColor}
              onColorChange={setStripeColor}
            />
          </div>
          <div className="w-32 m-10">
            <h4 className="text-sm">Collar Color</h4>
            <ColorPickerDropdown
              color={collarColor}
              onColorChange={setCollarColor}
            />
          </div>
        </div>
        <div className="w-48 lg:flex flex-col">
          <Jersey
            numberColor={numberColor}
            jerseyColor={jerseyColor}
            stripeColor={stripeColor}
            collarColor={collarColor}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
