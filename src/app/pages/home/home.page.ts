import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  admin: String;
  rpt: String;
  loading: any;
  constructor(private router: Router, private sms: SMS, public menuCtrl: MenuController, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.admin = localStorage.getItem('admin');
    this.rpt = localStorage.getItem('rpt');
    localStorage.setItem('stopContador', '0');
    localStorage.setItem('resumeContador', '0');
    localStorage.setItem('armContador', '0');
    localStorage.setItem('monitorContador', '0');
  }
  goToListDevice() {
    this.router.navigateByUrl('/list-car/Lista de Vehículos');
  }

  goToLastPosition() {
    this.router.navigateByUrl('/last-position-car/Últimas Posiciones');
  }

  goToLogin() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  sendSms() {
    this.sms.send('0983490060', 'Hello world!');
  }

  goToCarAction() {
    this.router.navigateByUrl('/list-car-actions/Acciones de Vehículo');
  }

  goToCustomMessage() {
    this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
  }

  goToListReport() {
    this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
  }

  reload() {
    this.showLoader();
    localStorage.setItem('stopContador', '0');
    localStorage.setItem('resumeContador', '0');
    localStorage.setItem('armContador', '0');
    localStorage.setItem('monitorContador', '0');
    this.toastFunction();
  }

  async showLoader() {
    /* this.loading = this.loadingCtrl.create({
      content: 'Autenticando',
    });

    this.loading.present(); */

    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Restaurando valores...',
      duration: 800,
    });
    await this.loading.present();

    /*  const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!'); */
  }

  async toastFunction() {
    const toast = await this.toastCtrl.create({
      color: 'dark',
      duration: 2000,
      message: 'Valores restaurados'
    });
    await toast.present();
  }

}
