import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessorService } from '../service/processor-service';
import { Processor } from '../model/processor';
import { GradeLevel } from 'src/app/model/grade-level';
import { GradeLevelService } from 'src/app/service/grade-level.service';
import { Topic } from 'src/app/model/topic';
import { TopicService } from 'src/app/service/topic.service';


@Component({
  selector: 'app-processor-update',
  templateUrl: './processor-update.component.html',
  styleUrls: ['./processor-update.component.css']
})
export class ProcessorUpdateComponent implements OnInit {

  @Input() processor: Processor = {processorId: '', email: '', firstName: '', lastName: '',
    processorIntro: '', supportedTopics: '', processorGradeLevel: ''}
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

  ngOnInit(): void {
    this.getProcessor();
    this.gradeLevelService.list().subscribe(data => {
      this.gradeDrops = data;
    });
    this.topicService.list().subscribe(data =>{
      this.topicDrops = data;
    });
  }

  getProcessor(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.processorService.get(id).subscribe(processor => this.processor = processor);
  }

  save(){
    this.processorService.update(this.processor.processorId, this.processor).subscribe(
      result => this.gotoProcessorList()
    );
  }

  gotoProcessorList(){
    this.router.navigate(['/processors']);
  }

}
