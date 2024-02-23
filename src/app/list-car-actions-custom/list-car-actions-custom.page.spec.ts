import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCarActionsCustomPage } from './list-car-actions-custom.page';

describe('ListCarActionsCustomPage', () => {
  let component: ListCarActionsCustomPage;
  let fixture: ComponentFixture<ListCarActionsCustomPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarActionsCustomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCarActionsCustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
