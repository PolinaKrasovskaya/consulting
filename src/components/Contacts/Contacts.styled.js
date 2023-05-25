import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: block;
  margin-bottom: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactsLink = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactsA = styled.a`
  color: #757575;
  fill: #757575;
  text-decoration: none;
  align-items: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2196f3;
    fill: #2196f3;
  }
  font-size: 14px;
  line-height: 1.71;
  color: rgba(255, 255, 255, 0.6);
`;
