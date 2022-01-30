import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import useStore from "../ions/useStore";

const shakeOne = keyframes`
  0%{transform: rotate(0deg)}
25%{transform: rotate(20deg)}
50%{transform: rotate(-13deg); box-shadow: 0px 5px 10px -7px var(--secondary);}
75%{transform: rotate(8deg)}
100%{transform: rotate(0deg)}
`;

const shakeTwo = keyframes`
  0%{transform: rotate(0deg)}
25%{transform: rotate(-20deg)}
50%{transform: rotate(14deg); box-shadow: 0px 5px 10px -7px var(--secondary);}
75%{transform: rotate(-8deg)}
100%{transform: rotate(0deg)}
`;

const Dice = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--secondary);
  box-shadow: 0px 10px 17px -7px var(--secondary);
  transition: background 1s, box-shadow 1s;

  &:hover {
    cursor: pointer;
  }

  ${() => {
    const diceSize = useStore((state) => state.diceSize);
    const shake = useStore((state) => state.shake);
    return css`
      width: ${diceSize}px;
      height: ${diceSize}px;
      animation: ${shake
        ? css`
            ${shakeOne} 0.4s ease-in-out
          `
        : css`
            ${shakeTwo} 0.4s ease-in-out
          `};
    `;
  }}
`;

export default Dice;
