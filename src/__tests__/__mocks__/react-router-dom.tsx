/*

import React = require('react');
import { MemoryRouter } from 'react-router-dom';

export const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  BrowserRouter: ({ children }: {children: React.ReactNode}) => (
    <MemoryRouter>{children}</MemoryRouter>
  ),
}));

export * from 'react-router-dom';
*/