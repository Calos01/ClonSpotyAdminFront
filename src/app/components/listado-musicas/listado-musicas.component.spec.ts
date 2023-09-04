import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMusicasComponent } from './listado-musicas.component';

describe('ListadoMusicasComponent', () => {
  let component: ListadoMusicasComponent;
  let fixture: ComponentFixture<ListadoMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMusicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
