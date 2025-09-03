/*

import React from "react";
import { render, screen } from "@testing-library/react"; 
import { MemoryRouter } from "react-router-dom";
import ModalPot from "../../components/modals/ModalPot/index";

jest.mock('@assets/icons/eye-slash.png', () => ({
  __esModule: true,
  default: 'mock-eye-slash-image'
}));

jest.mock('@assets/icons/eye.png', () => ({
  __esModule: true,
  default: 'mock-eye-image'
}));

jest.mock('@assets/icons/dollar-sign.svg', () => ({
  __esModule: true,
  default: 'mock-dollar-sign-image'
}));

describe("Modal pot", () => {
  it("deve renderizar o modal", () => {
    render(
      <MemoryRouter>
        <ModalPot
          onShow={() => console.log('Modal status:')}
          close={false}
        />
      </MemoryRouter>
    );
    
    expect(screen.getByText("Edite o Pote")).toBeInTheDocument();
  });
});

*/