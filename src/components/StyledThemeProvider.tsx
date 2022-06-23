import * as React from 'react';
import { useEffect } from 'react';
import { setDarkTheme } from '../state/action/themeAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/createStore';
import { ThemeProvider } from 'styled-components';

interface IStyledThemeProvider {
  children: React.ReactNode;
}

const StyledThemeProvider = ({ children }: IStyledThemeProvider) => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeReducer);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setDarkTheme());
    }
  }, []);

  return <ThemeProvider theme={themeState.theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
