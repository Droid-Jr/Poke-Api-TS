import create from 'zustand';

interface NameUser {
  nameUser: string | null;
  setNameUser: (newName: string) => void;
}

const useUserName = create<NameUser>((set) => {
  // Intenta recuperar el nombre de usuario desde el almacenamiento local
  const storedName = typeof window !== 'undefined' ? localStorage.getItem('nameUser') : null;

  const initialState: NameUser = {
    nameUser: storedName,
    setNameUser: (newName: string) => {
      set({ nameUser: newName });
      // Guarda el nuevo nombre de usuario en el almacenamiento local
      typeof window !== 'undefined' && localStorage.setItem('nameUser', newName);
    },
  };

  return initialState;
});

export default useUserName;
