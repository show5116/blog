import * as React from "react";
import * as S from './Side.style';
import * as config from '../../_config';
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

interface ISideProps {
    visible : boolean;
}

const Side = ({visible}:ISideProps) => {

    const {description,author,location,mail,githubName,githubUrl} = config

    return (
        <S.Container
            visible={visible}
        >
            <S.Description>
                {description}
            </S.Description>
            <S.Profile>
                <li>
                    <Link to="/about">
                        <FontAwesomeIcon icon={faUserCircle} />
                        {author}
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {location}
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    {mail}
                </li>
                <li>
                    <a
                        onClick={()=>window.open(githubUrl)}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        {githubName}
                    </a>
                </li>
            </S.Profile>
        </S.Container>
    );
};

export default Side;
