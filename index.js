function ElementMaker(
  tag,
  { id = null, classNames = null, textContent = null, attributes = {} }
) {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (Array.isArray(classNames)) {
    element.classList.add(...classNames);
  } else if (typeof classNames === "string") {
    element.classList.add(classNames);
  }
  if (textContent) element.textContent = textContent;
  for (let [key, value] of Object.entries(attributes)) {
    if (value === true || value === null) {
      element.setAttribute(key, "");
    } else if (value !== false && value !== undefined) {
      element.setAttribute(key, value);
    }
  }
  return element;
}

export default ElementMaker;
