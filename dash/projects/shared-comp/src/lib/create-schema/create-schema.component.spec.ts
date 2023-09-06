import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchemaComponent } from './create-schema.component';

describe('CreateSchemaComponent', () => {
  let component: CreateSchemaComponent;
  let fixture: ComponentFixture<CreateSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
