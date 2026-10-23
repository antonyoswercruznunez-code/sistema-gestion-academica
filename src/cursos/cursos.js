// Módulo de cursos
const cursos = [];

function crearCurso(codigo, nombre) {
  cursos.push({ codigo, nombre });
}

function listarCursos() {
  return cursos;
}
