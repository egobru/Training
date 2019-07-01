import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
    {
      path: 'new-contact',
      component: ContactComponent
    },
    {
      path: 'elements-list',
      component: ElementsComponent
    },
    {
      path: 'source-tree',
      component: SourceComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
