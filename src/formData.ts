// check that script has been accessed
let datamessage: string = 'formData script present';
console.log(datamessage);

export module FormValidation {

  // Validates data
    export class ValidateFormInput {
      // validate the type of data from the form inputs
      public async validateInput(
      email: string,
      name: string,
      description: string,
      address: string,
      contactNumber: string
      ):
      Promise<void>{
        // check that the inputs have been supplied
        // log error to console if input hasnt been supplied
        const inputs = [email, name, description, address, contactNumber];
        const inputNames = ['email', 'name', 'description', 'address', 'contact number'];
        const missingInputs: string[] = [];
        
        inputs.forEach((input, index) => {
          if (input === "") {
            missingInputs.push(inputNames[index]);
          }
        });
  
        if (missingInputs.length > 0) {
          console.error(`Failed to supply the following inputs: ${missingInputs.join(', ')}`);
        }

        if (missingInputs.length == 0) {
          console.log(`All inputs supplied: ${inputs.join(', ')}`);
        }
      }
    }

  }
