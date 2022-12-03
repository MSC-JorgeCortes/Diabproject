import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficalService } from 'src/app/Auth/grafical.service';


@Component({
  selector: 'app-datos',
  templateUrl: './grafical.component.html',
  styleUrls: ['./grafical.component.css']
})
export class GraficalComponent {
  multi: any[] = [];
  view: [number, number] = [700, 300];
  dato = []



  constructor(private grafical:GraficalService) {

  }

  ngOnInit(){
    let form = {
      tipo : "grafical"
    }
    this.grafical.grafical(form).subscribe((res:any)=>{
        this.multi=res.grafical;

    })
  }


// options
legend: boolean = true;
showLabels: boolean = true;
animations: boolean = true;
xAxis: boolean = true;
yAxis: boolean = true;
showYAxisLabel: boolean = true;
showXAxisLabel: boolean = true;
xAxisLabel: string = 'Años';
yAxisLabel: string = 'Decesos';
timeline: boolean = true;


colorScheme = {
  domain: ['#B235F0']
};


onSelect(event:any): void {
  console.log(event);
}



}
