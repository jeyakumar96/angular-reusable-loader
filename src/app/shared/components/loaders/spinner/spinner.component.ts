import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color: string = '#007bff';
  @Input() thickness: 'thin' | 'normal' | 'thick' = 'normal';
  @Input() speed: 'slow' | 'normal' | 'fast' = 'normal';
  @Input() message: string = '';
  @Input() showMessage: boolean = true;
}
