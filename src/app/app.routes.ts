import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {AboutComponent} from "./pages/about/about.component";
import {TermsAndConditionsComponent} from "./pages/terms-and-conditions/terms-and-conditions.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'category',
    component: SingleCategoryComponent,
    title: 'Category page'
  },
  {
    path:'post',
    component: SinglePostComponent,
    title: 'Post page'
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'About page'
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
    title: 'terms and conditions page'
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    title: 'Contact page'
  }
];

