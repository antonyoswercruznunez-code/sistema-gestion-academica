// Módulo de estudiantes
const estudiantes = [];

function registrarEstudiante(codigo, nombre) {
  estudiantes.push({ codigo, nombre });
}

function listarEstudiantes() {
  return estudiantes;
}

function buscarEstudiante(codigo) {
  return estudiantes.find(e => e.codigo === codigo);
}
