import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user/:id',
        loadComponent: () =>
            import('./user/user.component').then(c => c.UserComponent)
    }
];
