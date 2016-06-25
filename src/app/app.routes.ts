import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CVComponent } from './components/cv/cv.component';
import { AboutComponent } from './components/about/about.component';

export const routes: RouterConfig = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'cv', component: CVComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];