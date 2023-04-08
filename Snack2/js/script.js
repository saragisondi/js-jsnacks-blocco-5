// Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
let studentList = [


{
  firstname: 'Mirko',
  lastname:  'Martorana',
  photo: `img/Rkomi.jpg`,
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
  photo: `img/katia.webp`,
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
  photo: `img/fabio.jpg`,
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
  photo: `img/ciro.jpg`,
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
  photo: `img/irama.avif`,
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
  photo: `img/luca.jpg`,
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
  console.log(media)
})
 let grade = media;
 console.log('media', grade)

let studentListRemap = studentList.map(student =>{

  let newList = {
      Nome: `${student.firstname}`, 
      Cognome: `${student.lastname}`, 
      MediaVoti:` ${media}`
    }
    
 
//prendo il container
const container = document.querySelector('.container')
console.log(container)  

//creo le card
for (let i = 0; i < 6; i++) {
  const card = document.createElement('div');


  card.classList.add('card')
    console.log(card)
    container.append(card)


  const name = document.createElement('h2');
  name.classList.add('name')
  card.append(name);
  name.innerHTML = `${student.firstname} ${student.lastname} `


  const media = document.createElement('h3');
  media.classList.add('media')
  card.append(media);
  media.innerHTML = `Media Voti : ${grade}`;
  console.log(media)

  const img = document.createElement('img');
  card.append(img);
  img.src = student.photo;
  img.innerHTML =  "<img src ='" + student.photo + " ' >"


  console.log(newList)
  return newList
    
}

  })



