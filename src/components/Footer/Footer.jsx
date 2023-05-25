import image from '../../images/logo2.png';
import { SocialLinks } from 'components/SocialLinks/SocialLinks';
import { Contacts } from 'components/Contacts/Contacts';
import { Link, Logo, FooterContainer, LinksContainer } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <Link to="/">
          <Logo src={image} alt="Logo"></Logo>
        </Link>
        <Contacts />
      </LinksContainer>
      <SocialLinks />
    </FooterContainer>
  );
};