import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: mulish;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div`
  text-align: center;
`;
const AnswerButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export default function QuestionCard({difficulty, category, question}) {
  return (
    <Question>
      <Header>
        <h1>{category}</h1>
        <p>difficulty:{difficulty}</p>
      </Header>
      <Description>
        <p>{question}</p>
      </Description>
      <AnswerButtons>
        <Button>True</Button>
        <Button>False</Button>
      </AnswerButtons>
    </Question>
  );
}
