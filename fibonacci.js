class Fibonacci {
    constructor() {

        this.previous = 0; // Init fibonacci seeds at default value
        this.current = 1;
    }
    
    // Returns the next Fibonacci number in the current sequence
    next() {
        const next = this.previous + this.current; // set next = prev + current
        
        // iterate through - set pointer for prev to current, and current to next
        this.previous = this.current;
        this.current = next;
        
        return(next);
    }
    
    // Initializes sequence with number (seed) to start from
    init(seed) {

        // Reset prev and current so they can be defined with loop
        this.previous = 0;
        this.current = 1;

        while(this.current < seed) {
            this.next(); // loop to find seed

        }

        if (this.current != seed) {
            throw new Error('Not a valid fibonacci number!'); 
        }



    }

    // Returns the Fibonacci number further on in the sequence
    skip(forward) {

        if (forward === 'string') {
            throw new Error('The skip value is invalid; the value must be a positive integer, not a string'); 
        } else if (!Number.isInteger(forward)) {
            throw new Error('The skip value is invalid; the value must be a positive integer'); 
        } else if (forward < 0) {
            throw new Error('The skip value is invalid; the value must be a positive integer'); 
        } else {
            for (let i = 0; i < forward ; i++) { // for number of forward index places, loop and call next
                this.next();
    
            }
        }

        return this.current;

    }
}

module.exports = Fibonacci;