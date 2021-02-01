import CoveyRoomController from './CoveyRoomController';
import ICoveyRoomsStore from './ICoveyRoomsStore';

export default class CoveyRoomsStore implements ICoveyRoomsStore {
  private static _instance: CoveyRoomsStore;

  private controllers: CoveyRoomController[] = [];

  private constructor() {
    /* No-op constructor to prevent initialization from other classes */
  }

  public static getInstance(): CoveyRoomsStore {
    if (CoveyRoomsStore._instance === undefined) {
      CoveyRoomsStore._instance = new CoveyRoomsStore();
    }
    return CoveyRoomsStore._instance;
  }

  getControllerForRoom(coveyRoomId: string): CoveyRoomController {
    let ret = this.controllers.find(c => c.coveyRoomID === coveyRoomId);
    if (ret == null) {
      ret = new CoveyRoomController(coveyRoomId);
      this.controllers.push(ret);
    }
    return ret;
  }
}
