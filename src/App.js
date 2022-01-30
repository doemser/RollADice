import React from "react";

import useStore from "./components/ions/useStore";
import positions from "./components/ions/positioning";
import GlobalStyles from "./components/ions/globalstyles";

import Heading from "./components/molecules/heading";
import Dice from "./components/molecules/dice";
import Point from "./components/atoms/point";
import Settings from "./components/molecules/settings";

const App = () => {
  const rolled = useStore((state) => state.rolled);
  const rollDice = useStore((state) => state.rollDice);
  const shakeIt = useStore((state) => state.shakeIt);

  return (
    <>
      <GlobalStyles />
      <Heading />
      <Dice
        onClick={() => {
          rollDice();
          shakeIt();
        }}
      >
        {positions[rolled].map((position, index) => {
          return <Point key={index} result={position} />;
        })}
      </Dice>
      <Settings />
    </>
  );
};

export default App;
