import { Component, EventEmitter, Output, } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,   // ajoute ça si ce n’est pas déjà fait
  imports: [FormsModule],  // <--- FormsModule nécessaire pour ngModel
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
   @Output() contactAdded = new EventEmitter<Contact>()

   
   
    name = "" ;
    email = "";
    phone = "";

    onSubmit() {
      
      const newContact : Contact = {
      id : Date.now(),
      name : this.name,
      email : this.email,
      phone : this.phone }
      
      this.contactAdded.emit(newContact);
      this.name = "";
      this.email = "";
      this.phone = "";
       
    }
    

   


}
