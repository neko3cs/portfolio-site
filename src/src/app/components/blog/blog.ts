import { Component } from '@angular/core';
import { BlogItem } from '../../models/blog-item';

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    <section class="apple-section reveal" id="blog">
      <h2 class="apple-heading-m mb-16 text-center">Blog.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (blog of blogs; track blog.name) {
          <a [href]="blog.url" target="_blank" class="apple-card p-12 flex flex-col items-center text-center group">
            <h3 class="text-3xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">{{ blog.name }}</h3>
            <span class="apple-link text-lg">Read more</span>
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
