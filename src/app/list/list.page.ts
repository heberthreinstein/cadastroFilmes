import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  itens;
  constructor(private af: AngularFirestore) { }

  ngOnInit() {
    this.itens = this.af.collection('filmes').valueChanges();
    this.itens.forEach(element => {
      console.log(element);
    });
  }

}
