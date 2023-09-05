import { Component } from '@angular/core'

interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'vk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vk'
  user: IUser = {
    age: 33,
    name: 'Andrey',
  }
  isAppLoading = true

  textOne: string | undefined
  textTwo: string | undefined

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false
    }, 3000)
    setTimeout(() => {
      this.user.age = 34
    }, 4000)
  }

  onClickTitleHandler() {
    this.title = 'MNITI'
  }

  onClickInputHandlerOne(event: Event) {
    this.textOne = (event.currentTarget as HTMLInputElement).value
  }

  onClickInputHandlerTwo(event: Event) {
    this.textTwo = (event.currentTarget as HTMLInputElement).value
  }
}
