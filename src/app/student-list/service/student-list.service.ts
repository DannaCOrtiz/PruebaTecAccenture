import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';
import { Estudiante } from 'src/app/models/estudiante';

@Injectable({
  providedIn: 'root',
})
export class StudentListService {
  constructor(private http: HttpClient) {}
  private URLGlobal = Global.urlApi;
  private URLConsultarEstudiantes = 'estudiantes/';

  getEstudiantes() {
    return this.http.get<Estudiante[]>(
      this.URLGlobal + this.URLConsultarEstudiantes
    );
  }

  agregarEstudiante(data: Estudiante) {
    return this.http.post<Estudiante>(
      this.URLGlobal + this.URLConsultarEstudiantes, data
    );
  }
}
