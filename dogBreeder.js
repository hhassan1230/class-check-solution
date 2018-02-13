var dog={
  name: '', // I'd leave these blank b/c you have a fallback in the function
  age: '', 
}

function dogBreeder(str, num){
  dog.name = str
  dog.age = num
  if(str === undefined){
     dog.name = 'Steve'
  }
  if(num === undefined){
    dog.age = 0
  }
  console.log(dog.name);
  console.log(dog.age);
  return dog; // I'd return the object then reference it like var newDog = dogBreeder('sam', 5); newDog.name newDog.age
}

dogBreeder('sam', 5);

console.log(dog.name); // should be sam
console.log(dog.age); // should be 5