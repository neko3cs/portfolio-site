import { Component } from '@angular/core';
import { ExperienceItem } from '../../models/experience-item';

@Component({
  selector: 'app-experience',
  imports: [],
  template: `
    <section class="section-container reveal" id="experience">
      <h2 class="section-title">
        <span class="section-number">04.</span> Experience
      </h2>
      <div class="space-y-16">
        @for (exp of experiences; track exp.period) {
          <div class="group relative">
            <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
              <h3 class="text-2xl font-bold mb-2 md:mb-0">{{ exp.organization }}</h3>
              <span class="text-sm font-mono text-accent bg-accent/5 px-3 py-1 rounded-full">{{ exp.period }}</span>
            </div>
            
            <p class="text-lg text-text-main mb-6 leading-relaxed">{{ exp.content }}</p>

            <div class="flex flex-wrap gap-2">
              @for (tech of exp.techStack; track tech) {
                <span class="text-xs font-medium text-text-sub px-3 py-1 bg-gray-50 border border-gray-100 rounded-sm uppercase tracking-wide">
                  {{ tech }}
                </span>
              }
            </div>

            <!-- Decorative divider for all but last -->
            @if (!$last) {
              <div class="absolute -bottom-8 left-0 w-full h-px bg-gray-100"></div>
            }
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
      content: '要件定義、設計、実装、テスト、運用保守を担当',
      techStack: ['C#', '.NET', 'WPF', 'ASP.NET Core', 'SQL Server', 'Windows Server', 'PowerShell', 'Azure', 'AWS', 'Git']
    },
    {
      period: '2017.04 — 2019.03',
      organization: 'I社',
      content: '実装、テストを担当',
      techStack: ['C#', '.NET Framework', 'ASP.NET', 'AngularJS', 'SQL Server', 'Azure', 'VSS']
    },
    {
      period: '2013.04 — 2017.03',
      organization: '某工業大学 情報学部',
      content: 'コンピューター基礎学、C++プログラミング、ネットワーク、UI/UX、GC、Webデザイン、ゲームプログラミングなどを学ぶ',
      techStack: ['C++', 'OpenCV', 'OpenGL', 'Unity', '分散人工知能', 'Maya', 'Adobe']
    }
  ];
}
