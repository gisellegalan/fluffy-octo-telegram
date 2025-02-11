// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also a global variable";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";   
    
    // Reassigning block vars inside block and checking for errors
    blockVar = "I'm a block-scoped var reassigned within the block"; // No error
    blockLet = "I'm a block-scoped let reassigned within the block"; // No error
    // blockConst = "I'm a block-scoped const reassigned within the block"; // Uncaught TypeError: invalid assignment to const 'blockConst'
    console.log(blockVar); 
    console.log(blockLet); 
    console.log(blockConst); 

}

// Reassigning block vars outside block and checking for errors
blockVar = "I'm a block-scoped var reassigned outside the block"; // No error
blockLet = "I'm a block-scoped let reassigned outside the block"; // No error
blockConst = "I'm a block-scoped const reassigned outside the block"; // No error
console.log(blockVar); 
console.log(blockLet);
console.log(blockConst);

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant" 

//Block Scope
// console.log(blockVar);
// console.log(blockLet); // Throws ReferenceError

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

// show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

