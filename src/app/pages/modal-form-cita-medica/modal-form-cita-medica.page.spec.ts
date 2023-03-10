import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormCitaMedicaPage } from './modal-form-cita-medica.page';

describe('ModalFormCitaMedicaPage', () => {
  let component: ModalFormCitaMedicaPage;
  let fixture: ComponentFixture<ModalFormCitaMedicaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormCitaMedicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormCitaMedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
