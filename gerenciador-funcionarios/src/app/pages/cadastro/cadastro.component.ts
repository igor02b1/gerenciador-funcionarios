import { Component } from '@angular/core';
import { FuncionarioFormComponent } from "../../components/funcionario-form/funcionario-form.component";
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private funcionarioService : FuncionarioService, private router : Router) {
    
  }
  createFuncionario(funcionario : Funcionario){
      this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
