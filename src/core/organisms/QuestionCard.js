import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { PageContext } from "../../Context";
import Button from "../atoms/Button";

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: mulish;
	background-image: url("https://images.pexels.com/photos/5477840/pexels-photo-5477840.jpeg?auto=compress&cs=tinysrgb&w=1600");
	height: 100vh;
`
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

export default function QuestionCard() {
  const params = useParams();
  const { question, answer, setAnswer } = useContext(PageContext);
  const currentQuestion = question[params.id];
	const navigate = useNavigate()

  if (!currentQuestion) {
    return <div>No question yet</div>;
  }

  function correctAnswer(res) {
    setAnswer([...answer, res === question[params.id].correct_answer])
		navigate( params.id >= 9 ? "/results" : `/game/${+params.id+1}` )
		console.log("Good")
  }


  return (
    <>
      <Question>
        <Header>
          <h1>{currentQuestion.category}</h1>
          <p>difficulty:{currentQuestion.difficulty}</p>
        </Header>
        <Description>
          <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        </Description>
        <AnswerButtons>
            <Button onClick={() => correctAnswer("True")}>True</Button>
            <Button onClick={() => correctAnswer("False")}>False</Button>
        </AnswerButtons>
      </Question>
    </>
  );
}
