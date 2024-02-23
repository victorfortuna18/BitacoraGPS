import { Component } from '@angular/core';
import { LoginPage } from './pages/login/login.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = LoginPage;
  public appPages = [
    { title: 'Lista de vehículos', url: '/list-car/Lista de Vehículos', icon: 'car' },
    { title: 'Últimas posiciones', url: '/last-position/Últimas Posiciones', icon: 'map' },
    { title: 'Cerrar sesión', url: '/login', icon: 'exit' },
    { title: 'Ultimas posiciones', url: '/last-position-car/Ultimas posiciones', icon: 'exit' }
    /* { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' }, */
  ];
  /* public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; */
  constructor() { }
}
