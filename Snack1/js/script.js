const userList = [
  {
  firstname: 'Edoardo',
  lastname: 'Bianchi',
  age: 17,
  },

  {
  firstname: 'Marco',
  lastname: 'Giallini',
  age: 66,
  },

  {
  firstname: 'Chiara',
  lastname: 'Rossi',
  age: 15,
  },

  {
  firstname: 'Fabio',
  lastname: 'Volo',
  age: 70,
  },

  {
  firstname: 'Tommaso',
  lastname: 'Bernini',
  age: 10,
  },

  {
  firstname: 'Paolo',
  lastname: 'paoletti',
  age: 80,
  },


]

console.log(userList)

//utenti minorenni
const under18 = userList.filter(user => user.age < 18);
console.log(under18)

//utenti over65
const over65 = userList.filter(user => user.age > 65);
console.log(over65)