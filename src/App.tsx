import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Theme from "./theme/Theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <Theme>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      <GlobalStyles />
    </Theme>
  );
}

export default App;
