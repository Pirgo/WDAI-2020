import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostsListComponent,
    PostDetailsComponent,
    PhotosListComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path : "", component: HomepageComponent},
      {path: "posts", component: PostsListComponent},
      {path: "photos", component: PhotosListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
