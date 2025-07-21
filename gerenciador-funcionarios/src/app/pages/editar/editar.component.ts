import { Component, OnInit } from '@angular/core';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar',
  imports: [FuncionarioFormComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})

export class EditarComponent implements OnInit {
    btnAcao = "Editar"
    btnTitulo = "Editar Funcionário"
    funcionario! : Funcionario;


  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() : void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;

    })
  } 

  editarFuncionario(funcionario : Funcionario){
      this.funcionarioService.EditarFuncionario(funcionario).subscribe( data =>{
        this.router.navigate(['/'])
      })
  }

}
