import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section class="section-container reveal" id="about">
      <h2 class="section-title">
        <span class="section-number">01.</span> About
      </h2>
      <div class="grid md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h3 class="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-8">
            Profile
          </h3>
          <ul class="space-y-8">
            <li>
              <p class="text-xs text-text-sub mb-2 uppercase tracking-widest font-bold">名前</p>
              <p class="text-2xl font-bold">neko3cs</p>
            </li>
            <li>
              <p class="text-xs text-text-sub mb-3 uppercase tracking-widest font-bold">職業</p>
              <ul class="space-y-2">
                @for (job of jobs; track job) {
                  <li class="text-xl font-medium leading-tight flex items-center gap-3">
                    <span class="w-1.5 h-px bg-accent"></span>
                    {{ job }}
                  </li>
                }
              </ul>
            </li>
          </ul>
        </div>
        <div class="space-y-12">
          <div>
            <h3 class="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-6">
              Interests
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (item of interests; track item) {
                <span class="px-3 py-1 bg-gray-50 border border-gray-100 text-sm font-medium">
                  {{ item }}
                </span>
              }
            </div>
          </div>
          <div>
            <h3 class="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-6">
              Hobbies
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (item of hobbies; track item) {
                <span class="px-3 py-1 bg-gray-50 border border-gray-100 text-sm font-medium">
                  {{ item }}
                </span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class About {
  jobs = [
    'Webフロントエンドエンジニア',
    'エンタープライズソフトウェアエンジニア'
  ];
  interests = ['Webフロントエンド', 'UI/UX', '自動化', 'QA'];
  hobbies = ['プログラミング', 'ゲーム', 'ベース', 'アニメ', 'キャンプ', 'スノボ', '睡眠'];
}
