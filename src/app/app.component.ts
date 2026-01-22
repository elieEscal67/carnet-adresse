import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Contact } from '../models/contact.model';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactListComponent } from "./contact-list/contact-list.component";           

@Component({
  selector: 'app-root',                
  templateUrl: './app.component.html', 
    standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [ContactFormComponent, ContactListComponent]   
})
export class AppComponent implements OnInit {

  addContact(contact: Contact) {
  this.contactService.addContact(contact);
  this.contacts = this.contactService.getContacts();
}

deleteContact(id: number) {
  this.contactService.deleteContact(id);
  this.contacts = this.contactService.getContacts();
}

  title = 'carnet-adresse';

  contacts: Contact[] = []; // Tableau des contacts, synchronisé avec le service

  // Injection du service via le constructeur
  // Angular fournit automatiquement l'instance unique (singleton) de ContactService
  constructor(private contactService: ContactService) {}

  // Méthode du cycle de vie appelée après la création du composant et l'injection des services
  ngOnInit(): void {
    // On initialise le tableau contacts en récupérant les données depuis le service
    // C'est ici et non dans le constructeur pour respecter le cycle de vie Angular
    this.contacts = this.contactService.getContacts();
  }

  // Méthode appelée par le composant enfant ContactFormComponent via un @Output()
  onContactAdded(contact: Contact) {
    // On ajoute le contact au service (la source de vérité)
    this.contactService.addContact(contact);

    // On met à jour le tableau local pour que la vue se rafraîchisse
    this.contacts = this.contactService.getContacts();
  }

  // Méthode appelée par le composant enfant ContactListComponent via un @Output()
  onContactDelete(id: number) {
    // On supprime le contact du service
    this.contactService.deleteContact(id);

    // On met à jour le tableau local pour que la vue reflète la suppression
    this.contacts = this.contactService.getContacts();
  }
}
