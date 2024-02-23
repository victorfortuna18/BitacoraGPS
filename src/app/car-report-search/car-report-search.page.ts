import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-report-search',
  templateUrl: './car-report-search.page.html',
  styleUrls: ['./car-report-search.page.scss'],
})
export class CarReportSearchPage implements OnInit {
  public folder = 'Reporte de Movimientos';
  infoReport = {
    dateFrom: '',
    dateTo: '',
    limit: '',
    deviceID: '',
    dateFromI: '',
    dateFromF: ''
  }
  dateFrom;
  dateTos;
  numberRegister = ['10', '50', '100', '500', '1000'];
  deviceID;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.deviceID = params;
      console.log(this.deviceID.params.id);
    });
  }

  ngOnInit() {
  }

  goToListCarReport() {
    this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
  }

  getValue(event, data) {
    if (data == 'from') {
      this.dateFrom = event.detail.value;
    } else {
      this.dateTos = event.detail.value;

    }
    console.log(this.dateFrom);
    console.log(this.dateTos);
  }

  sendInfoReport() {
    this.infoReport.deviceID = this.deviceID.params.id;
    if (this.infoReport.dateFrom == '' || this.infoReport.dateFromI == '' || this.infoReport.dateFromF == '') {
      alert('¡Por favor ingrese los campos requeridos!');
    } else {
      this.router.navigate(['/car-report'], { state: this.infoReport });
    }

  }
}
