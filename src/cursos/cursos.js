// Módulo de cursos
const cursos = [];

function crearCurso(codigo, nombre) {
  cursos.push({ codigo, nombre });
}

function listarCursos() {
  return cursos;
}

function eliminarCurso(codigo) {
  const i = cursos.findIndex(c => c.codigo === codigo);
  if (i >= 0) cursos.splice(i, 1);
}
