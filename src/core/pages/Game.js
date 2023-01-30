import React from "react";
import useFetch from "../../useFetch";
import QuestionCard from "../organisms/QuestionCard";

export default function Game() {
  const question = useFetch();
  console.log(question);

  return (
    <>
      {question.map((ques) => (
        <QuestionCard
        category={ques.category}
        difficulty={ques.difficulty}
        question={ques.question}
         />
      ))}
    </>
  );
}
