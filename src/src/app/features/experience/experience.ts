import { Component } from '@angular/core';
import { ExperienceItem } from './experience-item';

@Component({
  selector: 'app-experience',
  imports: [],
  template: `
    <section class="apple-section reveal" id="experience">
      <h2 class="apple-heading-m mb-20 text-center">Experience.</h2>
      <div class="space-y-12">
        @for (exp of experiences; track exp.period) {
          <div class="apple-card p-12">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div class="max-w-xl">
                <p class="text-sm font-bold text-accent mb-2 tracking-widest uppercase">{{ exp.period }}</p>
                <h3 class="text-3xl font-bold mb-6 tracking-tight">{{ exp.organization }}</h3>
                <p class="text-xl text-text-main leading-relaxed mb-8">
                  {{ exp.content }}
                </p>
                <div class="flex flex-wrap gap-2">
                  @for (tech of exp.techStack; track tech) {
                    <span class="px-3 py-1 bg-bg-base rounded-full text-xs font-semibold text-text-sub uppercase tracking-wider">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      period: '2019.04 — PRESENT',
      organization: 'R社',
      content: 'X(旧Twitter)にてスカウト採用。要件定義、設計、実装、テスト、運用保守を担当する。',
      techStack: ['C#', '.NET', 'WPF', 'ASP.NET Core', 'SQL Server', 'Windows Server', 'PowerShell', 'Azure', 'AWS', 'Git']
    },
    {
      period: '2017.04 — 2019.03',
      organization: 'I社',
      content: '新卒採用。実装、テストを担当する。',
      techStack: ['C#', '.NET Framework', 'ASP.NET', 'AngularJS', 'SQL Server', 'Azure', 'VSS']
    },
    {
      period: '2013.04 — 2017.03',
      organization: '某工業大学 情報学部',
      content: 'コンピューター基礎学、C++プログラミング、ネットワーク、UI/UX、CG、Webデザイン、ゲームプログラミングなどを学ぶ。',
      techStack: ['C++', 'OpenCV', 'OpenGL', 'Unity', 'Maya', 'Adobe', 'Web Design', '分散人工知能']
    }
  ];
}
