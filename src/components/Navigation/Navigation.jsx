import { NavLink } from 'react-router-dom';
import {ReactComponent as Ellipse} from 'images/ellipse.svg';
import {
  Container,
  Link,
  DropDownContainer,
  // LinkBox,
  DropDownContent,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <DropDownContainer>
        {/* <LinkBox> */}
          <Link to="/kitchen">School</Link>
        {/* </LinkBox> */}
        <DropDownContent>
          <NavLink to="kitchen/kitchen1">Kitchen1</NavLink>
          <br />
          <NavLink to="kitchen/kitchen2">Kitchen2</NavLink>
          <br />
          <NavLink to="kitchen/kitchen3">Kitchen3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        {/* <LinkBox> */}
          <Link to="/bar">Services</Link>
        {/* </LinkBox> */}
        <DropDownContent>
          <NavLink to="bar/bar1">Bar1</NavLink>
          <br />
          <NavLink to="bar/bar2">Bar2</NavLink>
          <br />
          <NavLink to="bar/bar3">Bar3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        {/* <LinkBox> */}
          <Link to="/general">Recepies</Link>
        {/* </LinkBox> */}
        <DropDownContent>
          <NavLink to="general/general1">General1</NavLink>
          <br />
          <NavLink to="general/general2">General2</NavLink>
          <br />
          <NavLink to="general/general3">General3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        {/* <LinkBox> */}
          <Link to="/general">Shop</Link>
        {/* </LinkBox> */}
        <DropDownContent>
          <NavLink to="general/general1">General1</NavLink>
          <br />
          <NavLink to="general/general2">General2</NavLink>
          <br />
          <NavLink to="general/general3">General3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        {/* <LinkBox> */}
          <Link to="/general">About us</Link>
        {/* </LinkBox> */}
        <DropDownContent>
          <NavLink to="general/general1">General1</NavLink>
          <br />
          <NavLink to="general/general2">General2</NavLink>
          <br />
          <NavLink to="general/general3">General3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <Ellipse width="5" height="5" />
      <DropDownContainer>
        {/* <LinkBox> */}
          <Link to="/general">Contact us</Link>
        {/* </LinkBox> */}
        <DropDownContent>
          <NavLink to="general/general1">General1</NavLink>
          <br />
          <NavLink to="general/general2">General2</NavLink>
          <br />
          <NavLink to="general/general3">General3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      {/* <DropDownButton>
          <Link to="/kitchen">
            Kitchen
            <br />
            Management
          </Link>
        </DropDownButton>
        <DropDownContent>
          <NavLink to="kitchen/kitchen1">Kitchen1</NavLink>
          <br />
          <NavLink to="kitchen/kitchen2">Kitchen2</NavLink>
          <br />
          <NavLink to="kitchen/kitchen3">Kitchen3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <DropDownContainer>
        <DropDownButton>
          <Link to="/bar">
            Bar
            <br />
            Management
          </Link>
        </DropDownButton>
        <DropDownContent>
          <NavLink to="bar/bar1">Bar1</NavLink>
          <br />
          <NavLink to="bar/bar2">Bar2</NavLink>
          <br />
          <NavLink to="bar/bar3">Bar3</NavLink>
        </DropDownContent>
      </DropDownContainer>
      <DropDownContainer>
        <DropDownButton>
          <Link to="/general">
            General
            <br />
            Management
          </Link>
        </DropDownButton>
        <DropDownContent>
          <NavLink to="general/general1">General1</NavLink>
          <br />
          <NavLink to="general/general2">General2</NavLink>
          <br />
          <NavLink to="general/general3">General3</NavLink>
        </DropDownContent> */}
    </Container>
  );
};
