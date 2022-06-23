import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import './layout.css';
import Footer from 'components/Footer';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/createStore';
import * as S from './Layout.style';
import { useEffect } from 'react';
import { setDarkTheme } from '../state/action/themeAction';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);

  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeReducer);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setDarkTheme());
    }
  }, []);

  return (
    <ThemeProvider theme={themeState.theme}>
      <S.Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </S.Container>
    </ThemeProvider>
  );
};

export default Layout;
