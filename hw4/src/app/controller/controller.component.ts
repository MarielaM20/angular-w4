import { Component, Input } from '@angular/core';

type LightColor = 'red' | 'yellow' | 'green';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.scss',
  standalone: true
})
export class ControllerComponent {
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() initialSignal: LightColor = 'red';
  @Input() urgentMode: boolean = false;

  currentLight: LightColor = this.initialSignal;

  constructor() {
    this.changeLight();
  }

  changeLight() {
    const sequence: LightColor[] = ['green', 'yellow', 'red'];
    let index = sequence.indexOf(this.currentLight);
    setInterval(() => {
      if (!this.urgentMode) {
        this.currentLight = sequence[(index = (index + 1) % sequence.length)];
      }
    }, 1000);
  }

  handleCross() {
    if (this.currentLight === 'yellow') {
      alert('Неправилно пресичане!');
    } 
  }
}
