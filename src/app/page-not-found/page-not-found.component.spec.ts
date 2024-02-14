import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { By } from '@angular/platform-browser';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render oops!', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Ooops!');
  });

  it('should call goHome method when click button', () => {
    spyOn(component, 'goHome')
    let button = fixture.debugElement.nativeElement.querySelector('button')
    button.click()
    expect(component.goHome).toHaveBeenCalled()
  });

  it('should call goHome at css when click button', () => {
    spyOn(component, 'goHome')
    let button = fixture.debugElement.query(By.css('button'))
    button.triggerEventHandler('click')
    expect(component.goHome).toHaveBeenCalled()
  })
});
