import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="section-container min-h-[80vh] flex flex-col items-center justify-center text-center reveal" id="hero">
      <div class="mb-12">
        <img src="X_Icon.PNG" alt="neko3cs" class="w-24 h-24 md:w-32 md:h-32 rounded-full grayscale hover:grayscale-0 transition-all duration-700 p-1 border border-gray-200">
      </div>
      <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-[ -0.05em] text-gray-900">
        neko3cs
      </h1>
      <div class="w-12 h-1 bg-accent mb-8 mx-auto"></div>
      <p class="text-xl md:text-2xl font-medium mb-4 text-gray-800 tracking-tight">
        Web Developer / Software Engineer
      </p>
      <p class="text-text-sub max-w-lg mx-auto leading-relaxed italic">
        "フロントもバックも。好きなのはコードと、ねこです。"
      </p>
    </section>
  `,
  styles: ``,
})
export class Hero {}
