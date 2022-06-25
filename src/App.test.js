import { render, screen } from "@testing-library/react";
import Home from "./pages/Home/index.jsx";
import PageNotFound from "./pages/PageNotFound/index.jsx";

test("render home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("render page not found page", () => {
  render(<PageNotFound />);
  const linkElement = screen.getByText(/404 page not found/i);
  expect(linkElement).toBeInTheDocument();
});
