import { Component } from '@angular/core';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';
import { Funcionario } from '../../Models/Funcionarios';

@Component({
  selector: 'app-editar',
  imports: [FuncionarioFormComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
    btnAcao = "Editar"
    btnTitulo = "Editar Funcionário"
    funcionario! : Funcionario
}
