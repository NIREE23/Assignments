/**
 * Creates a higher-order function that checks if a given number is less than or equal to a specified cutoff value.
 *@param {number} cutOffValue - The cutoff value to compare against.
 * @returns {function(number): boolean} A function that takes a number as input and returns true if it's less than or equal to the cutoff value, otherwise false.
 */
 test('Creating a higher order function',()=>{
    function createCutOff(cutOffValue){
        return function(number){
            return number<=cutOffValue
        }
    }
    let cutOff100 = createCutOff(100)
    expect(cutOff100(60)).toBe(true)
    expect(createCutOff(100)(80)).toBe(true)//curried functionality is aslo proved
    })
    
    
    /**
     * Rearranges a given string by replacing occurrences of "CraftCode" with "Codecraft".
     *@param {string} str - The input string to be rearranged.
     * @returns {string} The rearranged string with "CraftCode" replaced by "Codecraft".
     */
    test('Rearranging the word in an array',()=>{
        const strings = ["CraftCode is a nice company", "We love CraftCode", "We are working in CraftCode", "Where is CraftCode"]
        const RearrangeString=(str)=>{
            const words=str.split()
            const RearrangedWord=words.map((word)=>{
              if(word=="CraftCode"){
                return "Codecraft"
              }else{return word} 
            }) 
            return RearrangedWord.join("")
        }
    })
    
    
    /**
     * Modifies and filters the input text by increasing the quantity of items not containing '4' in their names by 10.
     *
     * @param {string} inputText - The input text containing items and their quantities.
     * @returns {string} The modified text with increased quantities for eligible items.
     */
    test('Modifying the items', () => {
      function filterAndModify(inputText) {
        const lines = inputText.split('\n');
        const modifiedLines = [];
      for (const line of lines) {
        if (!line.includes('4')) {
          const [item, qty] = line.split(' '); 
          const newQty = parseInt(qty) + 10;   
          modifiedLines.push(`${item} ${newQty}`);
        } else {
         modifiedLines.push(line);
        }
      } 
      const result = modifiedLines.join('\n');
      return result;
      }
      
    const purchases = `items qty
    apple 24
    mango 50
    guava 42
    onion 31
    water 10`
    const c=`mango 60
    onion 41
    water 20`
    expect(filterAndModify(purchases)).toBe(c);
    // console.log(filterAndModify(filterAndModify(purchases)))
    })
    
    
    /**
     * Filters an array of strings to include only those that contain 'u' or 'g' in their text.
     *@param {string} str - The string to check for the presence of 'u' or 'g'.
     * @returns {boolean} True if 'u' or 'g' is found in the string, otherwise false.
     */
    test('filter method',()=>{
    const items = ['browl', 'faaast', 'energy', 'stand', 'eat', 'lunch'];
    function containsUorG(str) {
      return str.includes('u') || str.includes('g');
    }
    const filteredItems = items.filter(containsUorG);
    
    expect(filteredItems).toEqual(["energy","lunch"])
    })