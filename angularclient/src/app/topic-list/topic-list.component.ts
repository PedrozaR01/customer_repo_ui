import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics!: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.list().subscribe(data => {
      this.topics = data;
    })
  }

}
