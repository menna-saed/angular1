import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer,Home,About,Portfolio,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('start_profile_withFramework');
}
