import { create } from "zustand";

const useLoginStore = create((set) => ({
  user: null,
  isModalOpen: false,
  login: () => set((state) => ({ user: state, isModalOpen: false })),
  logout: () => set(() => ({ user: null })),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useLoginStore;
