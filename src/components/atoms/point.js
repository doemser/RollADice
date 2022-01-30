import styled from "@emotion/styled";
import useStore from "../ions/useStore";

const Point = styled.div`
  position: absolute;
  border-radius: 50%;
  background: var(--primary);
  transition: top 0.8s, left 0.8s;

  ${({ result }) => {
    const diceSize = useStore((state) => state.diceSize);
    const pointSize = diceSize / 6.6;
    const states = {
      off: { top: `150%`, left: `calc(50% - (${pointSize}px/2))` },
      middleMiddle: {
        top: `calc(50% - (${pointSize}px/2))`,
        left: `calc(50% - (${pointSize}px/2))`
      },
      bottomLeft: {
        top: `calc(80% - (${pointSize}px))`,
        left: `20%`
      },
      bottomRight: {
        top: `calc(80% - (${pointSize}px))`,
        left: `calc(80% - (${pointSize}px))`
      },
      topRight: {
        top: `20%`,
        left: `calc(80% - (${pointSize}px))`
      },
      topLeft: {
        top: `20%`,
        left: `20%`
      },
      leftMiddle: {
        top: `calc(50% - (${pointSize}px/2))`,
        left: `20%`
      },
      rightMiddle: {
        top: `calc(50% - (${pointSize}px/2))`,
        left: `calc(80% - (${pointSize}px))`
      }
    };

    return `
      width: ${pointSize}px;
      height: ${pointSize}px;
      top: ${states[result].top};
      left: ${states[result].left};
    `;
  }}
`;

export default Point;
