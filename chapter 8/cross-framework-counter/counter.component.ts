// Angular 17+ (signals)
import { Component, computed, signal } from '@angular/core'

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="n.set(n() + 1)">+1</button>
    <p>{{ n() }} ({{ isEven() ? 'even' : 'odd' }})</p>
  `,
})
export class Counter {
  n = signal(0)
  isEven = computed(() => this.n() % 2 === 0)
}
