import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-but',
  templateUrl: './but.component.html',
  styleUrls: ['./but.component.scss']
})
export class ButComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  dta = true;
  eve(value: boolean) {
    this.newItemEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
