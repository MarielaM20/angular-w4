import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrossComponent } from "./cross/cross.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CrossComponent]
})
export class AppComponent {
  title = 'hw4';
}
