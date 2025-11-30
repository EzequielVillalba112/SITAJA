import styled from "styled-components";

export default function Demo() {
  return (
    <Wrapper>
      <DiagonalBanner>DEMO</DiagonalBanner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

const DiagonalBanner = styled.div`
  position: absolute;
  left: -32px;
  bottom: 70px;
  background: red;
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  pointer-events: auto;
  width: 180px;
  transform: rotate(38deg);
  transform-origin: left bottom;
  text-align: center;
`;
