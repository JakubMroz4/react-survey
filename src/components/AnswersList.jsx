import AnswersItem from "./AnswersItem";
import { useEffect } from "react";

export default function AnswersList({ answersList, questions }) {
  console.log("Inside AnswersList: ", answersList);

  return (
    <ul>
      {Array.isArray(answersList) &&
        answersList.map((answerItem, i) => (
          <AnswersItem answerItem={answerItem} key={i} questions={questions} />
        ))}
    </ul>
  );
}
