import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { GpsService } from '../api/gps.service';

@Component({
  selector: 'app-custom-message',
  templateUrl: './custom-message.page.html',
  styleUrls: ['./custom-message.page.scss'],
})
export class CustomMessagePage implements OnInit {
  dataMessage = {
    message: ''
  };
  loading: any;
  numberPhone;
  constructor(private router: Router, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private gpsService: GpsService) {
    console.log(this.router.getCurrentNavigation().extras.state);
    this.numberPhone = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
  }

  goToListCarCustomMessage() {
    this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
  }

  sendMessage() {
    if (this.dataMessage.message == '') {
      this.showError();
    } else {
      this.presentAlertConfirm();
    }

  }

  async showLoader() {
    /* this.loading = this.loadingCtrl.create({
      content: 'Autenticando',
    });

    this.loading.present(); */

    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Enviando Mensaje...',
      duration: 1000,
    });
    await this.loading.present();

    /*  const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!'); */
  }

  async showError() {
    const alert = await this.alertCtrl.create({
      cssClass: '.my-custom-classAlert',
      header: 'El campo mensaje es obligatario',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async toastFunction(response) {
    if (response == 'ok') {
      const toast = await this.toastCtrl.create({
        color: 'dark',
        duration: 2000,
        message: 'Mensaje Enviado'
      });

      await toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        color: 'dark',
        duration: 2000,
        message: 'Mensaje No Enviado'
      });

      await toast.present();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '¿Está seguro de enviar el mensaje?',
      message: '<strong>Revise el texto ingresado</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Enviar',
          handler: () => {
            console.log(this.numberPhone);
            console.log(this.dataMessage.message);
            this.showLoader();
            this.gpsService.sendSMS(JSON.stringify({
              message: this.dataMessage.message,
              number: '+593' + this.numberPhone.substring(1),
              validation: 'b1t4c0ra2022'
            })).then((res) => {
              if (res.data.errorMessage == null) {
                this.toastFunction('ok');
                this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
              } else {
                this.toastFunction('error');
              }
              console.log(res);
            }).catch(error => console.log(error.message));
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }



}
