import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';
import { Estudiante } from 'src/app/models/estudiante';
import { ActivatedRoute } from '@angular/router';
import { cualificaciones } from 'src/app/models/cualificaciones';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {
  constructor(private http: HttpClient,private ruta: ActivatedRoute) {}
  private URLExterna = Global.urlApiExterna;
  private URLLocal = Global.urlApiLocal;
  private URLConsultarEstudiantes = 'estudiantes/';
  private URLConsultarCualificaciones = 'CualificacionEstudiantes/cualificaciones';
  private URLGuardarCualificaciones = 'CualificacionEstudiantes/postGuardarCualificaciones';


  getEstudiante(idEstudiante:string | null) {
    return this.http.get<Estudiante>(
      this.URLExterna + this.URLConsultarEstudiantes + idEstudiante
    );
  }

  updateEstudiante(idEstudiante:string | null, data: Estudiante) {
    return this.http.put<Estudiante>(
      this.URLExterna + this.URLConsultarEstudiantes + idEstudiante, data
    );
  }

  deleteEstudiante(idEstudiante:string | null) {
    return this.http.delete<Estudiante>(
      this.URLExterna + this.URLConsultarEstudiantes + idEstudiante
    );
  }

  getCualificaciones() {
    return this.http.get<any>(
      this.URLLocal + this.URLConsultarCualificaciones
    );
  }

  postCualificaciones(data: any){
      return this.http.post<cualificaciones>(
      this.URLLocal + this.URLGuardarCualificaciones,data
    );
  }
}
