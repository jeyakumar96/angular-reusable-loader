import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-loader.component.html',
  styleUrl: './skeleton-loader.component.css'
})
export class SkeletonLoaderComponent {
  @Input() type: 'text' | 'card' | 'list' | 'avatar' | 'custom' = 'text';
  @Input() lines: number = 3;
  @Input() avatar: boolean = false;
  @Input() title: boolean = true;
  @Input() subtitle: boolean = false;
  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() animation: 'pulse' | 'wave' | 'none' = 'wave';
  @Input() theme: 'light' | 'dark' = 'light';

  get lineArray(): number[] {
    return Array(this.lines).fill(0).map((_, i) => i);
  }
}
