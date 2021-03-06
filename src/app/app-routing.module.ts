import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path:'',   component:HomeComponent},
  { path:'home',   component:HomeComponent},
  { path:'login', component:LoginComponent},

  { path:'conversation/:uid',   component:ConversationComponent},
  { path:'profile',   component:ProfileComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
