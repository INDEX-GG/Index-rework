import { GlobalStyles } from "./css/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { themeObj } from "theme/themeObj";
import { ThemeProvider } from "styled-components";
import "normalize.css";

function App() {
  return (
    <ThemeProvider theme={themeObj}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
