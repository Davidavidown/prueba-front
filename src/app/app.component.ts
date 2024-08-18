// app.component.ts
import { Component } from '@angular/core';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NuevoUsuarioComponent], // Importa HttpClientModule y el componente standalone
  templateUrl: './app.component.html',
  styleUrl : './app.component.css'
})
export class AppComponent {}
