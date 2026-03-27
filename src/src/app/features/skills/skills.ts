import { Component } from '@angular/core';
import { SkillCategory } from './skill-category';

@Component({
  selector: 'app-skills',
  imports: [],
  template: `
    <section class="apple-section reveal" id="skills">
      <h2 class="apple-heading-m mb-20 text-center">Skills.</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        @for (category of skillCategories; track category.title) {
          <div class="apple-card p-8 flex flex-col items-center text-center group">
            <h3
              class="text-xs uppercase tracking-[0.2em] font-bold text-text-sub mb-6 group-hover:text-accent transition-colors"
            >
              {{ category.title }}
            </h3>
            <ul class="space-y-2">
              @for (skill of category.skills; track skill) {
                <li class="text-lg font-semibold tracking-tight">{{ skill }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Skills {
  skillCategories: SkillCategory[] = [
    { title: 'Language', skills: ['TypeScript', 'C++', 'C#', 'zsh', 'pwsh'] },
    {
      title: 'Framework',
      skills: ['Angular', 'React', 'Node.js', 'Vite', 'Electron', '.NET', 'TailwindCSS'],
    },
    { title: 'Database', skills: ['SQL Server', 'PostgreSQL', 'SQLite'] },
    { title: 'Tool', skills: ['git', 'Docker', 'pnpm'] },
    { title: 'Cloud', skills: ['Azure', 'Google Cloud', 'Cloudflare'] },
  ];
}
