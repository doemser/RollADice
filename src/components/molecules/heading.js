import styled from "@emotion/styled";
import useStore from "../ions/useStore";

const HeadingOne = styled.h1`
  color: var(--secondary);

  ${({ size }) => ({
    fontSize: `${size}em`
  })}
`;

const Span = styled.span`
  background: var(--secondary);
  color: var(--primary);
  padding: 5px 10px;
  border-radius: 7px;
  transition: color 1s, background 1s;
`;

const Heading = () => {
  const diceSize = useStore((state) => state.diceSize);
  const headingSize = diceSize / 88.25;

  return (
    <HeadingOne size={headingSize}>
      roll a <Span>dice!</Span>
    </HeadingOne>
  );
};

export default Heading;
