import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-last-position',
  templateUrl: './last-position.page.html',
  styleUrls: ['./last-position.page.scss'],
})
export class LastPositionPage implements OnInit {
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goToHome() {
    this.router.navigateByUrl('/home');
  }
}
