import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormRecordatorioRapidoPage } from './modal-form-recordatorio-rapido.page';

describe('ModalFormRecordatorioRapidoPage', () => {
  let component: ModalFormRecordatorioRapidoPage;
  let fixture: ComponentFixture<ModalFormRecordatorioRapidoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormRecordatorioRapidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormRecordatorioRapidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
