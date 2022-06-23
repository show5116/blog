import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from '../styles/pages/index.style';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <S.Container>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </S.Container>
  </Layout>
);

export default IndexPage;
