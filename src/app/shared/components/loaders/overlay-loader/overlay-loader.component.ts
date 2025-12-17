import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-overlay-loader',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './overlay-loader.component.html',
  styleUrl: './overlay-loader.component.css'
})
export class OverlayLoaderComponent {
  @Input() show: boolean = true;
  @Input() message: string = 'Loading...';
  @Input() spinnerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() spinnerColor: string = '#007bff';
  @Input() backgroundColor: string = 'rgba(255, 255, 255, 0.9)';
  @Input() blur: boolean = true;
  @Input() position: 'fixed' | 'absolute' = 'fixed';
  @Input() zIndex: number = 9999;
}
