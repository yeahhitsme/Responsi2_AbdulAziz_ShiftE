import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageToysPage } from './manage-toys.page';

describe('ManageToysPage', () => {
  let component: ManageToysPage;
  let fixture: ComponentFixture<ManageToysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageToysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
