// nuevo-usuario.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

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

  constructor(private authService: AuthService) {}

  async onSubmit() {
    this.authService.crearUsuario(this.user).subscribe({
      next: (data)=>{
        Swal.fire("Proceso Exitoso", data.message, "success")
      },
      error: (error)=>{
        Swal.fire("Proceso Exitoso", error.message, "error")
      }
    })

    
  }
}
