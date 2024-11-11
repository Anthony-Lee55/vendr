import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snack } from './models/Snack.js'
class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack({
      name: 'StarBursts',
      price: 1,
      imgUrl: 'https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FuZHl8ZW58MHx8MHx8fDA%3D'
    }),
    new Snack({
      name: 'Candy Corn',
      price: 0.01,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1664539423270-c36d640dec79?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FuZHl8ZW58MHx8MHx8fDA%3D'
    }),
    new Snack({
      name: 'M&Ms',
      price: 1.25,
      imgUrl: 'https://images.unsplash.com/photo-1534706013986-73f676db1790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbmR5fGVufDB8fDB8fHww'
    }),
    new Snack({
      name: 'Donuts',
      price: 3.50,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1670333241428-deef29331fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3dlZXRzfGVufDB8fDB8fHww'
    }),
    new Snack({
      name: 'Jelly Beans',
      price: 1.50,
      imgUrl: 'https://images.unsplash.com/photo-1519686997393-7bdb73d6c54d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN3ZWV0c3xlbnwwfHwwfHx8MA%3D%3D'
    }),
    new Snack({
      name: 'CupCake',
      price: 3.50,
      imgUrl: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D'
    }),
    new Snack({
      name: 'Cookie',
      price: 50.50,
      imgUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D'
    })
  ]
  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())