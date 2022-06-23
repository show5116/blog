import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import './layout.css';
import Footer from 'components/Footer';
import * as S from './Layout.style';

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

  return (
    <>
      <S.Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </S.Container>
    </>
  );
};

export default Layout;
