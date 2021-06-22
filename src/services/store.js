import create from 'zustand'

const useStore = create((set) => ({
  numSelect: null,
  questionsRight : 15,
  questionsFail: 0,
  addNum: (num) => set((state) => (state.numSelect = num)),
  contQuestionsRight: () => set((state) => ({ questionsRight: state.questionsRight + 1 })),
  contQuestionsFail: () => set((state) => ({ questionsFail: state.questionsFail + 1 })),
  
  addQuestao: (questao) =>
    set((state) => ({
      questoes: [...state.questoes, questao],
    })),
  removePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    })),
}))
export default useStore
