import { Component } from '@angular/core';
import { StudentListService } from './service/student-list.service';
import { Estudiante } from '../models/estudiante';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  estudiantes: Estudiante[] = [];
  mostrarFormulario: boolean = false;
  formularioAgregar: FormGroup;
  mensajeToastHeader: string = "";
  mensajeToastBody: string = "";
  mostrarToast: boolean = false;

  constructor(private servicioListaEstudiante: StudentListService, private formBuilder: FormBuilder) {
    this.formularioAgregar = this.formBuilder.group({
      id:null,
      nombre: '',
      apellidos:'',
      genero:'',
      edad:null,
      direccion:'',
      cualificaciones:''
    });
  }

  ngOnInit() {
    this.servicioListaEstudiante.getEstudiantes().subscribe((estudiantes: Estudiante[]) => {
      this.estudiantes = estudiantes;
    });
  }

  onSubmit(estudiante:Estudiante){
    this.servicioListaEstudiante.agregarEstudiante(estudiante).subscribe((estudiante: Estudiante) => {
      this.mostrarFormulario = false;
      this.mostrarToast = true
      this.mensajeToastHeader = "Creación"
      this.mensajeToastBody = "Se creó el estudiante correctamente"
      this.ngOnInit()
    });
  }
}
