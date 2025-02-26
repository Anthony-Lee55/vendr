import { MoneyController } from './controllers/MoneyController.js';
import { SnacksController } from './controllers/SnacksController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  MoneyController = new MoneyController()
  SnacksController = new SnacksController()
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
