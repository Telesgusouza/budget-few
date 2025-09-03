import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import ModalPot from "...//components/modals/ModalPot";
import ModalPot from "../../components/modals/ModalPot";

// Mocks globais para todos os arquivos estáticos
jest.mock('@assets/icons/eye-slash.png', () => 'mock-eye-slash-image');
jest.mock('@assets/icons/eye.png', () => 'mock-eye-image');
jest.mock('@assets/icons/dollar-sign.svg', () => 'mock-dollar-sign-image');

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