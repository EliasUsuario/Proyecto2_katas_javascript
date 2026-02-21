//6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acumulador, exam) => {
    return acumulador + exam.score;
}, 0); // Inicio del acumulador en 0

console.log(totalScore); // 52

//6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const totalNotasAlumnosAprobados = exams.reduce((acumulador, exam) => {
    // Si la nota es mayor o igual a 5, la sumamos al acumulador
    if (exam.score >= 5) {
        return acumulador + exam.score;
    }
    // Si no, devolvemos el acumulador tal cual está para la siguiente vuelta
    return acumulador;
}, 0);

console.log(totalNotasAlumnosAprobados); //42

//6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const mediaNotas = exams.reduce((acumulador, exam) => {
    return acumulador + exam.score;
}, 0) / exams.length;

console.log(mediaNotas); // 5.2




