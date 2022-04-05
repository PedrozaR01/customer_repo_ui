import { Component, OnInit } from '@angular/core';
import { Processor } from '../model/processor';
import { ProcessorService } from '../service/processor-service';

@Component({
  selector: 'app-processor-list',
  templateUrl: './processor-list.component.html',
  styleUrls: ['./processor-list.component.css']
})
export class ProcessorListComponent implements OnInit {

  processors!: Processor[];

  constructor(private processorService: ProcessorService) {

   }

   deleteProcessor(Id: string){
    this.processorService.delete(Id).subscribe((success => {this.ngOnInit()}));
  }

  ngOnInit(): void {
    this.processorService.list().subscribe(data => {
      this.processors = data;
    });
  }

}
