import * as React from 'react';
import Layout from 'components/layout/Layout';
import * as S from 'styles/pages/about.style';
import Seo from 'components/layout/Seo';

const About = () => {
    return (
        <Layout>
            <Seo title="about me" />
            <S.Container></S.Container>
        </Layout>
    );
};

export default About;
