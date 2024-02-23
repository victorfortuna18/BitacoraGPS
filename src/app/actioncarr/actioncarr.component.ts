import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Input, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { PopoverController } from '@ionic/angular';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { GpsService } from '../api/gps.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-actioncarr',
  templateUrl: './actioncarr.component.html',
  styleUrls: ['./actioncarr.component.scss'],
})
export class ActioncarrComponent implements OnInit {
  @Input() dataSMS = {
    modelGPS: '',
    simNumber: '',
    car: ''
  };

  dataMessage = {
    message: ''
  };
  loading: any;
  numberPhone;

  stop: any;
  resume: any;
  arm: any;
  monitor: any;

  constructor(private sms: SMS, public popoverController: PopoverController, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private gpsService: GpsService,
    private callNumber: CallNumber) {
  }

  ngOnInit() {
    this.dataSMS;

  }

  sendSMS(action: any, modelGPS: any, simNumber: any) {
    const model = 'TK';
    let stopContador = parseInt(localStorage.getItem('stopContador'));
    let resumeContador = parseInt(localStorage.getItem('resumeContador'));
    let armContador = parseInt(localStorage.getItem('armContador'));
    let monitorContador = parseInt(localStorage.getItem('monitorContador'));

    if (modelGPS.startsWith(model)) {
      switch (action) {
        case 'stop':
          let stopNumber = stopContador + 1;
          localStorage.setItem('stopContador', String(stopNumber));
          if (parseInt(localStorage.getItem('stopContador')) <= 3) {
            this.presentAlertConfirm(simNumber, 'stop123456');
          } else {
            this.showError();
          }
          break;
        case 'resume':
          let resumeNumber = resumeContador + 1;
          localStorage.setItem('resumeContador', String(resumeNumber));
          if (parseInt(localStorage.getItem('resumeContador')) <= 3) {
            this.presentAlertConfirm(simNumber, 'resume123456');
          } else {
            this.showError();
          }
          break;
        case 'arm':
          let armNumber = armContador + 1;
          localStorage.setItem('armContador', String(armNumber));
          if (parseInt(localStorage.getItem('armContador')) <= 3) {
            this.presentAlertConfirm(simNumber, 'arm123456');
          } else {
            this.showError();
          }
          break;
        /* case 'disarm':
          this.sms.send(simNumber, 'disarm123456');
          break; */
        case 'monitor':
          let monitorNumber = monitorContador + 1;
          localStorage.setItem('monitorContador', String(monitorNumber));
          if (parseInt(localStorage.getItem('monitorContador')) <= 3) {
            this.presentAlertConfirm(simNumber, 'monitor123456');
          } else {
            this.showError();
          }
          break;
        /*  case 'Tracker':
           this.sms.send(simNumber, 'tracker123456'); */
        default:
          this.sms.send(simNumber, 'hola');
          break;
      }
    } else {
      switch (action) {
        case 'stop':
          this.sms.send(simNumber, 'AT+GTOUT=gv300,1,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$');
          break;
        case 'resume':
          this.sms.send(simNumber, 'AT+GTOUT=gv300,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$');
          break;
        case 'arm':
          this.sms.send(simNumber, 'AT+GTOUT=gv300,0,,,1,0,0,0,0,0,0,,0,0,,,,FFFF$');
          break;
        case 'disarm':
          this.sms.send(simNumber, 'AT+GTOUT=gv300,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$');
          break;
        case 'monitor':
          this.sms.send(simNumber, 'monitor');
          break;
        case 'Tracker':
          this.sms.send(simNumber, 'tracker');
        default:
          this.sms.send(simNumber, 'hola');
          break;

      }
    }

  }

  dismiss() {
    this.popoverController.dismiss();
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
      header: 'Ha superado el limite de intentos, el siguiente mes se habilitará nuevamente la opción.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async toastFunction(response) {
    if (response == 'ok') {
      const toast = await this.toastCtrl.create({
        color: 'dark',
        duration: 2000,
        message: 'Mensaje Enviado',
        position: 'top',
      });

      await toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        color: 'dark',
        duration: 2000,
        message: 'Mensaje No Enviado',
        position: 'top',
      });

      await toast.present();
    }
  }

  async presentAlertConfirm(simNumber: any, message: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '¿Está seguro de realizar esta acción?',
      message: '<strong>Tener cuidado en realizar esta acción.</strong>!!!',
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
            console.log(simNumber);
            console.log(message);
            console.log('+593' + simNumber.substring(1));

            this.showLoader();
            this.gpsService.sendSMS(JSON.stringify({
              message: message,
              number: '+593' + simNumber.substring(1),
              validation: 'b1t4c0ra2022'
            })).then((res) => {
              if (res.data.errorMessage == null) {
                this.toastFunction('ok');
                if (message == 'monitor123456') {
                  console.log(simNumber);
                  this.callNumber.callNumber(simNumber, true)
                    .then(res => console.log('Launched dialer!', res))
                    .catch(err => console.log('Error launching dialer', err));
                }
                // this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
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
