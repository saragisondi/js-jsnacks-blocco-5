// Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
let studentList = [


{
  firstname: 'Mirko',
  lastname:  'Martorana',
  universityNumber: 01,
  grades: [
  italiano   = 30,
  filosofia  = 25,
  psicologia = 20,
  inglese    = 18,
  francese   = 30,
  ],
},

{
  firstname:  'Katia',
  lastname:   'Follesa',
  universityNumber: 02,
  grades: [
  italiano   = 30,
  filosofia  = 25,
  psicologia = 20,
  inglese    = 18,
  francese   = 30,
  ],
},

{
  firstname:   'Fabio',
  lastname:    'Balsamo',
  universityNumber: 03,
  grades: [
  italiano   = 30,
  filosofia  = 25,
  psicologia = 20,
  inglese    = 18,
  francese   = 30,
  ],
},

{
  firstname:  'Ciro',
  lastname:   'Priello',
  universityNumber: 04,
  grades: [
  italiano   = 30,
  filosofia  = 25,
  psicologia = 20,
  inglese    = 18,
  francese   = 30,
  ],
},

{
  firstname:   'Filippo',
  lastname:      'Fanti',
  universityNumber: 05,
  grades: [
  italiano   = 30,
  filosofia  = 25,
  psicologia = 20,
  inglese    = 18,
  francese   = 30,
  ],
},

{
  firstname: 'Luca',
  lastname:  'Argentero',
  universityNumber: 06,
  grades: [
  italiano   = 30,
  filosofia  = 25,
  psicologia = 20,
  inglese    = 18,
  francese   = 30,
  ],
},

]

//calcolo la media dei voti

let subjectNum = 5;

studentList.forEach((student) => {
  let sum = 0;
  student.grades.forEach((grade) => sum += grade);
  console.log(sum)
  media = sum / subjectNum;
  console.log(studentList.firstname , media)
})