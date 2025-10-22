import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import {About} from './pages/about/about';
import {Home} from './pages/home/home';
import {Contact} from './pages/contact/contact';
import {Footer} from './components/footer/footer';
import {Skills} from './pages/skills/skills';
import {Projects} from './pages/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Home,About,Contact,Footer,Skills,Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
