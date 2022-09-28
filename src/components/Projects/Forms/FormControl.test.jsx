import { render, screen } from '@testing-library/react';
import { TextAreaControl, InputControl } from './FormControl.jsx';


test('Input Control', () => {
  render(
    <InputControl 
      label="Password"
      name="password"
      placeholder="Password"
    />
  );

  const inputControl = screen.getByLabelText('Password');
  expect(inputControl.placeholder).toBe('Password');
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
