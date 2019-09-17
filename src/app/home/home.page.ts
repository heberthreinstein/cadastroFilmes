import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgControl } from '@angular/forms';
import { AngularFirestore  } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  preco = 0;
  formHome: FormGroup;

  constructor(private fb: FormBuilder,
              private af: AngularFirestore,
              private route: Router) {
    this.formHome = fb.group({
      nome: [[], [Validators.required]],
      genero: [[], [Validators.required]]
    });
  }
  public testar(): void {
    console.log(this.formHome.value);
    console.log('esp', this.formHome.value.nome);
  }
  get genero(): AbstractControl {
    return this.formHome.get('genero');
  }

  salvar(){
    this.af.collection('filmes').add(this.formHome.value);
    this.route.navigate(['list']);
  }


}
