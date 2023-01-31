import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageConsumer } from "../../Context";
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

export default function QuestionCard({ data }) {
  return (
    <>
      {data.length > 0 && (
        <PageConsumer>
          {({ index, movePage }) => {
            return (
              <Question>
                <Header>
                  <h1>{data[index].category}</h1>
                  <p>difficulty:{data[index].difficulty}</p>
                </Header>
                <Description>
                  <p
                    dangerouslySetInnerHTML={{ __html: data[index].question }}
                  />
                </Description>
                <AnswerButtons>
                  <Link to={index === 9 ? "/results" : `/Game/${index}`}>
                    <Button onClick={movePage}>True</Button>
                    <Button onClick={movePage}>False</Button>
                  </Link>
                </AnswerButtons>
              </Question>
            );
          }}
        </PageConsumer>
      )}
    </>
  );
}
