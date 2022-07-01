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

export const updateContent = (tasbih) => {
  if (typeof tasbih !== 'object' || !DOMElements.content) {
    return;
  }

  DOMElements.container.dataset.id = tasbih.id;

  if (tasbih.content.length) {
    DOMElements.content.innerHTML = tasbih.content;
    DOMElements.content.title = tasbih.content;
    DOMElements.content.ariaLabel = tasbih.content;
  } else {
    DOMElements.content.remove();
  }

  if (tasbih.translations.ur.length) {
    DOMElements.translationUR.innerHTML = tasbih.translations.ur;
    DOMElements.translationUR.title = tasbih.translations.ur;
    DOMElements.translationUR.ariaLabel = tasbih.translations.ur;
  } else {
    DOMElements.translationUR.remove();
  }

  if (tasbih.translations.en.length) {
    DOMElements.translationEN.innerHTML = tasbih.translations.en;
    DOMElements.translationEN.title = tasbih.translations.en;
    DOMElements.translationEN.ariaLabel = tasbih.translations.en;
  } else {
    DOMElements.translationEN.remove();
  }

  console.log(tasbih);
};

export default updateContent;
