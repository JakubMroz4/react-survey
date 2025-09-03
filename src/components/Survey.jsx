import { useState } from "react";
import AnswersItem from "./AnswersItem";
import { CheckBox } from "./CheckBox";
import TextInput from "./TextInput";
import RadioCheckBox from "./RadioCheckBox";
import AnswersList from "./AnswersList";

function Survey() {
  const [nextId, setNextId] = useState(1);
  const [formData, setFormData] = useState({
    bestOne: false,
    bestTwo: false,
    bestThree: false,
    bestFour: false,
    worstOne: false,
    worstTwo: false,
    worstThree: false,
    worstFour: false,
    ductConsistency: "",
    duckColor: "",
    duckLogo: "",
    spendTimeSwimming: false,
    spendTimeBathing: false,
    spendTimeChatting: false,
    spendTimeNegative: false,
    else: "",
    name: "",
    email: "",
  });

  const [answers, setAnswers] = useState([
    {
      id: 0,
      answersList: [
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
      ],
      ductConsistency: "2",
      duckColor: "3",
      duckLogo: "1",
      else: "bla",
      name: "james",
      email: "james@james",
    },
  ]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = formData;
    submittedData.id = nextId;
    setNextId(nextId + 1);

    console.log(formData);
    setFormData({
      bestOne: false,
      bestTwo: false,
      bestThree: false,
      bestFour: false,
      worstOne: false,
      worstTwo: false,
      worstThree: false,
      worstFour: false,
      ductConsistency: 0,
      duckColor: 0,
      duckLogo: 0,
      spendTimeSwimming: false,
      spendTimeBathing: false,
      spendTimeChatting: false,
      spendTimeNegative: false,
      else: "",
      name: "",
      email: "",
    });

    setAnswers((previousAnswers) => [...previousAnswers, submittedData]);
  };

  // best features
  // worst features
  // rate consistency
  // rate color
  // rate logo
  // spend time how
  // else
  // name
  // email

  const [questions, setQuestions] = useState({
    q1: "What would you say that are the best features of your rubber duck?",
    q2: "What would you say that are the worst features of your rubber duck?",
    q3: "How would you rate your rubber duck consistency?",
    q4: "How would you rate your rubber duck colour?",
    q5: "How would you rate your rubber duck logo?",
    q6: "How would you like to spend time with your rubber duck?",
    q7: "What else do you have to say about your rubber duck?",
  });

  const [answerTextContent, setAnswerTextContent] = useState({
    bestOne: "It's yellow!",
    bestTwo: "It squeaks!",
    bestThree: "It has a logo!",
    bestFour: "It's big!",
    worstOne: "It's yellow!",
    worstTwo: "It squeaks!",
    worstThree: "It has a logo!",
    worstFour: "It's big!",
    spendTimeSwimming: "Swimming",
    spendTimeBathing: "Bathing",
    spendTimeChatting: "Chatting",
    spendTimeNegative: "I don't like to spend time with it",
  });

  return (
    <main className="survey">
      <section className={`survey__list ${formData ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answers}
          questions={questions}
          answerTextContent={answerTextContent}
        />
      </section>
      <section className="survey__form">
        <form onSubmit={handleSubmit}>
          {/* a form should be here */}
          <h4>
            What would you say that are the best features of your rubber duck?
          </h4>
          <ul className="form__group">
            <CheckBox
              name="bestOne"
              textContent="It's yellow!"
              formDataValue={formData.bestOne}
              handleChange={handleChange}
            />
            <CheckBox
              name="bestTwo"
              textContent="It squeaks!"
              formDataValue={formData.bestTwo}
              handleChange={handleChange}
            />
            <CheckBox
              name="bestThree"
              textContent="It has a logo!"
              formDataValue={formData.bestThree}
              handleChange={handleChange}
            />
            <CheckBox
              name="bestFour"
              textContent="It's big!"
              formDataValue={formData.bestFour}
              handleChange={handleChange}
            />
          </ul>

          <h4>
            What would you say that are the worst features of your rubber duck?
          </h4>
          <ul className="form__group">
            <CheckBox
              name="worstOne"
              textContent="It's yellow!"
              formDataValue={formData.worstOne}
              handleChange={handleChange}
            />
            <CheckBox
              name="worstTwo"
              textContent="It squeaks!"
              formDataValue={formData.worstTwo}
              handleChange={handleChange}
            />
            <CheckBox
              name="worstThree"
              textContent="It has a logo!"
              formDataValue={formData.worstThree}
              handleChange={handleChange}
            />
            <CheckBox
              name="worstFour"
              textContent="It's big!"
              formDataValue={formData.worstFour}
              handleChange={handleChange}
            />
          </ul>

          <h4>How would you rate your rubber duck consistency?</h4>
          <ul className="form__group radio">
            <RadioCheckBox
              name="ductConsistency"
              textContent="1"
              value="1"
              formValue={formData.ductConsistency}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="ductConsistency"
              textContent="2"
              value="2"
              formValue={formData.ductConsistency}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="ductConsistency"
              textContent="3"
              value="3"
              formValue={formData.ductConsistency}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="ductConsistency"
              textContent="4"
              value="4"
              formValue={formData.ductConsistency}
              handleChange={handleChange}
            />
          </ul>

          <h4>How would you rate your rubber duck colour?</h4>
          <ul className="form__group radio">
            <RadioCheckBox
              name="duckColor"
              textContent="1"
              value="1"
              formValue={formData.duckColor}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="duckColor"
              textContent="2"
              value="2"
              formValue={formData.duckColor}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="duckColor"
              textContent="3"
              value="3"
              formValue={formData.duckColor}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="duckColor"
              textContent="4"
              value="4"
              formValue={formData.duckColor}
              handleChange={handleChange}
            />
          </ul>

          <h4>How would you rate your rubber duck logo?</h4>
          <ul className="form__group radio">
            <RadioCheckBox
              name="duckLogo"
              textContent="1"
              value="1"
              formValue={formData.duckLogo}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="duckLogo"
              textContent="2"
              value="2"
              formValue={formData.duckLogo}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="duckLogo"
              textContent="3"
              value="3"
              formValue={formData.duckLogo}
              handleChange={handleChange}
            />
            <RadioCheckBox
              name="duckLogo"
              textContent="4"
              value="4"
              formValue={formData.duckLogo}
              handleChange={handleChange}
            />
          </ul>

          <h4>How would you like to spend time with your rubber duck?</h4>
          <ul className="form__group">
            <CheckBox
              name="spendTimeSwimming"
              textContent="Swimming"
              formDataValue={formData.spendTimeSwimming}
              handleChange={handleChange}
            />
            <CheckBox
              name="spendTimeBathing"
              textContent="Bathing"
              formDataValue={formData.spendTimeBathing}
              handleChange={handleChange}
            />
            <CheckBox
              name="spendTimeChatting"
              textContent="Chatting"
              formDataValue={formData.spendTimeChatting}
              handleChange={handleChange}
            />
            <CheckBox
              name="spendTimeNegative"
              textContent="I don't like to spend time with it"
              formDataValue={formData.spendTimeNegative}
              handleChange={handleChange}
            />
          </ul>

          <h6>What else do you have to say about your rubber duck?</h6>
          <TextInput
            name="else"
            formDataValue={formData.else}
            handleChange={handleChange}
          />

          <h6>Put your name here (if you feel like it):</h6>
          <TextInput
            name="name"
            formDataValue={formData.name}
            handleChange={handleChange}
          />

          <h6>Leave ur your email pretty please?</h6>
          <TextInput
            name="email"
            formDataValue={formData.email}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="form__submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default Survey;
