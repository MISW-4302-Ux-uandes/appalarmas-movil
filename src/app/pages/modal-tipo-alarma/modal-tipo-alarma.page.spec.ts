import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTipoAlarmaPage } from './modal-tipo-alarma.page';

describe('ModalTipoAlarmaPage', () => {
  let component: ModalTipoAlarmaPage;
  let fixture: ComponentFixture<ModalTipoAlarmaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTipoAlarmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTipoAlarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
