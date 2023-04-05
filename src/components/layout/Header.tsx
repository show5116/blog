import * as React from 'react';
import * as S from './Header.style';

import Nav from 'components/layout/Nav';
import Side from 'components/layout/Side';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { useEffect, useState } from 'react';

interface IHeaderProps {
    siteTitle: string;
}

const Header = React.memo(({ siteTitle }: IHeaderProps) => {
    const [, setYPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setYPos((prev) => {
                const currentYPos = window.pageYOffset;
                if (currentYPos > 0) setVisible(prev > currentYPos);
                return currentYPos;
            });
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <S.Container visible={visible}>
            <S.TitleContainer>
                <Link to="/">
                    <S.ImgContainer>
                        <StaticImage
                            src="../images/profile.png"
                            loading="eager"
                            width={64}
                            height={64}
                            quality={95}
                            formats={['auto', 'webp', 'avif']}
                            alt=""
                        />
                    </S.ImgContainer>
                </Link>
                <Link to="/">{siteTitle}</Link>
            </S.TitleContainer>
            <Nav />
            <Side visible={visible} />
        </S.Container>
    );
});

export default Header;
