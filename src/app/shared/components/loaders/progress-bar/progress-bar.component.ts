import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progress: number = 0; // 0-100
  @Input() height: 'thin' | 'normal' | 'thick' = 'normal';
  @Input() color: string = '#007bff';
  @Input() backgroundColor: string = '#e9ecef';
  @Input() animated: boolean = true;
  @Input() striped: boolean = false;
  @Input() rounded: boolean = true;
  @Input() showPercentage: boolean = false;
  @Input() indeterminate: boolean = false; // For loading without known progress
}
