const students = [
  {
    name: "Nico",
    age: 21
  },
  {
    name: "Omar",
    age: 17
  },
  {
    name: "Paul",
    age: 23
  },
  {
    name: "Kiran",
    age: 19
  },
]

students.sort(function(a, b) {
  return a.age - b.age
})

console.log(students)