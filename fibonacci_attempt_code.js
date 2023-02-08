class Fibonacci {
    constructor(seed, previousValue, nextValue) {
        // Where does your sequence start by default? 

        this.initialValue = 0;
        this.seed = this.init(seed);
        this.previousValue;
        this.nextValue;


        // 0, 1, 1, 3, 5, 8, etc.
    }

    next() {
        // Return the next Fibonacci number in the current sequence
        throw new Error('Returning next number is not yet supported!');

        // move pointer along +1 and return new value
    }

    init(seed) {
        // Initialize sequence with number to start from

        //let tempSeed = prompt('Enter a seed for the sequence: ');

        if (Number.isInteger(tempSeed)) {
            seed = tempSeed;
            return(seed)
        } else if (tempSeed >= 0) {
            seed = tempSeed;
            return(seed);
        } else {
            throw new Error('Seed is invalid!');
        }
    }

    skip(forward) {
        // Return the Fibonacci number further on in the sequence
        throw new Error('Skipping forward is not yet supported!');

        // move pointer along +x and return new value
    }
}

export default Fibonacci;