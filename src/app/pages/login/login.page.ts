import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { GpsService } from 'src/app/api/gps.service';
import { AppComponent } from 'src/app/app.component';
import { GooglemapsComponent } from 'src/app/googlemaps/googlemaps.component';
import * as xml2js from 'xml2js';
declare var google;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public xml;
  loading: any;
  loginData = {
    account: '',
    user: '',
    password: '',
  };
  map;
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef;
  constructor(
    public navCtrl: NavController,
    private router: Router,
    private gpsService: GpsService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalController: ModalController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() { }
  /* ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
  } */

  doLogin() {
    localStorage.setItem('account', this.loginData.account);
    localStorage.setItem('user', this.loginData.user);
    localStorage.setItem('password', this.loginData.password);

    if (this.loginData.user == '') {
      localStorage.setItem('admin', '1');
    } else {
      localStorage.setItem('admin', '0');
    }
    const rpt = 'rpt';
    if (this.loginData.user.startsWith(rpt)) {
      localStorage.setItem('rpt', '1');
    } else {
      localStorage.setItem('rpt', '0');
    }

    let body =
      '<GTSRequest command="version">' +
      ' <Authorization account="' +
      this.loginData.account +
      '" user="' +
      this.loginData.user +
      '" password="' +
      this.loginData.password +
      '"/>' +
      '</GTSRequest>';
    this.showLoader();
    this.gpsService.postLogin(body)
      .then((res) => {
        const parser = new xml2js.Parser({ strict: false, trim: true });
        parser.parseString(res.data, (err, result) => {
          this.xml = result;
          if (this.xml.GTSRESPONSE.$.RESULT == 'error') {
            this.loading.dismiss();
            this.showError();
          } else {
            this.loading.dismiss();
            localStorage.setItem('token', '111')
            return this.router.navigateByUrl('/home');
          }
        });
      }).catch(error => alert('¡Al parecer tenemos inconvenientes, por favor revisar su conexión a internet o intentar más tarde.!'));
  }

  async showLoader() {
    /* this.loading = this.loadingCtrl.create({
      content: 'Autenticando',
    });

    this.loading.present(); */

    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Autenticando...',
      duration: 2000,
    });
    await this.loading.present();

    /*  const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!'); */
  }

  async showError() {
    /*  let alert = this.alertCtrl.create({
      subTitle: 'El usuario o contraseña son invalidas.',
      buttons: ['OK'],
    });
    alert.present(); */

    const alert = await this.alertCtrl.create({
      cssClass: '.my-custom-classAlert',
      header: 'El usuario o contraseña son invalidas.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /* presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  } */

  async addDirection() {

    let position = {
      lat: -0.10522833333333333,
      lng: -78.49175
    };

    const modalAdd = await this.modalController.create({
      component: GooglemapsComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: { position: position }
    });

    await modalAdd.present();

  }


}
