import React, { createContext } from "react";

import theme from "./theme";
import CSD from "./components/CSD";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <CSD />
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
