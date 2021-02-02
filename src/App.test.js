import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Todolist from './components/Todolist';
import Todolist2 from './components/Todolist2';

test('renders Buy Milk task', () => {
  const { getByText } = render(<Todolist />);
  const milk = getByText(/Learn Coding/i);
  expect(milk).toBeInTheDocument();
});

test('renders Do push up task in Todolist2', () => {
  const { getByText } = render(<Todolist2 />);
  const pushup = getByText(/Breakfast/i);
  expect(pushup).toBeInTheDocument();
});

describe("add button and input text", () => {
  it("should add a task", () => {
    const { getByText, getByLabelText } = render(<Todolist />);
    const textInput = getByLabelText("filter-text");
    const addButton = getByText("add");
    fireEvent.change(textInput, {
      target: { value: "eat" },
    });
    fireEvent.click(addButton);
    expect(() => getByText("")).toThrowError();
    expect(getByText("eat")).toBeInTheDocument();
  });
});

describe("add-new-list button and input text", () => {
  it("should add a new list", () => {
    const { getByText, getByLabelText } = render(<App />);
    const textInput = getByLabelText("filter-text-2");
    const addButton = getByText("Add new list");
    fireEvent.change(textInput, {
      target: { value: "New list" },
    });
    fireEvent.click(addButton);
    expect(() => getByText("")).toThrowError();
    expect(getByText("New list")).toBeInTheDocument();
  });
});