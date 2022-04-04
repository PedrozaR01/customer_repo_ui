import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../service/topic.service';
import { Topic } from '../model/topic';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {

  topic: Topic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicService
  ) {
    this.topic = new Topic();
   }

   onSubmit(){
     this.topicService.create(this.topic).subscribe(
       result => this.gotoTopicList()
     );
   }

   gotoTopicList(){
     this.router.navigate(['/topics']);
   }

  ngOnInit(): void {
  }

}
