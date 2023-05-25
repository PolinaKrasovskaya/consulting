import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: #000080;
  fill: #15244f;
  text-decoration: none;
  align-items: center;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LinksContainer = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 40px;
`;

export const FooterContainer = styled.nav`
  justify-content: space-around;
  align-items: baseline;
  position: relative;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  background: linear-gradient(90deg, #333333, #414197);
  // background-color: #2f303a;
  color: white;
  border-top: 1px solid #ececec;
`;
