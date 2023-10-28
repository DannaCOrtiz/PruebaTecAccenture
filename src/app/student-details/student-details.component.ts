import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDetailsService } from './service/student-details.service';
import { Estudiante } from '../models/estudiante';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class StudentDetailsComponent {
  idEstudiante: string | null;
  estudiante!: Estudiante | null;
  // detallesEstudiante: FormGroup;
  detallesEstudiante: FormGroup;
  mostrarToast: boolean = false;
  actualizarEstudiante: boolean = false;
  mensajeToastHeader: string = "";
  mensajeToastBody: string = "";

  constructor(private ruta: ActivatedRoute, private servicioDetalleEstudiante: StudentDetailsService, private formBuilder: FormBuilder, private route: Router){
    this.idEstudiante = this.ruta.snapshot.paramMap.get('id')
    this.detallesEstudiante = this.formBuilder.group({
      id:0,
      nombre: '',
      apellidos:'',
      genero:'',
      edad:0,
      direccion:'',
      cualificaciones:{}
    });
  }

  ngOnInit(){
    this.servicioDetalleEstudiante.getEstudiante(this.idEstudiante).subscribe((estudiante:Estudiante) => {
      this.estudiante = estudiante
      this.detallesEstudiante.patchValue(this.estudiante)
    })
  }

  GuardarEstudiante(estudiante:Estudiante)
  {
    this.servicioDetalleEstudiante.updateEstudiante(this.idEstudiante, estudiante).subscribe((res:Estudiante) => {
      this.ngOnInit();
      this.mostrarToast = true
      this.mensajeToastHeader = "Actualización."
      this.mensajeToastBody = "El estudiante fue actualizado exitosamente."
      this.actualizarEstudiante = false;
    })
  }  

  EliminarEstudiante(){
    this.servicioDetalleEstudiante.deleteEstudiante(this.idEstudiante).subscribe((res:any) =>{
      setTimeout(() => {
        this.route.navigateByUrl('student-list')
      }, 2000);
      this.mostrarToast = true
      this.mensajeToastHeader = "Eliminación."
      this.mensajeToastBody = "El estudiante fue borrado exitosamente."
    })
  }
}
