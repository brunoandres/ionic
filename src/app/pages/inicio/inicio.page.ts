import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon : 'american-football',
      name : 'Action Sheet',
      redirecTo : '/action-sheet'
    }
    ,
    {
      icon : 'alert',
      name : 'Alert',
      redirecTo : '/alert'
    },
    {
      icon : 'beaker',
      name : 'Avatar',
      redirecTo : '/avatar'
    },
    {
      icon : 'radio-button-on',
      name : 'Botones y Router',
      redirecTo : '/botones'
    },
    {
      icon : 'card',
      name : 'Cards',
      redirecTo : '/card'
    },
    {
      icon : 'checkmark-circle-outline',
      name : 'Checkbox',
      redirecTo : '/check'
    },
    {
      icon : 'calendar',
      name : 'DateTime',
      redirecTo : '/date-time'
    },
    {
      icon : 'car',
      name : 'Fabs',
      redirecTo : '/fab'
    },
    {
      icon : 'grid',
      name : 'Grid - Rows',
      redirecTo : '/grid'
    },
    {
      icon : 'infinite',
      name : 'Infinite Scroll',
      redirecTo : '/infinite-scroll'
    },
    {
      icon : 'hammer',
      name : 'Input - Forms',
      redirecTo : '/input'
    },
    {
      icon : 'list',
      name : 'Listas - Sliding',
      redirecTo : '/list'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon: String;
  name: String;
  redirecTo: String;
}