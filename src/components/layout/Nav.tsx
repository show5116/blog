import * as React from 'react';
import * as S from './Nav.style';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/createStore';
import { darkTheme } from 'styles/theme';
import { setDarkTheme, setWhiteTheme } from 'state/action/themeAction';

import { color } from 'styles/color';

const Nav = React.memo(() => {
    const themeState = useSelector((state: RootState) => state.themeReducer);
    const dispatch = useDispatch();

    const changeTheme = () => {
        if (themeState.theme === darkTheme) {
            dispatch(setWhiteTheme());
        } else {
            dispatch(setDarkTheme());
        }
    };

    return (
        <S.Container>
            <FontAwesomeIcon
                icon={themeState.theme === darkTheme ? faSun : faMoon}
                color={color.gray}
                onClick={changeTheme}
                size="lg"
            />
            <Link to="/about">
                <FontAwesomeIcon icon={faAddressCard} color={color.gray} size="lg" />
            </Link>
            <FontAwesomeIcon icon={faSearch} color={color.gray} size="lg" />
        </S.Container>
    );
});

export default Nav;
