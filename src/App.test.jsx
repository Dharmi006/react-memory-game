import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "./App";
import Memorycard from './Memorycard';
import { test } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
   it("renders correct heading", () => {
    render(<App />);
    // using regex with the i flag allows simpler case-insensitive comparison
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});