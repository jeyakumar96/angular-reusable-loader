import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LoaderState {
  show: boolean;
  message?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadersState = new Map<string, BehaviorSubject<LoaderState>>();

  constructor() { }

  /**
   * Get or create a loader state for a specific key
   */
  private getLoader(key: string = 'default'): BehaviorSubject<LoaderState> {
    if (!this.loadersState.has(key)) {
      this.loadersState.set(key, new BehaviorSubject<LoaderState>({ show: false }));
    }
    return this.loadersState.get(key)!;
  }

  /**
   * Show a loader
   */
  show(key: string = 'default', message?: string, type?: string): void {
    const loader = this.getLoader(key);
    loader.next({ show: true, message, type });
  }

  /**
   * Hide a loader
   */
  hide(key: string = 'default'): void {
    const loader = this.getLoader(key);
    loader.next({ show: false });
  }

  /**
   * Get loader state as observable
   */
  getState(key: string = 'default'): Observable<LoaderState> {
    return this.getLoader(key).asObservable();
  }

  /**
   * Get current loader state
   */
  getCurrentState(key: string = 'default'): LoaderState {
    return this.getLoader(key).value;
  }

  /**
   * Check if loader is currently showing
   */
  isShowing(key: string = 'default'): boolean {
    return this.getCurrentState(key).show;
  }

  /**
   * Hide all loaders
   */
  hideAll(): void {
    this.loadersState.forEach(loader => {
      loader.next({ show: false });
    });
  }

  /**
   * Get all active loaders
   */
  getActiveLoaders(): string[] {
    const activeKeys: string[] = [];
    this.loadersState.forEach((loader, key) => {
      if (loader.value.show) {
        activeKeys.push(key);
      }
    });
    return activeKeys;
  }

  /**
   * Remove a loader from the service
   */
  remove(key: string): void {
    if (this.loadersState.has(key)) {
      this.loadersState.get(key)?.complete();
      this.loadersState.delete(key);
    }
  }
}
