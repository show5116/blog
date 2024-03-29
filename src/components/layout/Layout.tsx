import * as React from 'react';
import * as S from './Layout.style';
import './layout.css';

import Header from './Header';
import Footer from 'components/layout/Footer';

import { useStaticQuery, graphql } from 'gatsby';

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
