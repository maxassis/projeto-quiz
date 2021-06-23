import create from "zustand";

const useStore = create((set) => ({
  numSelect: null,
  questionsRight: 0,
  questionsFail: 0,
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
    resetResult: () =>
    set(() => ({
      finalResult: [], questionsRight: 0, questionsFail: 0
    })),
}));
export default useStore;
