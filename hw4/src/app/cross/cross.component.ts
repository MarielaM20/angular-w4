import { Component } from '@angular/core';
import { ControllerComponent } from '../controller/controller.component';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrl: './cross.component.scss',
  imports: [ControllerComponent],
  standalone: true
})
export class CrossComponent {
  public urgent = false;
  public isCoolingDown = false;
  public cooldownTime = 10;

  triggerUrgentMode() {
    this.urgent = true;
    setTimeout(() => {
      this.urgent = false;
      this.isCoolingDown = true;
      setTimeout(() => {
        this.isCoolingDown = false;
      }, this.cooldownTime * 1000);
    }, this.cooldownTime * 1000);
  }
}
