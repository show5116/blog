import * as React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';
import StyledThemeProvider from './src/components/StyledThemeProvider';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default ({ element }) => {
  const store = createStore();
  const sheet = new ServerStyleSheet();

  return (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <StyledThemeProvider>{element}</StyledThemeProvider>
      </StyleSheetManager>
    </Provider>
  );
};
