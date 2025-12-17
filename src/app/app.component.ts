import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  SpinnerComponent,
  ProgressBarComponent,
  SkeletonLoaderComponent,
  OverlayLoaderComponent,
  InlineLoaderComponent,
  RouteLoaderComponent,
  ContentPlaceholderComponent,
  LoaderService
} from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SpinnerComponent,
    ProgressBarComponent,
    SkeletonLoaderComponent,
    OverlayLoaderComponent,
    InlineLoaderComponent,
    RouteLoaderComponent,
    ContentPlaceholderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Reusable Loader Components';

  // Demo states
  showOverlay = false;
  showRoute = false;
  showContentPlaceholder = false;
  progressValue = 0;

  constructor(private loaderService: LoaderService) { }

  // Demo methods
  showOverlayLoader() {
    this.showOverlay = true;
    setTimeout(() => {
      this.showOverlay = false;
    }, 3000);
  }

  showRouteLoader() {
    this.showRoute = true;
    setTimeout(() => {
      this.showRoute = false;
    }, 2000);
  }

  simulateProgress() {
    this.progressValue = 0;
    const interval = setInterval(() => {
      this.progressValue += 10;
      if (this.progressValue >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.progressValue = 0;
        }, 1000);
      }
    }, 200);
  }
}
