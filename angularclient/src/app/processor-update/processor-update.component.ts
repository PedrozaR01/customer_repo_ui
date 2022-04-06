import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessorService } from '../service/processor-service';
import { Processor } from '../model/processor';


@Component({
  selector: 'app-processor-update',
  templateUrl: './processor-update.component.html',
  styleUrls: ['./processor-update.component.css']
})
export class ProcessorUpdateComponent implements OnInit {

  @Input() processor: Processor = {processorId: '', email: '', firstName: '', lastName: '',
    processorIntro: '', supportedTopics: '', processorGradeLevel: ''}
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private processorService: ProcessorService
    ) {
      this.processor = new Processor();
     }

  ngOnInit(): void {
    this.getProcessor();
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
