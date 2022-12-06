import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  data:any=[{"id":1,"courseTitle":"java","courseDescription":"advanced java","courseVenue":"Online","courseDuration":"20 days","courseDate":"2022-12-06"},{"id":2,"courseTitle":"php","courseDescription":"advanced php","courseVenue":"Online","courseDuration":"10 days","courseDate":"2022-12-05"},{"id":52,"courseTitle":"perl","courseDescription":"advanced java","courseVenue":"Online","courseDuration":"20 days","courseDate":"2022-12-06"}] 
}
