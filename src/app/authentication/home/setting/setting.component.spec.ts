import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingComponent } from './setting.component';

describe('SettingComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SettingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SettingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular7crud'`, () => {
    const fixture = TestBed.createComponent(SettingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular7crud');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SettingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular7crud!');
  });
});
