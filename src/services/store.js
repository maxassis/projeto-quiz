import create from "zustand";

const useStore = create((set) => ({
  numSelect: null,
  questionsRight: 15,
  questionsFail: 20,
  finalResult: [],
  addNum: (num) => set((state) => (state.numSelect = num)),
  contQuestionsRight: () =>
    set((state) => ({ questionsRight: state.questionsRight + 1 })),
  contQuestionsFail: () =>
    set((state) => ({ questionsFail: state.questionsFail + 1 })),

  addQuestion: (question) =>
    set((state) => ({
      finalResult: [...state.finalResult, question],
    })),
  removePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    })),
}));
export default useStore;
