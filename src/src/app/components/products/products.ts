import { Component } from '@angular/core';
import { ProductItem } from '../../models/product-item';

@Component({
  selector: 'app-products',
  imports: [],
  template: `
    <section class="section-container reveal" id="products">
      <h2 class="section-title">
        <span class="section-number">03.</span> Products
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (product of productList; track product.name) {
          <a [href]="product.url" target="_blank" class="chic-card group block">
            <div class="flex justify-between items-start mb-6">
              <h3 class="text-2xl font-bold group-hover:text-accent transition-colors duration-500 tracking-tight">
                {{ product.name }}
              </h3>
              <div class="p-2 group-hover:bg-accent/5 rounded-full transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <p class="text-text-sub leading-relaxed mb-8 h-12 overflow-hidden">
              {{ product.description }}
            </p>
            <div class="inline-flex items-center text-xs font-mono font-bold tracking-widest text-accent uppercase border-b-2 border-accent/20 group-hover:border-accent transition-all duration-500">
              Explore →
            </div>
          </a>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Products {
  productList: ProductItem[] = [
    { name: 'cryptstr', description: '文字列を暗号化・復号するツールです。', url: 'https://github.com/neko3cs/cryptstr' },
    { name: 'dnzip', description: '.NET製のzipツールです。', url: 'https://github.com/neko3cs/dnzip' },
    { name: 'ng-weather-app', description: 'Angular製のお天気アプリです。', url: 'https://github.com/neko3cs/ng-weather-app' },
    { name: 'good-dose-drug-button', description: 'お薬を飲んだら褒めて貰えるアプリです。', url: 'http://github.com/neko3cs/good-dose-drug-button' },
    { name: 'FP-Studio', description: 'IFPUG準拠なFP見積アプリです。', url: 'https://github.com/neko3cs/FP-Studio' }
  ];
}
