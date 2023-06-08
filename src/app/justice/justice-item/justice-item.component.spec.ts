import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticeItemComponent } from './justice-item.component';
import { HttpModelData, TotoService } from 'src/app/services/toto.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

fdescribe('JusticeItemComponent', () => {
  let component: JusticeItemComponent;
  let fixture: ComponentFixture<JusticeItemComponent>;
  let spyTodo: jasmine.SpyObj<TotoService>;

  const expectResponce : HttpModelData = {answer:"yes"};


  beforeEach(async () => {

    spyTodo = jasmine.createSpyObj<TotoService>(TotoService.name,['getYesOrNo']);

    await TestBed.configureTestingModule({
      declarations: [ JusticeItemComponent ],
      providers:[{provide:TotoService,useValue:spyTodo}]
    })
    .compileComponents();

    spyTodo.getYesOrNo.and.returnValue(of(expectResponce))
    fixture = TestBed.createComponent(JusticeItemComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();//cycle de vie init destroy..

  });
  
  //https://testing-angular.com/
  //NO_ERRORS_SCHEMAS --> pour mass MOCK pas forcement la meilleur solution
  //ng mock

  it('should Emit 5', () => {
    component.dataEmited = 5;
    fixture.detectChanges();
    expect(+fixture.debugElement.query(By.css('[data-test="dataemitedtest"]')).nativeElement.innerText).toEqual(5);
  });

  
  it('should yesnotest not defined ', () => {
    component.dataEmited = 1;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('[data-test="yesnotest"]'))).toBeNull();
  });

  it('should yesnotest be defined ', () => {
    component.dataEmited = 5;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('[data-test="yesnotest"]')).nativeElement.innerText).toEqual(expectResponce.answer);
  });
  
});
