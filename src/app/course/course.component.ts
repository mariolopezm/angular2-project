import { CourseService } from './shared/course.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from './shared/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseId: string;
  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
  this.route.params.forEach((params: Params) => this.courseId = params["id"]);
    if(this.courseId === "new"){
      this.course = new Course(this.courseService.getNextId());
    }
    else{
      this.course = this.courseService.getById(this.courseId);
    }
  }

  onSubmit() {
    if(this.courseId === "new"){
      this.courseService.insert(this.course);
    }
    else{
      this.courseService.update(this.course);
    }
  }

}