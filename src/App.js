import React, { useEffect, useState } from "react";

import "./App.css";

// Context
import { ThemeProvider } from "./App_util/Context/ThemeContext"
import { SkipButtonProvider } from "./App_util/Context/SkipButtonContext"
import { LanguageProvider } from "./App_util/Context/LanguageContext"

// components
import Loading from "./App_components/Loading/Loading";
import Content from './App_components/Content'

// theme
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import themeObject from "./App_util/theme"

const App_theme = createMuiTheme(themeObject)

const App = () => {
  //Loaded website?
  const [loaded, setLoaded] = useState(false);

  // When website is loaded
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <Loading />;
  else
    return (
      <MuiThemeProvider theme={App_theme}>
        <ThemeProvider>
          <SkipButtonProvider>
            <LanguageProvider>
              <Content />
            </LanguageProvider>
          </SkipButtonProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    );
};

export default App;
