import styled from "styled-components";

const Buttons = styled.div`
align-items: center;
margin: 0;
width: 100px;
height: 10px;
color: orange ;
margin-top: 30px;
`;

export default function Button({ children, onClick, value }) {
  return (
    <Buttons>
      <button onClick={onClick} value={value}>{children}</button>
    </Buttons>
  );
}
