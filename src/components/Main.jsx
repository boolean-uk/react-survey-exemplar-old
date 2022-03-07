import { useState } from 'react';
import AnswersList from './AnswersList';
import AnswerForm from './AnswerForm';

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  const submitForm = (e, answers) => {
    e.preventDefault();
    setOpen(true);
    setAnswersList((preArray) => [...preArray, answers]);
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">{<AnswerForm submitForm={submitForm} />}</section>
    </main>
  );
}

export default Main;
