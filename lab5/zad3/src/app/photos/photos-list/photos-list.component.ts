import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: any;
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getPhotos().subscribe(data=>
    this.photos = data)
  }

}
