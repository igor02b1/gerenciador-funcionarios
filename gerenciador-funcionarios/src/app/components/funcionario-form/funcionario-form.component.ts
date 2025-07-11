import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Funcionario } from '../../Models/Funcionarios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{
  @Output() OnSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  
  funcionarioForm! : FormGroup;

  constructor() {}
  
  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      turno: new FormControl('', Validators.required),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }

  submit(){
    this.OnSubmit.emit(this.funcionarioForm.value)
  }
}
