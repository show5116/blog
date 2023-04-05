import * as React from 'react';
import * as S from 'styles/pages/about.style';

import Layout from 'components/layout/Layout';
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
