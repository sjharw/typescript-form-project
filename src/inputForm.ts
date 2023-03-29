// check that script has been accessed
let inputmessage: string = 'inputForm script present';
console.log(inputmessage);

import { FormValidation } from './formData'; // import FormValidation module from formData file
import { saveAs } from 'file-saver'; // import file-saver for saving data to files

export module FormInput{
    export class InputForm extends FormValidation.ValidateFormInput { // extention of class ValidateFormInput from formData module
      public email: string; //  when a class member is declared as public, it can be accessed from anywhere, both inside and outside the class.
      public name: string;
      public description: string;
      public address: string;
      public contactNumber: string;
  
      constructor() {
        super();
        // when user clicks submit, call saveFormData() function
        let btn = document.getElementById("submit");
        btn.addEventListener("click", (e: Event) => this.saveFormData());
      }
      // method that fetches the values of the form fields from HTML
      // and sets them to the corresponding properties of the class
      async getInputValues(): Promise<void> {
        const formData = new FormData(document.getElementById("myForm") as HTMLFormElement);
        this.email = formData.get("email") as string;
        this.name = (<HTMLInputElement>document.getElementById("name")).value;
        this.description = (<HTMLInputElement>document.getElementById("description")).value;
        this.address = (<HTMLInputElement>document.getElementById("address")).value;
        this.contactNumber = (<HTMLInputElement>document.getElementById("contactNumber")).value;
      }
      async writeToFile(): Promise<void> {
        // create a new blob object with the values from the form
        const blob = new Blob(["email address: ", this.email, "name: ", this.name, "description: ", this.description, "address: ", this.address, "phone number: ", this.contactNumber], { type: "text/plain;charset=utf-8" });
        // save the blob to a file using FileSaver.js
        saveAs(blob, "output.txt");
      }
      async saveFormData(): Promise<void> {
        await this.getInputValues(); // get input values
        await this.validateInput(this.email, this.name, this.description, this.address, this.contactNumber); // validate input values
        await this.writeToFile() // save contents of form to text file
      }
    }
  }