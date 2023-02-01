import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button";

const HomeContainer = styled.div`
background-image: url("https://images.pexels.com/photos/5477840/pexels-photo-5477840.jpeg?auto=compress&cs=tinysrgb&w=1600");
background-size: cover;
background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 200%;
  height: 100vh;
  font-family: 'Press Start 2P';
`;

const HomeButtons = styled.div`
background-color: orange;
`

const HomeHeading = styled.h1`
max-width: 90vw;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 2.5s steps(20, end),
    blink-caret .75s step-end infinite;

    @keyframes typing {
  from { width: 0 }
  to { width: 40% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
`
const HomeRules = styled.div`
font-family: 'Audiowide';
font-size: 20px;
line-height: 3rem;
text-align: center;
text-decoration: none;
`

export default function Home({number}) {
  const navigate = useNavigate();


  function Move() {
    navigate("/game/0");
  }
  
  return (
    <HomeContainer>
    <HomeHeading>
    <h1>START QUIZ!</h1>
    </HomeHeading>
      <h3>Game Rules</h3>
      <HomeRules>
           <li> Click Yes or No for each question</li>
      <li>You are required to answer at least 5 questions</li>
      <li>Share app Link to atleast 5 whatsApp groups to claim ur prize</li>
      <li>Press the START button to begin</li>
      </HomeRules>
      <HomeButtons>
      <Button onClick={Move}>START GAME</Button>
      </HomeButtons>  
    </HomeContainer>
  );
}
