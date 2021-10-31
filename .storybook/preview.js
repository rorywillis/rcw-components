import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Router>
        <Story />
      </Router>
    </ChakraProvider>
  ),
];
