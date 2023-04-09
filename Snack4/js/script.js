/*****************************************STUDENTS********************************************************/
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

// 1)
/********************************************* NAME STUDENTS********************************************/
//creo un array di nomi degli studenti
const studentsMap = students.map((student) => { 
/*******************CONST**************************************/
const container = document.querySelector('.container NameList');


const nameList = document.querySelector('.name');

const name = document.createElement('li');
name.innerHTML= student.name.toUpperCase();

nameList.append(name)

return student.name

})


// 2)
const container2 = document.querySelector('.container grades')
console.log(container2)

const gradeList = document.querySelector('.grade')
console.log(gradeList)


const GradesMap = students.map((student) => {
  console.log(student.grades)

const grades70 = document.createElement('li');

gradeList.append(grades70)
  
  if (student.grades > 70) {
    console.log(student.name, student.grades)
    grades70.innerHTML = student.name + ":" +" "+ student.grades
  }

})