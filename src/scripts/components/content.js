const DOMStrings = {
  container: '.app__container',
  content: '.app__content',
  translationUR: '.app__translation--ur',
  translationEN: '.app__translation--en',
};

const DOMElements = {
  container: document.querySelector(DOMStrings.container),
  content: document.querySelector(DOMStrings.content),
  translationUR: document.querySelector(DOMStrings.translationUR),
  translationEN: document.querySelector(DOMStrings.translationEN),
};

const renderElement = (element, value) => {
  if (!element) {
    return;
  }

  if (!value.length) {
    element.innerHTML = '';
    return;
  }

  const fadeInSlideInAnimation = [
    { transform: 'translateY(50px)', opacity: '0' },
    { transform: 'translateY(0px)', opacity: '1' },
  ];
  element.animate(fadeInSlideInAnimation, { duration: 600, iterations: 1 });

  /* eslint-disable no-param-reassign */
  element.innerHTML = value;
  element.title = value;
  element.ariaLabel = value;
  /* eslint-disable no-param-reassign */
};

export const updateContent = (tasbih) => {
  if (typeof tasbih !== 'object') {
    return;
  }
  DOMElements.container.dataset.id = tasbih.id;
  renderElement(DOMElements.content, tasbih.content);
  renderElement(DOMElements.translationUR, tasbih.translations.ur);
  // renderElement(DOMElements.translationEN, tasbih.translations.en);
};

export default updateContent;
