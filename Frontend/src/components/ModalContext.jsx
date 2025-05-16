import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({
    enquiryModal: false,
    scheduleModal: false,
  });

  const openModal = (modalName) => setModals((prevState) => ({
    ...prevState,
    [modalName]: true,
  }));

  const closeModal = (modalName) => setModals((prevState) => ({
    ...prevState,
    [modalName]: false,
  }));

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
