// src/tests/AddPet.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddPet from "../pages/AddPet.jsx";

jest.mock("../lib/dynamo.js", () => ({
  addPet: jest.fn(),
}));
import { addPet } from "../lib/dynamo.js";

describe("<AddPet />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("submits a new pet with required fields", async () => {
    addPet.mockResolvedValue({});

    render(<AddPet />);

    const name = screen.getByLabelText(/Name/i);
    const age = screen.getByLabelText(/Age/i);
    const status = screen.getByLabelText(/Status/i);
    const submit = screen.getByRole("button", { name: /Add Pet/i });

    await userEvent.type(name, "Luna");
    await userEvent.clear(age);
    await userEvent.type(age, "2");
    await userEvent.selectOptions(status, "available");
    await userEvent.click(submit);

    expect(addPet).toHaveBeenCalledTimes(1);
    const payload = addPet.mock.calls[0][0];
    expect(payload).toMatchObject({
      name: "Luna",
      age: 2,
      status: "available",
    });
    expect(typeof payload.id).toBe("string");
  });
});
