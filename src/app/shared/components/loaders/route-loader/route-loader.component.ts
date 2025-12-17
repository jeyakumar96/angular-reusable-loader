import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-loader.component.html',
  styleUrl: './route-loader.component.css'
})
export class RouteLoaderComponent {
  @Input() show: boolean = true;
  @Input() height: string = '4px';
  @Input() color: string = '#007bff';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() animated: boolean = true;
  @Input() speed: 'slow' | 'normal' | 'fast' = 'normal';
  @Input() glow: boolean = false;
}
