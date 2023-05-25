import Sym from '../../images/symbol-defs.svg';
import { SocialLink, List, Item, LinksContainer } from './SocialLinks.styled';

export const SocialLinks = () => {
  return (
    <LinksContainer>
      <h2>Lets be in touch</h2>
      <List>
        <Item>
          <SocialLink
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg fill="white" width="20px" height="20px">
              <use href={`${Sym}#icon-instagram-2`} />
            </svg>
          </SocialLink>
        </Item>
        <Item>
          <SocialLink
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg fill="white" width="20px" height="20px">
              <use href={`${Sym}#icon-twitter-1`} />
            </svg>
          </SocialLink>
        </Item>
        <Item>
          <SocialLink
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg fill="white" width="20px" height="20px">
              <use href={`${Sym}#icon-facebook-1`} />
            </svg>
          </SocialLink>
        </Item>
        <Item>
          <SocialLink
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg fill="white" width="20px" height="20px">
              <use href={`${Sym}#icon-linkedin-1`} />
            </svg>
          </SocialLink>
        </Item>
      </List>
    </LinksContainer>
  );
};
