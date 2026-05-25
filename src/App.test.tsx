import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';
import { CustomerEditorReturnflowDesk } from './screens';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the customer editor without React form-control warnings', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<CustomerEditorReturnflowDesk />);

    const messages = consoleError.mock.calls.map((args) => args.map(String).join(' ')).join('\n');
    consoleError.mockRestore();

    expect(messages).not.toMatch(/selected.*option/i);
    expect(messages).not.toMatch(/textarea.*children/i);
  });
});
