import { Component } from '@angular/core'

//Создаем декоратор и присваиваем компоненте свойства
@Component({
  selector: 'vk-test1', // название компоненты
  templateUrl: './test1.component.html', // объявляем разметку
  styleUrls: ['test1.component.scss'], // объявляем стили
})
// Компонент не может существовать без модуля
export class Test1Component {}
