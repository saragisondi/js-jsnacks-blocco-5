/*******************STUDENTS*********************************/
const students = [
  {
    id: 213,
    name: 'Marco della Rovere',
    grades: 78,
  },
  {
    id: 110,
    name: 'Paola Cortellessa',
    grades: 96,
  },
  {
    id: 250,
    name: 'Andrea Mantegna',
    grades: 48,
  },
  {
    id: 145,
    name: 'Gaia Borromini',
    grades: 74,
  },
  {
    id: 196,
    name: 'Luigi Grimaldello',
    grades: 68,
  },
  {
    id: 102,
    name: 'Piero della Francesca',
    grades: 50,
  },
  {
    id: 120,
    name: 'Francesca da Polenta',
    grades: 84,
  },
]

console.log(students)

/******************* NAME STUDENTS*********************************/
//creo un array di nomi degli studenti
const studentsMap = students.map((student) => {
  return student.name
})
console.log(studentsMap)

/*******************CONST**************************************/
const container = document.querySelector('.container');

for (let i = 0; i < 7; i++) {
  const card = document.createElement('div');
  card.classList.add('card')
  container.append(card)
  console.log(card)
}

