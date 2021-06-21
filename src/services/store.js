import create from 'zustand'

const useStore = create((set) => ({
  numSelect: 15,
  questoes: [],
  addNum: (num) => set((state) => (state.numSelect = num)),

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
