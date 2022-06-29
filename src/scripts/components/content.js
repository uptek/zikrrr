export const DOMStrings = {
  content: '.app__content',
};

export const DOMElements = {
  content: document.querySelector(DOMStrings.content),
};

export const updateContent = (content) => {
  if (typeof content !== 'string' || !DOMElements.content) {
    return;
  }

  DOMElements.content.innerHTML = content;
  DOMElements.content.title = content;
  DOMElements.content.ariaLabel = content;
};

export default updateContent;
