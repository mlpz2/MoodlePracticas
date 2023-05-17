import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// La clase Usuario
class Usuario {
  static contador: number = 0;
  id: number;
  dni: string;
  nombre: string;
  apellidos: string;
  usuario: string;
  contraseña: string;
  tipo_usuario: number;
  activo: boolean;

  constructor(dni: string, nombre: string, apellidos: string, usuario: string, contraseña: string, tipo_usuario: number, activo: boolean) {
    this.id = Usuario.generarId();
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.tipo_usuario = tipo_usuario;
    this.activo = activo;
  }

  // Esta es una ID incremental
  static generarId(): number {
    this.contador++;
    return this.contador;
  }
}

// La clase Curso
class Curso {
  static contador: number = 0;
  id: number;
  nombre: string;
  id_a1: number;

  constructor(nombre: string, id_a1: number) {
    this.id = Curso.generarId();
    this.nombre = nombre;
    this.id_a1 = id_a1;
  }

  static generarId(): number {
    this.contador++;
    return this.contador;
  }
}

// La clase Nota
class Nota {
  static contador: number = 0;
  id: number;
  id_alumno: number;
  id_curso: number;
  nota: number;

  constructor(id_alumno: number, id_curso: number, nota: number) {
    this.id = Nota.generarId();
    this.id_alumno = id_alumno;
    this.id_curso = id_curso;
    this.nota = nota;
  }

  // ID incremental para notas
  static generarId(): number {
    this.contador++;
    return this.contador;
  }
}

// La clase Asignatura
class Asignatura {
  static contador: number = 0;
  id: number;
  nombre: string;
  id_profesor1: number;

  constructor(nombre: string, id_profesor1: number) {
    this.id = Asignatura.generarId();
    this.nombre = nombre;
    this.id_profesor1 = id_profesor1;
  }

  static generarId(): number {
    this.contador++;
    return this.contador;
  }
}

const usuarios: Usuario[] = [
  new Usuario("52341920X", "Pepita", "Valdemoro", "pepitaValdemoro", "pepi", 1, true),
  new Usuario("37539021D", "Miguel", "López", "miguelLópez", "admin", 2, true),
  new Usuario("42134293Z", "Jose", "Tenara", "joseTenara", "jose", 3, false),

];

const cursos: Curso[] = [
  new Curso("ProgramaciónWeb", 1),
  new Curso("Java", 2),
  new Curso("C++", 2),
];

const notas: Nota[] = [
  new Nota(1, 1, 8),
  new Nota(1, 2, 7),
  new Nota(2, 2, 9),
];

const asignaturas: Asignatura[] = [
  new Asignatura("Java", 1),
  new Asignatura("Inglés", 2),
  new Asignatura("MySql", 3),
];

const data = {
  usuarios,
  cursos,
  notas,
  asignaturas,
};

// Esto convierte un array en JSON
const jsondata = JSON.stringify(data);
console.log(jsondata);

// Esto convierte JSON en un array
const arraydata = JSON.parse(jsondata);
console.log(arraydata);

// Esto pasa por todos los usuarios y muestra por consola los usuarios y sus propiedades
usuarios.forEach((usuario, i) => {
  console.log(`Usuario ${i + 1}:`);
  console.log(`DNI: ${usuario.dni}`);
  console.log(`Nombre: ${usuario.nombre}`);
  console.log(`Apellidos: ${usuario.apellidos}`);
  console.log(`Usuario: ${usuario.usuario}`);
  console.log(`Contraseña: ${usuario.contraseña}`);
  console.log(`Tipo de usuario: ${usuario.tipo_usuario}`);
  console.log(`Activo: ${usuario.activo}`);
});

// Esto pasa por todos los cursos y muestra por consola los cursos y sus propiedades
cursos.forEach((curso, i) => {
  console.log(`Curso ${i + 1}:`);
  console.log(`Nombre: ${curso.nombre}`);
  console.log(`ID: ${curso.id_a1}`);
});

// Esto pasa por todas las notas y muestra por consola las notas y sus propiedades
notas.forEach((nota, i) => {
  console.log(`Nota ${i + 1}:`);
  console.log(`ID alumno: ${nota.id_alumno}`);
  console.log(`ID asignatura: ${nota.id_curso}`);
  console.log(`Nota: ${nota.nota}`);
});

// Esto pasa por todas las asignaturas y muestra por consola las asignaturas y sus propiedades
asignaturas.forEach((asignatura, i) => {
  console.log(`Asignatura ${i + 1}:`);
  console.log(`Nombre: ${asignatura.nombre}`);
  console.log(`ID profesor: ${asignatura.id_profesor1}`);
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
