const DOMString = '.app__pause-button';

const pauseMessage = 'Tasbih Paused';

const unpauseMessage = 'Tasbih Unpaused';

const DOMElement = document.querySelector(DOMString);

const keyName = 'pausedIndex';

const updateButton = () => {
  const isPaused = localStorage.getItem(keyName);
  if (isPaused != null) {
    DOMElement.textContent = pauseMessage;
  } else {
    DOMElement.textContent = unpauseMessage;
  }
};

const buttonListener = ({ index }) => {
  const isPaused = localStorage.getItem(keyName);
  if (isPaused != null) localStorage.removeItem(keyName);
  else localStorage.setItem(keyName, index);
  updateButton();
};

export const renderButton = (app) => {
  updateButton();
  DOMElement.addEventListener('click', () => buttonListener(app));
};

export default renderButton;
