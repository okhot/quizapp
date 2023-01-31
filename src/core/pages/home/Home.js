import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import birdie from "../../../assets/birdie.png";
import Button from "../../atoms/Button";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 200%;
`;

export default function Home({number}) {
  const navigate = useNavigate();

  function Move() {
    console.log("clicked")
    navigate(`/Game/${number}`);
  }
  
  return (
    <HomeContainer>
      <h1>Trivia Quiz win a Brand new iPhone</h1>
      <img src={birdie} alt="birdie" />
      <h3>Game Rules</h3>
      <li> Click Yes or No for each question</li>
      <li>You are required to answer at least 5 questions</li>
      <li>Share app Link to atleast 5 whatsApp groups to claim ur prize</li>
      <li>Press the START button to begin</li>
      <Button onClick={Move}>START GAME</Button>
    </HomeContainer>
  );
}
