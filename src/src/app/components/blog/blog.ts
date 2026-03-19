import { Component } from '@angular/core';
import { BlogItem } from '../../models/blog-item';

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    <section class="section-container reveal" id="blog">
      <h2 class="section-title">
        <span class="section-number">05.</span> Blog
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        @for (blog of blogs; track blog.name) {
          <a [href]="blog.url" target="_blank" class="group relative flex items-center justify-between p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-accent/30 transition-all duration-500 overflow-hidden">
            <span class="text-xl font-bold group-hover:text-accent transition-colors duration-500">{{ blog.name }}</span>
            <div class="p-2 group-hover:bg-accent/5 rounded-full transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 group-hover:text-accent transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Blog {
  blogs: BlogItem[] = [
    { name: 'はてなブログ', url: 'https://blog.neko3cs.net/' },
    { name: 'Zenn', url: 'https://zenn.dev/neko3cs' }
  ];
}
