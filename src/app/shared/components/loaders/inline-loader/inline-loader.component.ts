import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-inline-loader',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './inline-loader.component.html',
  styleUrl: './inline-loader.component.css'
})
export class InlineLoaderComponent {
  @Input() show: boolean = true;
  @Input() size: 'xs' | 'sm' | 'md' = 'sm';
  @Input() color: string = '#007bff';
  @Input() position: 'left' | 'right' | 'center' = 'left';
  @Input() message: string = '';
  @Input() gap: string = '8px';
}
