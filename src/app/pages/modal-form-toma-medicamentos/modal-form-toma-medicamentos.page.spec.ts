import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormTomaMedicamentosPage } from './modal-form-toma-medicamentos.page';

describe('ModalFormTomaMedicamentosPage', () => {
  let component: ModalFormTomaMedicamentosPage;
  let fixture: ComponentFixture<ModalFormTomaMedicamentosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormTomaMedicamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormTomaMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
