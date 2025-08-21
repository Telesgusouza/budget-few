import { render, screen } from "@testing-library/react";

import ModalPot from '../../src/components/modals/ModalPot';

function close() {}

describe("Modal pot", () => {
  it("deve renderizar o modal", () => {
    render(<ModalPot onShow={function(show) { close(); }} close={true} />);
    expect(screen.getByText("Edite o Pote")).toBeInTheDocument();
  });
});