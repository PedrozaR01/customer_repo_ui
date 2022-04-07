import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessorService } from '../service/processor-service';
import { Processor } from '../model/processor';
import { GradeLevel } from 'src/app/model/grade-level';
import { GradeLevelService } from 'src/app/service/grade-level.service';
import { Topic } from 'src/app/model/topic';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-processor-form',
  templateUrl: './processor-form.component.html',
  styleUrls: ['./processor-form.component.css']
})
export class ProcessorFormComponent implements OnInit {

  processor: Processor;
  gradeDrops!: GradeLevel[];
  topicDrops!: Topic[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gradeLevelService: GradeLevelService,
    private processorService: ProcessorService,
    private topicService: TopicService
  ) { 
    this.processor = new Processor();
  }

  onSubmit(){
    this.processorService.create(this.processor).subscribe(
      result => this.gotoProcessorList()
    );
  }

  gotoProcessorList(){
    this.router.navigate(['/processors']);
  }

  ngOnInit(): void {
    this.gradeLevelService.list().subscribe(data => {
      this.gradeDrops = data;
    });
    this.topicService.list().subscribe(data =>{
      this.topicDrops = data;
    });
  }
  }


