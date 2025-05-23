A tool to simplify HTML creation and setting up its attributes

Usage example

```js
const passwordInput = ElementMaker("input", {
  id: "password",
  classNames: ["important", "required"],
  attributes: {
    type: "password",
    name: "password",
    minlength: 6,
    maxlength: 16,
    required: true,
    pattern: "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[W_]).{6,16}$/g",
  },
});
```

Update 1.0.1
Adjust the attributes parameter processing if they don't necessarily need values

Update 1.0.2
Update function to accept options object and support special attribute types

Update 1.0.3
Rewrite tooltips message for better UX

Update 1.0.4
Add support for multiple className addition

Update 1.05
Fix inconsistencies between the function, the tooltips text, and readme
