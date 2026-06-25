import { createContext, type ReactNode, useContext, useState } from "react";

type FormModalContextType = {
  isModalOpen: boolean;
  isSent: boolean;
  openModal: VoidFunction;
  closeModal: VoidFunction;
  markAsSent: VoidFunction;
};

const FormModalContext = createContext<FormModalContextType>({
  isModalOpen: false,
  isSent: false,
  openModal: () => {},
  closeModal: () => {},
  markAsSent: () => {},
});

export default function FormModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setIsSent(false); // återställ till formulär-vyn nästa gång modalen öppnas
  }

  function markAsSent() {
    setIsSent(true);
  }

  return (
    <>
      <FormModalContext.Provider
        value={{
          isModalOpen: isOpen,
          isSent,
          openModal,
          closeModal,
          markAsSent,
        }}
      >
        {children}
      </FormModalContext.Provider>
    </>
  );
}

export function useFormModal() {
  return useContext(FormModalContext);
}
