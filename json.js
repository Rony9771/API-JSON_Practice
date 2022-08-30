const info ={
  name : 'Rony',
  id : 1,
  age : 25,
  salary : '$1000',

}

console.log(info);

const jsonConvert = JSON.stringify(info);
console.log(jsonConvert);

// reverse
const javaBack = JSON.parse(jsonConvert)
console.log(javaBack);