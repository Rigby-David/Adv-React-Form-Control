/* eslint-disable react/prop-types */
function FormControl({ label, children }) {
  return (
    <label>
      {label}
      {children}
    </label>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest}/>
    </FormControl>
    // <label>
  /* Password
      <input name="password" placeholder="Password"></input> */
    //   {label}
    // </label>
  );
}

export function TextAreaControl() {
  return (
    <label>
        Journal Entry
      <textarea placeholder="how are you feeling today?"></textarea>
    </label>
  );
}

