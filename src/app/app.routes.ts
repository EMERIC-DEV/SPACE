import { Routes } from '@angular/router';
import { Accueil } from './composants/accueil/accueil';
import { Menu } from './menu/menu';

export const routes: Routes = [
    {
        path:'',
        component:Accueil
    },
        {
        path:'Menu',
        component:Menu
    }
];
