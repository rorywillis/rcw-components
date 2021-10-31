import {
  ThemeProvider,
  extendTheme,
  CSSReset,
  ChakraProvider,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = extendTheme({
  fonts: {},
  styles: {
    global: {
      html: {
        fontSize: ".91rem",
        bgColor: "gray.50",
      },
      body: {
        bgColor: "gray.50",
      },
    },
  },
});

addDecorator((storyFn) => (
  <ChakraProvider theme={theme}>
    <Router>{storyFn()}</Router>
  </ChakraProvider>
));
