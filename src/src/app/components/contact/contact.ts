import { Component } from '@angular/core';
import { SocialLink } from '../../models/social-link';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <section class="apple-section reveal" id="contact">
      <h2 class="apple-heading-m mb-16 text-center">Contact.</h2>
      <div class="apple-card bg-white p-12 md:p-20 text-center">
        <p class="text-xl md:text-2xl font-medium text-text-main mb-12 max-w-2xl mx-auto leading-relaxed">
          各プラットフォームで活動しています。<br class="hidden md:block">お気軽にご連絡ください。
        </p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-6">
          @for (link of socialLinks; track link.name) {
            <a [href]="link.url" target="_blank" class="apple-link text-lg">
              {{ link.name }}
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
    { name: 'X', url: 'https://x.com/neko3cs' },
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
