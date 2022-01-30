import styled from "@emotion/styled";
import useStore from "../ions/useStore";

const Panel = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px;
  border-radius: 5px;
  background: var(--secondary);
`;

const Input = styled.input`
  cursor: pointer;
  background: var(--secondary);
  color: var(--secondary);
  width: 75px;
  appearance: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: var(--primary);
    border-radius: 20px;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 20px;
    width: 20px;
    background: var(--primary);
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Settings = () => {
  const diceSize = useStore((state) => state.diceSize);
  const changeDiceSize = useStore((state) => state.changeDiceSize);

  return (
    <Panel>
      size
      <Input
        type="range"
        min="100"
        max="250"
        value={diceSize}
        onChange={(event_) => {
          changeDiceSize(event_.target.value);
        }}
      />
    </Panel>
  );
};

export default Settings;
