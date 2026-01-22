import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html'
   
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() deleteContact = new EventEmitter<number>();

  delete(id: number) {
    this.deleteContact.emit(id);
  }
}
