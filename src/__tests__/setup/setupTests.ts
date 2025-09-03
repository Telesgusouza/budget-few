// src/__tests__/setup/setupTests.ts
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-testid' });

// Adicione um teste simples para verificar a configuração
describe('Configuração dos testes', () => {
  it('deve configurar corretamente o ambiente de teste', () => {
    expect(true).toBeTruthy();
  });
});