import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjustesSonidosVibracionPage } from './ajustes-sonidos-vibracion.page';

describe('AjustesSonidosVibracionPage', () => {
  let component: AjustesSonidosVibracionPage;
  let fixture: ComponentFixture<AjustesSonidosVibracionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesSonidosVibracionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjustesSonidosVibracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
