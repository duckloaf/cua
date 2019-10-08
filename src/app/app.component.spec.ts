import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should correctly encode the string 'Encode'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = 'Encode';
    app.encode();
    expect(app.output).toEqual('Ksgrff');
  });

  it(`should correctly decode the string 'Ksgrff'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = 'Ksgrff';
    app.decode();
    expect(app.output).toEqual('Encode');
  });

  it(`should correctly encode the string 'abcde'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = 'abcde';
    app.encode();
    expect(app.output).toEqual('fffff');
  });

  it(`should correctly decode the string 'fffff'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = 'fffff';
    app.decode();
    expect(app.output).toEqual('abcde');
  });

  it(`should not fail when given a null input`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = null;
    app.encode();
    expect(app.output).toEqual('');
  });

  it(`should not fail when given an undefined input`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = undefined;
    app.encode();
    expect(app.output).toEqual('');
  });

  it(`should let non-alpha characters pass through un-changed`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.input = 'Let.1234!Pass';
    app.encode();
    expect(app.output).toEqual('Yqe.1234!Tdut');
  });
});
