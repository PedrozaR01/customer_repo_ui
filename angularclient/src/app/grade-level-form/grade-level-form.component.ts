import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeLevelService } from '../service/grade-level.service';
import { GradeLevel } from '../model/grade-level';

@Component({
  selector: 'app-grade-level-form',
  templateUrl: './grade-level-form.component.html',
  styleUrls: ['./grade-level-form.component.css']
})
export class GradeLevelFormComponent implements OnInit {

  gradelevel: GradeLevel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gragelevelService: GradeLevelService
  ) {
    this.gradelevel = new GradeLevel();
   }


   onSubmit(){
     this.gragelevelService.create(this.gradelevel).subscribe(
       result => this.gotoGradeList()
     );
   }

   gotoGradeList(){
     this.router.navigate(['/gradelevel'])
   }

  ngOnInit(): void {
  }

}
