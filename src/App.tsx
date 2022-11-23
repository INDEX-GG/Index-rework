import { GlobalStyles } from "./css/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { themeObj } from "theme/themeObj";
import { ThemeProvider } from "styled-components";
import MainLayout from "layout/MainLayout";
import "normalize.css";

function App() {
  return (
    <ThemeProvider theme={themeObj}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
