import CarController from "./app/components/cars/CarController.js";
import JobController from "./app/components/jobs/JobController.js";
import HouseController from "./app/components/houses/HouseController.js";

export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobController(),
      houseController:new HouseController()
    }
  }
}

//@ts-ignore
window.app = new App()