import { PageConsumer } from "../../Context";
import QuestionCard from "../organisms/QuestionCard";

export default function Game({ number, moveNumber }) {
  return (
    <>
      <PageConsumer>
        {({ question }) => {
          return <QuestionCard data={question} />;
        }}
      </PageConsumer>
    </>
  );
}
