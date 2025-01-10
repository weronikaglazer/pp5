import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListElementComponent } from './client-list-element.component';

describe('ClientListElementComponent', () => {
  let component: ClientListElementComponent;
  let fixture: ComponentFixture<ClientListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
