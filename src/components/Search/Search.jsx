import {
  Input,
  ButtonSearch,
  ButtonLabel,
  SearchContainer,
} from './Search.styled';

export const Search = () => {
  return (
    <SearchContainer>
      <Input
        type="e-mail"
        name="user_mail"
        placeholder="what are you looking for?"
      />
      <ButtonSearch type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </ButtonSearch>
    </SearchContainer>
  );
};
