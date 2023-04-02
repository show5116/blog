import * as React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';
import StyledThemeProvider from './src/components/layout/StyledThemeProvider';

export default ({ element }) => {
    const store = createStore();
    return (
        <Provider store={store}>
            <StyledThemeProvider>{element}</StyledThemeProvider>
        </Provider>
    );
};
