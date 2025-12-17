import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-content-placeholder',
  standalone: true,
  imports: [CommonModule, SkeletonLoaderComponent, SpinnerComponent],
  templateUrl: './content-placeholder.component.html',
  styleUrl: './content-placeholder.component.css'
})
export class ContentPlaceholderComponent {
  @Input() show: boolean = true;
  @Input() type: 'skeleton' | 'spinner' | 'custom' = 'skeleton';
  @Input() height: string = 'auto';
  @Input() width: string = '100%';
  @Input() skeletonType: 'text' | 'card' | 'list' | 'avatar' = 'text';
  @Input() skeletonLines: number = 3;
  @Input() message: string = 'Loading content...';
  @Input() spinnerSize: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() spinnerColor: string = '#007bff';
}
