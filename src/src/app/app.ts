import { Component, AfterViewInit, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Hero } from "./features/hero/hero";
import { About } from "./features/about/about";
import { Skills } from "./features/skills/skills";
import { Products } from "./features/products/products";
import { Blog } from "./features/blog/blog";
import { Experience } from "./features/experience/experience";
import { Contact } from "./features/contact/contact";
import { Footer } from "./features/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Products, Blog, Experience, Contact, Footer],
  template: `
    <main class="min-h-screen">
      <app-hero />
      <app-about />
      <app-skills />
      <app-products />
      <app-blog />
      <app-experience />
      <app-contact />
      <app-footer />
    </main>
  `,
  styles: [],
})
export class App implements AfterViewInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    // SSR中には実行されないようにチェック
    if (isPlatformBrowser(this.platformId)) {
      this.initRevealAnimation();
    }
  }

  private initRevealAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = this.el.nativeElement.querySelectorAll('.reveal');
    revealElements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
