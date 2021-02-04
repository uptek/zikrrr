export const DOMStrings = {
  content: '.app__content',
};

export const DOMElements = {
  content: document.querySelector(DOMStrings.content),
};

export const updateContent = (content) => {
  console.log(DOMElements, content);

  if (typeof content !== 'string' || !DOMElements.content) {
    return;
  }

  DOMElements.content.innerHTML = content;
};

export default updateContent;
