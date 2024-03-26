const handleOpenModal = (nameId: string) => {
  (document.getElementById(nameId) as HTMLDialogElement).showModal();
};

export default handleOpenModal;
