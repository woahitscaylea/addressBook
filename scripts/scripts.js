"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    // let newContact = new Contact(name, email, phone, relation);
    // this.contacts.push(newContact);
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
      //for(const contact of this.contacts) {
      //console.log(this.contacts[i]);
    }
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Caylea", "cay@gmail.com", 111, "self");
addressBook.add("Bob", "b@gmail.com", 1, "dude");
addressBook.print();
addressBook.delete("Bob");
addressBook.print();
