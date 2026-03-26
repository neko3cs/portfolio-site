import { Component } from '@angular/core';
import { ProductItem } from './product-item';

@Component({
  selector: 'app-products',
  imports: [],
  template: `
    <section class="apple-section reveal" id="products">
      <h2 class="apple-heading-m mb-16 text-center">Products.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (product of productList; track product.name) {
          <div class="apple-card group p-12 flex flex-col items-center text-center">
            <h3 class="text-4xl font-bold mb-4 tracking-tighter">{{ product.name }}</h3>
            <p class="text-xl text-text-sub mb-8 max-w-sm">
              {{ product.description }}
            </p>
            <a [href]="product.url" target="_blank" class="apple-link text-xl">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Products {
  productList: ProductItem[] = [
    { name: 'cryptstr', description: '文字列を暗号化・復号する。安全でシンプルなツール。', url: 'https://github.com/neko3cs/cryptstr' },
    { name: 'dnzip', description: '.NET製のzipツール。パフォーマンスと信頼性を両立。', url: 'https://github.com/neko3cs/dnzip' },
    { name: 'FP-Studio', description: 'IFPUG準拠なFP見積アプリ。精緻なプロジェクト管理のために。', url: 'https://github.com/neko3cs/FP-Studio' }
  ];
}
