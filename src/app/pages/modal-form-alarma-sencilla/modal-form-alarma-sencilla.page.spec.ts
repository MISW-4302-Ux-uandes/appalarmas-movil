import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormAlarmaSencillaPage } from './modal-form-alarma-sencilla.page';

describe('ModalFormAlarmaSencillaPage', () => {
  let component: ModalFormAlarmaSencillaPage;
  let fixture: ComponentFixture<ModalFormAlarmaSencillaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormAlarmaSencillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormAlarmaSencillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
