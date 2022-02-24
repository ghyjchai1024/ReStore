import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/AbountPage";

import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Container sx={{ mt: 4 }}>
            <Switch>
              <Route exact path="/catalog" component={Catalog} />
              <Route path="/catalog/:id" component={ProductDetails} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              {/* <Route path="/server-error" component={ServerError} />
              <Route path="/basket" component={BasketPage} />
              <PrivateRoute path="/checkout" component={CheckoutWrapper} />
              <PrivateRoute path="/orders" component={Orders} />
              <PrivateRoute
                roles={["Admin"]}
                path="/inventory"
                component={Inventory}
              /> */}
              {/* <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NotFound} /> */}
            </Switch>
          </Container>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
