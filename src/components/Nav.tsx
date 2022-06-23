import * as React from 'react';
import * as S from './Nav.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

const Nav = () => {
  const theme: any = useTheme();

  return (
    <S.Container>
      <FontAwesomeIcon icon={faSearch} color={theme.fontColor} />
    </S.Container>
  );
};

export default Nav;
