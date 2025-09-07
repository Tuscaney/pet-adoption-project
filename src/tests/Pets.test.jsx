import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Pets from "../pages/Pets.jsx";

// Mock DynamoDB layer
jest.mock("../lib/dynamo.js", () => ({
  listPets: jest.fn(),
  updatePetStatus: jest.fn(),
  deletePet: jest.fn(),
}));

import { listPets, updatePetStatus, deletePet } from "../lib/dynamo.js";

describe("<Pets />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders pets from listPets()", async () => {
    listPets.mockResolvedValueOnce([
      { id: "a1", name: "Bella", age: 3, status: "available" },
      { id: "b2", name: "Max", age: 5, status: "adopted" },
    ]);

    render(<Pets />);

    expect(screen.getByText(/Loading pets…/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Bella")).toBeInTheDocument();
      expect(screen.getByText("Max")).toBeInTheDocument();
    });
  });

  it("toggles a pet status", async () => {
    listPets.mockResolvedValue([{ id: "a1", name: "Bella", age: 3, status: "available" }]);
    updatePetStatus.mockResolvedValue({});

    render(<Pets />);

    await screen.findByText("Bella");

    const toggleBtn = screen.getByRole("button", { name: /Mark as adopted/i });
    fireEvent.click(toggleBtn);

    await waitFor(() => {
      expect(updatePetStatus).toHaveBeenCalledWith("a1", "adopted");
    });
  });

  it("deletes a pet", async () => {
    listPets.mockResolvedValue([{ id: "a1", name: "Bella", age: 3, status: "available" }]);
    deletePet.mockResolvedValue({});

    render(<Pets />);

    await screen.findByText("Bella");

    const delBtn = screen.getByRole("button", { name: /Delete/i });
    fireEvent.click(delBtn);

    await waitFor(() => {
      expect(deletePet).toHaveBeenCalledWith("a1");
    });
  });
});
