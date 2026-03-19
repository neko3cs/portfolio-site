import { Component } from '@angular/core';
import { SkillCategory } from '../../models/skill-category';

@Component({
  selector: 'app-skills',
  imports: [],
  template: `
    <section class="section-container reveal" id="skills">
      <h2 class="section-title">
        <span class="section-number">02.</span> Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        @for (category of skillCategories; track category.title) {
          <div>
            <h3 class="text-[10px] uppercase tracking-[0.3em] font-black text-accent mb-6">
              {{ category.title }}
            </h3>
            <ul class="space-y-3">
              @for (skill of category.skills; track skill) {
                <li class="text-lg font-medium text-text-main flex items-center gap-3 group">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent transition-colors"></span>
                  {{ skill }}
                </li>
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
    { title: 'Framework', skills: ['Angular', 'React', 'Vite', 'Electron', '.NET', 'TailwindCSS'] },
    { title: 'Database', skills: ['SQL Server', 'PostgreSQL', 'SQLite'] },
    { title: 'Tool', skills: ['Docker', 'pnpm', 'Node.js'] },
    { title: 'Cloud Service', skills: ['Azure', 'Google Cloud'] }
  ];
}
