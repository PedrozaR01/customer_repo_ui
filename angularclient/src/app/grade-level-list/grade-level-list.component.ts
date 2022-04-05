import { Component, OnInit } from '@angular/core';
import { GradeLevel } from '../model/grade-level';
import { GradeLevelService } from '../service/grade-level.service';

@Component({
  selector: 'app-grade-level-list',
  templateUrl: './grade-level-list.component.html',
  styleUrls: ['./grade-level-list.component.css']
})
export class GradeLevelListComponent implements OnInit {

  gradelevels!: GradeLevel[];

  constructor(private gradeLevelService: GradeLevelService) { }

  deleteGrade(Id: string){
    this.gradeLevelService.delete(Id).subscribe((success => {this.ngOnInit()}));
  }

  ngOnInit(): void {
    this.gradeLevelService.list().subscribe( data =>
      {this.gradelevels = data;
      });
  }

}
