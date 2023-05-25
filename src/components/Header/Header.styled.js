import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.div`
  justify-content: space-around;
  align-items: center;
  display: block;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 20px;
  margin-top: auto;
  margin-bottom: auto;
  border-bottom: 1px solid #ececec;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  // color: #fff;
  // background: linear-gradient(90deg, #00005d, #414197);
  background: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 30px;
  border-bottom: 1px solid #999999;



  color: #333333;
`;

// export const Box = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

export const HeaderContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Email = styled.p`
  margin-left: 50px;

  font-weight: 600;
`;

export const Link = styled(NavLink)`
  color: #000080;
  fill: #15244f;
  text-decoration: none;
  align-items: center;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Phone = styled.p`
  margin-left: 50px;

  font-weight: 600;
`;

export const Logo = styled.img`
  width: 80px;
  height: 40px;
`;
