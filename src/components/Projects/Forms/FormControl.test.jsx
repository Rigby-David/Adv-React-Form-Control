import { render, screen } from '@testing-library/react';
import { 
  TextAreaControl, 
  InputControl, 
  SelectControl, 
  CheckboxControl,
  FormButton
} from './FormControl.jsx';


test('Input Control', () => {
  render(
    <InputControl 
      label="Password"
      name="password"
      required
      placeholder="Password"
    />
  );

  const inputControl = screen.getByLabelText('Password');
  expect(inputControl.placeholder).toBe('Password');
  expect(inputControl.name).toBe('password');
  expect(inputControl.required).toBe(true);
});

test('TextAreaControl', () => {
  render(
    <TextAreaControl
      label="Journal Entry"
      placeholder="how are you feeling today?"

    />
  );

  const textControl = screen.getByPlaceholderText('how are you feeling today?');
  expect(textControl.placeholder).toBe('how are you feeling today?');
});

test('SelectControl', () => {
  render(
    <SelectControl
      label="Select" name="options">
      <option disabled selected value="">Make your choice</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>stuff</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Select');
  expect(selectControl.name).toBe('options');
  expect(selectControl.options.length).toBe(5);

});

test('CheckboxControl', () => {
  render(
    <CheckboxControl
      legend="Hungry?"
      label="Yes"
      // name="accept"
      // required
    />
  );

  const legend = screen.getByText('Hungry?');
  expect(legend).not.toBeNull();
});

test('FormButton', () => {
  render(
    <FormButton>Submit</FormButton>
  );
  
  const button1 = screen.getByRole('button');
  expect(button1.textContent).toBe('Submit');
  const button = screen.getByText('Submit');
  expect(button.textContent).toBe('Submit');
});
