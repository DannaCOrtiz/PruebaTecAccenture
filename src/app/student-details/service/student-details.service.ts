import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';
import { Estudiante } from 'src/app/models/estudiante';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {
  constructor(private http: HttpClient,private ruta: ActivatedRoute) {}
  private URLGlobal = Global.urlApi;
  private URLConsultarEstudiantes = 'estudiantes/';

  getEstudiante(idEstudiante:string | null) {
    return this.http.get<Estudiante>(
      this.URLGlobal + this.URLConsultarEstudiantes + idEstudiante
    );
  }

  updateEstudiante(idEstudiante:string | null, data: Estudiante) {
    return this.http.put<Estudiante>(
      this.URLGlobal + this.URLConsultarEstudiantes + idEstudiante, data
    );
  }

  deleteEstudiante(idEstudiante:string | null) {
    return this.http.delete<Estudiante>(
      this.URLGlobal + this.URLConsultarEstudiantes + idEstudiante
    );
  }
}
