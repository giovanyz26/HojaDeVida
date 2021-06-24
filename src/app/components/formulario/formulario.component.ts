import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  capturar(pato: NgForm) {
    
    try {
      if (pato.value.Corredor1 < pato.value.Corredor2){
       throw 'gano el corredor 1';
      }
      if (pato.value.Corredor1 > pato.value.Corredor2){
        throw 'gano el corredor 2';
      }
      if (pato.value.Corredor1 === pato.value.Corredor2){
        throw 'se repite la carrera';
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
  }
    catch (error) {
      alert(`${error}`);
    }
  }
}
