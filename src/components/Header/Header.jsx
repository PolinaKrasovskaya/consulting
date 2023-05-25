import image from '../../images/logo2.png';
import { Search } from 'components/Search/Search';
import { Navigation } from 'components/Navigation/Navigation';
import { Authorisation } from 'components/Authorisation/Authorisation';
import {
  HeaderBox,
  LogoBox,
  Box,
  HeaderContacts,
  Email,
  Link,
  Phone,
  Logo,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <LogoBox>
        <HeaderContacts>
          <p>Navan, Co Meath, Ireland</p>
          <Email>rest@rest.com</Email>
        </HeaderContacts>
        <Link to="/">
          <Logo src={image} alt="Logo"></Logo>
        </Link>
        <HeaderContacts>
          <Phone>+353877592347</Phone>
          {/* <Search /> */}
          <Authorisation />
        </HeaderContacts>
      </LogoBox>
      <Navigation />
    </HeaderBox>
  );
};
