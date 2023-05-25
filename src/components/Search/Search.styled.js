import styled from 'styled-components';
import searchImage from 'images/search.svg';

export const Input = styled.input`
  width: 250px;
  height: 20px;
  padding: 5px;
  padding-right: 45px;

  color: black;
  border: 1px solid #979595;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
`;
export const ButtonSearch = styled.button`
  display: inline-block;
  padding: 0;
  width: 38px;
  height: 32px;
  border: 1px solid #979595;
  margin-left: -38px;
  background-image: url('${searchImage}');
  background-color: rgb(0, 0, 128, 0.15);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.99;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: rgb(226, 124, 46);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;