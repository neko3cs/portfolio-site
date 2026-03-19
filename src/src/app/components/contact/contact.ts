import { Component } from '@angular/core';
import { SocialLink } from '../../models/social-link';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <section class="section-container reveal" id="contact">
      <h2 class="section-title">
        <span class="section-number">06.</span> Contact
      </h2>
      <div class="grid md:grid-cols-2 gap-16">
        <div>
          <p class="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tighter">
            Let's build<br>something great<br><span class="text-accent italic">together.</span>
          </p>
          <p class="text-text-sub leading-relaxed">
            各プラットフォームで活動しています。<br>お気軽にご連絡ください。
          </p>
        </div>
        <div class="grid grid-cols-1 gap-2">
          @for (link of socialLinks; track link.name) {
            <a [href]="link.url" target="_blank" class="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-accent transition-all duration-500">
              <span class="text-lg font-bold group-hover:text-accent transition-all duration-500">{{ link.name }}</span>
              <span class="text-[10px] font-mono font-bold tracking-[0.2em] text-gray-300 group-hover:text-accent opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 uppercase">Follow →</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Contact {
  socialLinks: SocialLink[] = [
    { name: 'X (Twitter)', url: 'https://x.com/neko3cs' },
    { name: 'GitHub', url: 'https://github.com/neko3cs' },
    { name: 'Gitty', url: 'https://gitty-code.com/user/neko3cs' },
    { name: 'Blog', url: 'https://blog.neko3cs.net' },
    { name: 'Zenn', url: 'https://zenn.dev/neko3cs' },
    { name: 'Stack Overflow', url: 'https://ja.stackoverflow.com/users/37413/neko3cs' },
    { name: 'Speaker Deck', url: 'https://speakerdeck.com/neko3cs' },
    { name: 'NuGet', url: 'https://www.nuget.org/profiles/neko3cs' },
    { name: 'PowerShell Gallery', url: 'https://www.powershellgallery.com/profiles/neko3cs' }
  ];
}
