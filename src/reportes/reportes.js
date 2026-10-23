// Módulo de reportes académicos
function totalMatriculas(matriculas) {
  return matriculas.length;
}

function estudiantesPorCurso(matriculas, codigoCurso) {
  return matriculas.filter(m => m.codigoCurso === codigoCurso).length;
}
