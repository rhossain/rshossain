import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'maintenance',
        component: MaintenanceComponent
    }
];
