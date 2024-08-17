// app.component.ts
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, NuevoUsuarioComponent], // Importa HttpClientModule y el componente standalone
  template: '<app-nuevo-usuario></app-nuevo-usuario>',
})
export class AppComponent {}
