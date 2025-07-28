import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { Home } from './home/home';
import { About } from './about/about';
import { Routes } from '@angular/router';
import { concat } from 'rxjs';

export const routes: Routes = [

    {path:'home' , component:Home, title:'home'},
    {path:'about' , component:About , title:'about'},
    {path:'portfolio' , component:Portfolio ,title:'portfolio'},
    {path:'contact' , component:Contact , title: 'concat'},

    { path: '', redirectTo: 'home', pathMatch: 'prefix' },

];
