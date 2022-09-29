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
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>

      <textarea {...rest}/>
    </FormControl>
  );
}

export function SelectControl({ label, placeholder, children, ...rest }) {
  return (
    <FormControl label={label}>
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>

    </FormControl>
  );
}

export function CheckboxControl({ legend, label, ...rest }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <label>{label}
        <input type="checkbox" {...rest}/>
      </label>
    </fieldset>
  );
}
