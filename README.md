A tool to simplify HTML creation and setting up its attributes

usage example
const el = ElementMaker("button", {
id: "submitBtn",
className: "primary",
textContent: "Submit",
attributes: {
"data-role": "submit",
"aria-label": "Submit Form"
}
});

Update 1.0.1
Adjust the attributes parameter processing if they don't necessarily need values

Update 1.0.2
Update function to accept options object and support special attribute types
