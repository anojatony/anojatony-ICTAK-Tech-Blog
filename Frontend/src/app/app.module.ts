import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { CreatpostComponent } from './creatpost/creatpost.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { SinglefeatureComponent } from './singlefeature/singlefeature.component';
import { SingletrendingComponent } from './singletrending/singletrending.component';
import { SinglehomeComponent } from './singlehome/singlehome.component';
import { SignuptrainerComponent } from './signuptrainer/signuptrainer.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { BlogService } from './blog.service';
import { FlashMessagesModule } from 'angular2-flash-messages';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    FooterComponent,
    SingleblogComponent,
    CreatpostComponent,
    LoginComponent,
    SignupComponent,
    CategoryComponent,
    SinglefeatureComponent,
    SingletrendingComponent,
    SinglehomeComponent,
    SignuptrainerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [UserService,AuthService,BlogService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
