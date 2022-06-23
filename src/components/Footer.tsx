import * as S from './Footer.style';
import React from 'react';

const Footer = () => {
  return (
    <S.Container>
      © {new Date().getFullYear()}{' '}
      <a href="https://github.com/show5116">Dev_Jin</a> &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </S.Container>
  );
};

export default Footer;
