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
/*******************CONST**************************************/
const container2 = document.querySelector('.container grades')

const gradeList = document.querySelector('.grade')

//creo un array dei voti degli studenti
const GradesMap = students.map((student) => {

const grades70 = document.createElement('li');

gradeList.append(grades70)
  //creo una condizione per stamparli in pagina
  if (student.grades > 70) {
    grades70.innerHTML = student.name + ":" +" "+ student.grades
  }

})


// 3)
/*******************CONST**************************************/
const container3 = document.querySelector('.container grades-id')

const gradeId = document.querySelector('.gradesid')


//creo un array di ID degli studenti
const id = students.map((student) => {
const id120 = document.createElement('li');

gradeId.append(id120);

 //creo una condizione per stamparli in pagina
  if (student.grades > 70 && student.id > 120){
    id120.innerHTML ="Studente Id: "+ student.id + " " + "voto:" + " " +student.grades
  }
})