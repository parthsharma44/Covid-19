import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChatsComponent } from './test-chats.component';

describe('TestChatsComponent', () => {
  let component: TestChatsComponent;
  let fixture: ComponentFixture<TestChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
