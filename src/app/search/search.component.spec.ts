import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SearchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the searchText', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input')
    input.value = 'Angular'
    input.dispatchEvent(new CustomEvent('input'))
    expect(component.searchText.value).toBe('Angular')
  })
  it('should log to the console', () => {
    const spy = spyOn(console, 'log')
    
    component.searchText.setValue('Angular')
    fixture.detectChanges();
    button.click()
    expect(spy).toHaveBeenCalledWith('Szukałeś Angular')

  })
});
