import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Root from "./routes/root";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

test("renders page", () => {
  render(
    <Router>
      <Routes>
        <Route path="/*" element={<Root />} />
      </Routes>
    </Router>
  );
  const linkElement = screen.getByText(/listen to/i);
  expect(linkElement).toBeInTheDocument();
});
