import { ContactsList, ContactsLink, ContactsA } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsList>
      <ContactsLink>
        <ContactsA
          href="https://goo.gl/maps/d2nQSNGrm9WTZPLW6"
          target="blank"
          rel="noopener noreferer"
        >
          Navan, Co Meath, Ireland
        </ContactsA>
      </ContactsLink>
      <ContactsLink>
        <ContactsA href="mailto:info@example.com">info@example.com</ContactsA>
      </ContactsLink>
      <ContactsLink>
        <ContactsA href="tel:+353877592347">+353877592347</ContactsA>
      </ContactsLink>
    </ContactsList>
  );
};
