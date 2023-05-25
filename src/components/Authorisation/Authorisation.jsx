import { Box, Button } from './Authorisation.styled';
import {ReactComponent as UserLogo} from 'images/user.svg';

export const Authorisation = () => {
  return (
    <Box>
      <Button type="button"><UserLogo /> Log in / Sign up</Button>
      {/* <Button type="button">Log in</Button>
      <Button type="button">Sign up</Button> */}
    </Box>
  );
};
