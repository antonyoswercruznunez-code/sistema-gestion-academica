// Módulo de matrículas
const matriculas = [];

function matricular(codigoEstudiante, codigoCurso) {
  matriculas.push({ codigoEstudiante, codigoCurso });
}

function listarMatriculas() {
  return matriculas;
}

function matriculasPorCurso(codigoCurso) {
  return matriculas.filter(m => m.codigoCurso === codigoCurso);
}
