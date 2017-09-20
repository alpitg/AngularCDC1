import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    data: any;

  constructor(private service: DataService) { }
  ngOnInit() {
  


    this.service.getDataStudent().subscribe((posts) => {
      console.log(posts);
      this.data = posts;
     console.log(this.data);
    });
  }

}
