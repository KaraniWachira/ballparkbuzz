import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {AboutComponent} from "./pages/about/about.component";
import {TermsAndConditionsComponent} from "./pages/terms-and-conditions/terms-and-conditions.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'category',
    component: SingleCategoryComponent
  },
  {
    path:'post',
    component: SinglePostComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  }
];

