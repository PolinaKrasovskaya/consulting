import styled from 'styled-components';

export const Button = styled.button`
display: flex;

    align-items: center;
    justify-content: space-around;
  width: 135px;
  border: none;
padding: 0;
  text-align: start;
  background-color: #ffffff;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;

  color: #333333;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    font-size: 15px;

  }
`;

// export const Button = styled.button`
//   width: 90px;
//   height: 46px;
//   background-color: white;
//   background-color: #ffffff;
//   border: 1px solid #333333;
//   // border-radius: 5px;
//   padding: 5px 20px;
//   margin-left: 5px;
//   transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//   0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

//   &:hover,
//   &:focus {
//     background-color: #e27c2e;
//     border: 1px solid #e27c2e;
//   }

// `;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  
`;
