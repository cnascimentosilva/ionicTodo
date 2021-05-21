import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertControl: AlertController) {}

  async showAdd(){
    const alert = await this.alertControl.create({
      header: 'O que deseja fazer?',
      inputs:[
        {name: 'task',
        type: 'text',
        placeholder: 'Digite a nova tarefa',
        }
      ],
      buttons: [
        {text: 'cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('cancelou');
        }
      },{
        text: "adicionar",
        handler: (form) => {

        }
      }
      ]
  });
  await alert.present();
  }
}
