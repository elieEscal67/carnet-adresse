import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   private contacts: Contact[] = [];

   getContacts() : Contact[] {
    return this.contacts;
   }

   addContact(contact : Contact){
    return this.contacts.push(contact)

   }

   deleteContact(id : number)  {
    return this.contacts = this.contacts.filter(c => c.id !== c.id);
}
}
