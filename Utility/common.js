// const isEmpty = (value)=> value === '' || value === undefined || value === null || value === 0 || value === false;

// const toBoolean = (value)=>{ return (value.toLowerCase() == 'true' ? true : false); }

// const searchFromArray = (inputArray, inputField)=>{
//   for(let i = 0; i < inputArray.length; i++){
//     console.log(`comparing ${inputArray[i]} with ${inputField}`);
//     if(inputArray[i] === inputField){
//       console.log("found!");
//       return true;
//     }
//   }
// }

// const errFunc = (errMsg, errCode)=>{
//   let e = new Error(errMsg);
//   e.customCode = errCode;
//   throw e;
// }

// const checkValidationError = (validationError) => {
//   if(validationError && validationError.error && validationError.error.details && validationError.error.details[0]) {
//     return validationError.error.details[0].message;
//   }
// }

// module.exports = {isEmpty, searchFromArray, errFunc, toBoolean, checkValidationError }
