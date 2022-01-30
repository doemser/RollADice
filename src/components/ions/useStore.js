import create from "zustand";
import produce from "immer";

const useStore = create((set) => {
  return {
    darkmode: true,
    diceSize: 170,
    rolled: 0,
    shake: false,
    changeDiceSize: (value) => {
      set(
        produce((state) => {
          state.diceSize = value;
        })
      );
    },
    rollDice: () => {
      set(
        produce((state) => {
          state.rolled = Math.ceil(Math.random() * 6);
          console.log(`You rolled: ${state.rolled}`);
        })
      );
    },
    shakeIt: () => {
      set((state) => ({
        shake: !state.shake
      }));
    },
    changeTheme: () => {
      set((state) => ({
        shake: !state.shake
      }));
    }
  };
});

export default useStore;
