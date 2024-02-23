import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { GooglemapsService } from './googlemaps.service';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  @Input() position = {
    lat: -2.89811,
    lng: -78.999581499999
  };

  @Input() label = {
    titulo: 'ubicacion',
    subtitulo: 'mi ubicacion',
    valueCode: 'Detenido',
    speedKPH: '0,0',
    icon: '',
    timeGPS: 'timeGPS'
  }

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;

  @ViewChild('divMap', { static: true }) divMap: ElementRef;

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    this.googlemapsService.init(this.renderer, this.document).
      then(() => {
        this.initMap();
        console.log('se ejecuto servicio');
      }).catch((err) => {
        console.log(err);
      })
  }

  initMap() {
    const position = this.position;
    const label = this.label;

    let iconFinal: any;

    if (label.icon == '4x4' || label.icon == 'bltruck' || label.icon == 'bus' || label.icon == 'excav' ||
      label.icon == 'grnbike' || label.icon == 'grua' || label.icon == 'h100' || label.icon == 'medi' ||
      label.icon == 'moto' || label.icon == 'policia' || label.icon == 'rcar' || label.icon == 'remolque' ||
      label.icon == 'taxi' || label.icon == 'yeltruck') {
      iconFinal = 'assets/img/' + label.icon + '.png'
    } else {
      iconFinal = '';
    }

    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: false,
      icon: iconFinal
    });



    //this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();
    if (label.titulo.length) {
      this.addMarker(position);
      this.marker.addListener("click", () => {
        this.setInfoWindow(this.marker, label.titulo, label.subtitulo, label.valueCode, label.speedKPH, label.timeGPS);
      });
    }


  }

  clickHandleEvent() {
    this.map.addListener('click',)
  }

  addMarker(position: any) {
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }

  setInfoWindow(marker: any, titulo: string, subtitulo: string, valueCode: string, speedKPH: string, timeGPS: string) {
    const contentString = '<div id="contentInsideMap">' +
      '<div>' +
      '</div>' +
      '<p style="font-weight: bold; margin-botton: 5px; color:black;">' +
      '(' + valueCode + ')' + titulo + '</p>' +
      '<div id="bodyContent">' +
      '<p class="normal m-0" style="color:grey;">' +
      '(' + speedKPH + 'km/h)' + subtitulo + '</p>' +
      '<p class="normal m-0" style="color:grey;">' + timeGPS + '</p>' +
      '</div>' +
      '</div>';

    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async myLocation() {
    this.addMarker(this.position);
  }

}
