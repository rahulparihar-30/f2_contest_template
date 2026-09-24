/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((developer) => {
    if (developer.profession == "developer") {
      console.log(`id : ${developer.id}, Name : ${developer.name}, Age : ${developer.age}, Profession : ${developer.profession}`)

    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((developer) => {
    if (developer.profession == "developer") {
      console.log(`id : ${developer.id}, Name : ${developer.name}, Age : ${developer.age}, Profession : ${developer.profession}`)

    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {
    id: 4,
    name: "Rahul",
    age: 22,
    profession: "developer"
  }

  arr.push(newEmployee);
  console.log(newEmployee);

}

function removeAdmin() {
  //Write your code here, just console.log
  let updatedArray = arr.filter((employee) => employee.profession !== "admin");
  console.log(updatedArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "john", age: "18", profession: "developer" },
    { id: 6, name: "jack", age: "20", profession: "developer" },
    { id: 7, name: "karen", age: "19", profession: "admin" },
  ]

  const result = arr.concat(newArr);
  console.log(result);
}
