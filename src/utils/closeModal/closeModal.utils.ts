const handleCloseModal = (nameId: string) => {
  (document.getElementById(nameId) as HTMLDialogElement)?.close();
};

export default handleCloseModal;
