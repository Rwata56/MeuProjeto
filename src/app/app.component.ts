import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Certifique-se de que o MatIconModule está importado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatIconModule], // Certifique-se de incluir MatIconModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
