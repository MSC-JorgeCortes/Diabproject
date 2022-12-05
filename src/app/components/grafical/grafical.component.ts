import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficalService } from 'src/app/Auth/grafical.service';


@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styleUrls: ['./grafical.component.css']
})
export class GraficalComponent {
  multi: any[] = [];
  view: [number, number] = [700, 300];
  registros: any
  registro= {
    'year':'',
    'decesos':0,
    'tipo':''
  }

    form={
      'year':'',
    'decesos':0,
    'tipo':''
    }

    AddActivo: boolean = true;
    UpdateActivo: boolean = false;

  constructor(private Datos:GraficalService) {

  }

  Agregar(){
    if(this.registro.year !='' && this.registro.decesos > 0){
      this.registro['tipo']='registroDatos';
      this.Datos.Agregar(this.registro).subscribe((res)=>
      {
        if(res.mensaje=='registrado'){
          alert('Registrado')
          this.ngOnInit()
        }
        else{
          alert('No Registrado')
        }
      })
    }else{
      alert("los campos estan vacios");
    }
    }
    editarRegistro(reganu:any, datos:any){
      this.registro.year=reganu;
      this.registro.decesos = datos;
      this.UpdateActivo=true;
      this.UpdateActivo=false;
    }
    updateRegistro(update:boolean){
      if(update){
        this.registro.tipo='updateDatos'
        this.Datos.updateDatos(this.registro).subscribe((res)=>{
          if(res.mensaje=''){
            alert("Registro Actualizado");
            this.ngOnInit();
          }
        })
      }
      this.AddActivo = true;
      this.UpdateActivo = false;
    }

      eliminarRegistro(reganu:any){
        this.form.year = reganu;
        this.form.tipo = 'eraseDatos';
        alert(this.form.year);
        this.Datos.eliminarRegistro(this.form).subscribe((res:any)=>{
          if(res.mensaje!=''){
            alert("Registro Eliminado");
            this.ngOnInit();
          }
        })
      }
        ngOnInit(){
          this.form.tipo='ObtenDatos'
          this.Datos.obtenDatos(this.form).subscribe((res:any)=>
          {
            this.multi= res.ObtenDatos;
          })
            this.form.tipo = 'listarDatos';
            this.Datos.listarDatos(this.form).subscribe((res)=>{
              if(res.listado !=''){
                this.registros = res.listado;
              }
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
