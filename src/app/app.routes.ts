import { Routes,RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Projects} from './pages/projects/projects';
import {Skills} from './pages/skills/skills'; 
import { Home } from './pages/home/home';



export const routes: Routes = [

    {path: '', component: Home},

    {path: 'resume', component: About},

    {path: 'thoughts-and-reflections', component:Skills},

    {path: 'projects', component: Projects},

    {path: 'contact', component: Contact},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule{}
