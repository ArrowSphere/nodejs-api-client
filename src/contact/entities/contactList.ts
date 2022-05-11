import { AbstractEntity } from '../../abstractEntity';
import { Contact, ContactType } from './contact';

export type ContactListType = Array<ContactType>;

export class ContactList extends AbstractEntity<ContactListType> {
  readonly #contactList: Array<Contact>;

  public constructor(contactListDataInput: Array<ContactType>) {
    super(contactListDataInput);

    this.#contactList = contactListDataInput.map(
      (contact: ContactType) => new Contact(contact),
    );
  }

  get contactList(): Array<Contact> {
    return this.#contactList;
  }

  public toJSON(): ContactListType {
    return this.contactList.map((contact: Contact) => contact.toJSON());
  }
}
