/**
 * @copyright Sebastian Małek 2019
 * This class was only translation from mgr Jerzy Wałaszek C++ implementation to JS with
 * some error checking and useful functions.
 * you can use this freely in your projects, give me feedback if you have ideas about
 * extending this class for new functions
 */


 /** 
  * Class for randomness handling
  * @class
  */
class RandomHandler{
    MT = new Array(624);
    MTi = 0;
    seed = 0;

    /** @constructs RandomHandler#*/
    constructor(){
        this.QuickRandomSetup();
    }

    /**
     * Initialize new random numbers with new seed, use the same seed for the same result
     * @param {number} seed number that generates new draft of random numbers
     * @access public
     */ 
    InitializeRandomWithMT(seed) {
        if(seed === undefined){
            console.log("Error: seed must be defined");
        }
        this.seed = seed;
        let x;

        this.MT[0] = seed;
        for(var i = 1; i<623; i++)
        {
            x = this.MT[i-1];
            x = (23023 * x) & 0xffffffff;
            x = (3 * x) & 0xffffffff;
            this.MT[i] = x;
        }
    }
     /** 
     * Use GetRandom number insted of this function
     * @access private
     */
    MersenneTwister()
    {
        const MA = new Array(0,0x9908b0df);
        let number = 0;
        let i1 = 0;
        let i397 = 0;

        i1 = this.MTi+1;
        if(i1> 623) i1 = 0;
        i397= this.MTi+397; if(i397>623) i397 -= 624;
        number = (this.MT[this.MTi] & 0x80000000) | (this.MT[i1] & 0x7fffffff);
        this.MT[this.MTi] = this.MT[i397] ^ (number>>1) ^ MA[number & 1];
        number = this.MT[this.MTi];
        number ^= number >> 11;
        number ^= (number<<7) & 0x9d2c5680;
        number ^= (number<<15) & 0xefc60000;
        number ^= number >> 18;
        this.MTi = i1;
        return number;
    }

    /** 
     * use this function to quickly setup new random seed 
     * @access public
    */
    QuickRandomSetup()
    {
        this.InitializeRandomWithMT(Date.now());
    }

    /**
     * Generates random number
     * @returns {number} random number
     * @access public
     */ 
    GetRandomNumber(){
        return this.MersenneTwister();
    }

    /**
     * Calculate random number between min and max(use floating point for floating point input)
     * @param {number} min The minimal number that function can return
     * @param {number} max The maximal number that function can return
     * @returns {number} int or float number depending of input min and max
     * @access public
     */ 
    GetRandomNumberBetween(min,max){
        let number = parseFloat(min + (random.MersenneTwister() % (max - min +1)));
        if(isNaN(number)){
            console.error("Error: GetRandomNumberBetween() Accept number parameters only; 0 returned;");
            return 0;
        }
        return number;
    }

    /**
     * use this function to save acctual seed or for equivalent purpose
     * @returns {number} returns number that is actually used as seed
     * @access public
     */
    get seed(){
        return seed;       
    }

    /** 
     * Do not use this function, it's not initializing new seed,
     * if you want to initialize new seed, then use InitializeRandomWithMT(seed)
     * @access private
     */
    set seed(seedValue)
    {
        seed = seedValue;
    }

}

