import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import './layout.css';
import * as S from './Layout.style';
import Footer from 'components/Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <S.Container>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
};

export default Layout;
