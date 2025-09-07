import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mock pages that pull in the dynamo layer
jest.mock("../pages/Pets.jsx", () => () => <div data-testid="pets-mock" />);
jest.mock("../pages/AddPet.jsx", () => () => <div data-testid="addpet-mock" />);

import App from "../App.jsx";

test("renders site header", () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Narrow the query to the header's H1 (not the footer text)
  const header = screen.getByRole('banner'); // <header> landmark
  const h1 = within(header).getByRole('heading', { level: 1, name: /Pet Adoption/i });
  expect(h1).toBeInTheDocument();

  // (Optional) also verify the nav links exist
  expect(within(header).getByRole('link', { name: /Home/i })).toBeInTheDocument();
  expect(within(header).getByRole('link', { name: /Pets/i })).toBeInTheDocument();
  expect(within(header).getByRole('link', { name: /Add Pet/i })).toBeInTheDocument();
});



