import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessorService } from '../service/processor-service';
import { Processor } from '../model/processor';

@Component({
  selector: 'app-processor-form',
  templateUrl: './processor-form.component.html',
  styleUrls: ['./processor-form.component.css']
})
export class ProcessorFormComponent implements OnInit {

  processor: Processor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private processorService: ProcessorService
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
  }

}
