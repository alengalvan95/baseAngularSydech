import { Component, Input } from '@angular/core';

@Component({
  selector: "app-custom-toast",
  templateUrl: "./custom-toast.component.html",
  styleUrls: ["./custom-toast.component.scss"],
})
export class CustomToastComponent {
  @Input() public color: number = 1;
  @Input() public mensaje: string = "";
  constructor() {

  }


}