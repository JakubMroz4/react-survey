// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <ul>
      {Array.isArray(list) && list.map((item) => <li>{answersSet[item]}</li>)}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem,
  questions,
  answerTextContent,
}) {
  console.log("Inside AnswersList: ", answerItem);
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>{questions.q1}</em>
          {answerItem.answersList[0] && <em>{answerTextContent.bestOne}</em>}
          {answerItem.answersList[1] && <em>{answerTextContent.bestTwo}</em>}
          {answerItem.answersList[2] && <em>{answerTextContent.bestThree}</em>}
          {answerItem.answersList[3] && <em>{answerTextContent.bestFour}</em>}
        </p>
        <p>
          <em>{questions.q2}</em>
          {answerItem.answersList[4] && <em>{answerTextContent.worstOne}</em>}
          {answerItem.answersList[5] && <em>{answerTextContent.worstTwo}</em>}
          {answerItem.answersList[6] && <em>{answerTextContent.worstThree}</em>}
          {answerItem.answersList[7] && <em>{answerTextContent.worstFour}</em>}
        </p>
        <p>
          <em>{questions.q6}</em>
          {answerItem.answersList[8] && (
            <em>{answerTextContent.spendTimeSwimming}</em>
          )}
          {answerItem.answersList[9] && (
            <em>{answerTextContent.spendTimeBathing}</em>
          )}
          {answerItem.answersList[10] && (
            <em>{answerTextContent.spendTimeChatting}</em>
          )}
          {answerItem.answersList[11] && (
            <em>{answerTextContent.spendTimeNegative}</em>
          )}
        </p>
        <p>
          <em>{questions.q3}</em>
          <span className="answer__line">{answerItem.ductConsistency}</span>
        </p>
        <p>
          <em>{questions.q4}</em>
          <span className="answer__line">{answerItem.duckColor}</span>
        </p>
        <p>
          <em>{questions.q5}</em>
          <span className="answer__line">{answerItem.duckLogo}</span>
        </p>
      </article>
    </li>
  );
}
