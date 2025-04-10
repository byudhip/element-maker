function ElementMaker(
  tag,
  { id = null, className = null, textContent = null, attributes = {} }
) {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (className) element.classList.add(className);
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
