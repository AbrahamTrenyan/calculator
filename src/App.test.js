import { render, unmountComponentAtNode, screen } from "react-dom";
import userEvent from '@testing-library/user-event';
import { act } from "react-dom/test-utils";
import Screen from '../src/Components/Screen/Screen.jsx';
import App from './App.js';
const NUMBER_OF_BUTTONS = 19
 test('Should display a 0 on screen at the beggining', () => {
  render(<Screen />);
  const result = screen.getByTestId('result');
  expect(result).toHaveTextContent('0');
});

test('Should render all buttons', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(NUMBER_OF_BUTTONS);
});
test('Should add number to operation when clicked', () => {
  render(<App />);
  const number = screen.getByRole('button', { name: 1 })
  const calc = screen.getByTestId('calc');
  userEvent.click(number);
  expect(calc).toHaveTextContent(1);
}); 



