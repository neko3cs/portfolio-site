import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="section-container border-t border-white/5 text-center pb-12">
      <p class="text-sm text-text-sub">
        &copy; {{ currentYear }} neko3cs
      </p>
    </footer>
  `,
  styles: ``,
})
export class Footer {
  currentYear = new Date().getFullYear();
}
