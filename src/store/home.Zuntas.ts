import create from 'zustand';

interface NameUser {
  nameUser: string | null;
  setNameUser: (newName: string) => void;
}

const useUserName = create<NameUser>((set) => {
  // Intenta recuperar el nombre de usuario desde el almacenamiento local
  const storedName = localStorage.getItem('nameUser');

  const initialState: NameUser = {
    nameUser: storedName || null,
    setNameUser: (newName: string) => {
      set({ nameUser: newName });
      // Guarda el nuevo nombre de usuario en el almacenamiento local
      localStorage.setItem('nameUser', newName);
    },
  };

  return initialState;
});

export default useUserName;
