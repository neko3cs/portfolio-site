import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section class="apple-section reveal" id="about">
      <h2 class="apple-heading-m mb-16 text-center">About.</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Profile Card -->
        <div class="md:col-span-2 apple-card p-12 flex flex-col justify-center">
          <p class="text-xs uppercase tracking-widest font-bold text-text-sub mb-4">Profile</p>
          <h3 class="text-4xl font-bold mb-6">neko3cs</h3>
          <ul class="space-y-4">
            @for (job of jobs; track job) {
              <li class="text-2xl font-semibold flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-accent"></span>
                {{ job }}
              </li>
            }
          </ul>
        </div>
        
        <!-- Interests Card -->
        <div class="apple-card p-12 bg-text-main text-white">
          <p class="text-xs uppercase tracking-widest font-bold text-gray-400 mb-8">Interests</p>
          <ul class="space-y-4">
            @for (item of interests; track item) {
              <li class="text-xl font-medium">{{ item }}</li>
            }
          </ul>
        </div>

        <!-- Hobbies Card -->
        <div class="md:col-span-3 apple-card p-12">
          <p class="text-xs uppercase tracking-widest font-bold text-text-sub mb-8">Hobbies</p>
          <div class="flex flex-wrap gap-4">
            @for (item of hobbies; track item) {
              <span class="text-2xl font-bold text-text-main opacity-40 hover:opacity-100 transition-opacity cursor-default">
                {{ item }}
              </span>
            }
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
