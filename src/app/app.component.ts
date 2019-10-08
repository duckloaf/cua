import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    input = '';
    output = '';
    lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    validateInput() {
        // Only strings can be encoded. Everything else will result in an empty string.
        if(typeof this.input !== 'string') {
            return false;

        // Empty input strings will result in empty output strings
        } else if(this.input === '') {
            return false;

        // If the input is a valid string, and the operation is valid, perform the operation
        } else {
            return true;
        }
    }

    encode() {
        if(!this.validateInput()) {
            this.output = '';
        } else {
            // Reset the output string
            this.output = '';

            // Convert the input string into an array of characters
            const inputItems = this.input.split('');

            // Calculate the cipher. This is the length of the input string as a positive integer
            let cipher = this.input.length;

            // Loop through the inputItems array.
            // If the character is in the uppercase or lowercase arrays, perform the encode operation. Otherwise,
            // return the character unchanged
            let outputArray = inputItems.map((value) => {
                const lowerIndex = this.lowercase.indexOf(value);
                const upperIndex = this.uppercase.indexOf(value);
                let returnValue = value;
                if(lowerIndex > -1) {
                    // This character was a lowercase letter, so translate it
                    let newIndex = lowerIndex + cipher;
                    // Check if the newIndex needs to wrap around to the beginning again
                    if(newIndex >= this.lowercase.length) {
                        newIndex = newIndex - this.lowercase.length;
                    }

                    // return the encoded lower case character
                    returnValue = this.lowercase[newIndex];
                    
                } else if(upperIndex > -1) {
                    // This character was an uppercase letter, so translate it
                    let newIndex = upperIndex + cipher;
                    // Check if the newIndex needs to wrap around to the beginning again
                    if(newIndex >= this.uppercase.length) {
                        newIndex = newIndex - this.uppercase.length;
                    }

                    // return the encoded upper case character
                    returnValue = this.uppercase[newIndex];
                    
                } else {
                    // This is not a letter, so return it un-changed
                    returnValue = value;
                }

                // Bring the cipher 1 step closer to zero
                cipher = cipher - 1;
                return returnValue;
            });

            this.output = outputArray.join('');
        }
    }

    decode() {
        if(!this.validateInput()) {
            this.output = '';
        } else {
            // Reset the output string
            this.output = '';

            // Convert the input string into an array of characters
            const inputItems = this.input.split('');

            // Calculate the cipher. This is the length of the input string as a negative integer
            let cipher = 0 - this.input.length;

            // Loop through the inputItems array.
            // If the character is in the uppercase or lowercase arrays, perform the encode operation. Otherwise,
            // return the character unchanged
            let outputArray = inputItems.map((value) => {
                const lowerIndex = this.lowercase.indexOf(value);
                const upperIndex = this.uppercase.indexOf(value);
                let returnValue = value;
                if(lowerIndex > -1) {
                    // This character was a lowercase letter, so translate it
                    let newIndex = lowerIndex + cipher;
                    // Check if the newIndex needs to wrap around to the beginning again
                    if(newIndex < 0) {
                        newIndex = newIndex + this.lowercase.length;
                    }

                    // return the encoded lower case character
                    returnValue = this.lowercase[newIndex];
                    
                } else if(upperIndex > -1) {
                    // This character was an uppercase letter, so translate it
                    let newIndex = upperIndex + cipher;
                    // Check if the newIndex needs to wrap around to the beginning again
                    if(newIndex < 0) {
                        newIndex = newIndex + this.uppercase.length;
                    }

                    // return the encoded upper case character
                    returnValue = this.uppercase[newIndex];
                    
                } else {
                    // This is not a letter, so return it un-changed
                    returnValue = value;
                }

                // Bring the cipher 1 step closer to zero
                cipher = cipher + 1;
                return returnValue;
            });

            this.output = outputArray.join('');
        }
    }


}
