// nuevo-usuario.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule y CommonModule
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  user = {
    name: '',
    email: '',
    gender: '',
    dateOfBirth: ''
  };

  constructor(private http: HttpClient) {}

  async onSubmit() {
    const apiUrl = 'http://localhost:3000/nuevo-usuario'; // Asegúrate de que esta URL coincida

    try {
      const response: any = await this.http.post(apiUrl, this.user).toPromise();
      // Extraer el mensaje de la respuesta
      const message = response.message;
      
      // Mostrar una alerta con el mensaje
      alert(`${message}`);
    } catch (error) {
      alert('Error al enviar los datos');
    }
  }
}
