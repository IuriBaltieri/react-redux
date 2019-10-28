import { createStore } from "redux";

function reducer() {
  return [
    {
      id: 1,
      title: "Aprendendo Redux",
      lessons: [
        { id: 1, title: "Primeira Aula" },
        { id: 2, title: "Segunda Aula" }
      ]
    },
    {
      id: 2,
      title: "Implantando Redux na prática",
      lessons: [
        { id: 3, title: "Terceira Aula" },
        { id: 4, title: "Quarta Aula" }
      ]
    }
  ];
}

const store = createStore(reducer);

export default store;
