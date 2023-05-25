import styled from 'styled-components';

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #2196f3;
  }
`;

export const List = styled.ul`
  display: inline-flex;
  margin-bottom: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const LinksContainer = styled.div`
  text-align: center;
`;
