import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <input class="token-input" type="text" #token>
    <button class="btn-primary" (click)="handleClick(token.value)">{{label}}</button>
  `,
  styles: [
    `
      .token-input {
        padding: .5rem 1rem;
        margin:0 10px;
      }
      .btn-primary {
        color: #fff;
        background-color: #0074d9;
        border-radius: 3px;
        border: 1px solid transparent;
        padding: .5rem 1rem;
    
    `
  ]
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Test';
  @Output() action = new EventEmitter();

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

  handleClick(value) {
    console.log(value);
    this.action.emit(value);
    if (window.parent) {
      // this.elem.nativeElement.contentWindow.postMessage(value, '*');

      window.parent.postMessage(value, '*');
    }
  }

}
