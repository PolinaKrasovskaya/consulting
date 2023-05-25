import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: orange;
  color: white;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const DropDownContainer = styled.div`
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover ${DropDownContent} {
    display: block;
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;

// export const DropDownButton = styled.div`

// width: 100px;
// height: 35px;
//   margin: 0;
//   text-align: center;
//   padding-left: 10px;
//   padding-right: 10px;
//   padding-top: 3px;
//   padding-bottom: 3px;
//   font-size: 14px;
//   // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//   //   0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
//   //   transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

//     &:hover,
//     &:focus{
//       color: #000080;
//       background-color: orange;
//     }

//     &:hover ${Link},
//     &:focus ${Link}{
//       color: #000080;
//       font-size:16px;

//     }
// `;

// export const LinkBox = styled.div`
//   width: 130px;
//   text-align: center;
//   &:hover,
//   &:focus {
//     color: #000080;
//     background-color: orange;
//   }
// `;

export const Link = styled(NavLink)`
font-weight: 400;
font-size: 14px;
line-height: 2;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #000000;
  text-decoration: none;
  align-items: center;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  //   0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  //   transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover,
    &:focus{
      color: #000080;
      background-color: orange;
    }



    }
`;
