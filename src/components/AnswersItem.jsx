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
  answerItem: {
    username,
    ductConsistency,
    duckColor,
    duckLogo,
    timeSpent,
    review,
  },
  questions,
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>{questions.q3}</em>
          <span className="answer__line">{ductConsistency}</span>
        </p>
        <p>
          <em>{questions.q4}</em>
          <span className="answer__line">{duckColor}</span>
        </p>
        <p>
          <em>{questions.q5}</em>
          <span className="answer__line">{duckLogo}</span>
        </p>
        <p>
          <em>{questions.q6}</em>

          <ItemsList list={timeSpent} />
        </p>

        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
