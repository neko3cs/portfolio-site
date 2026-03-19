import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Products } from "./components/products/products";
import { Blog } from "./components/blog/blog";
import { Experience } from "./components/experience/experience";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Products, Blog, Experience, Contact, Footer],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-products />
    <app-blog />
    <app-experience />
    <app-contact />
    <app-footer />
  `,
  styles: [],
})
export class App {}
