import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import {MapComponent} from './heatmap/map/map.component';
import {EmployeeCreateComponent}     from'../app/employee-create/employee-create/employee-create.component';




export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
   
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
    ,{path:'home',component:HomeComponent}
    ,{path:'map',component:MapComponent},
    
    
    

];