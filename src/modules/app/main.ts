import { SystemIdProvider } from "@taotask/modules/core/system.id-provider";
import { InMemoryMealGateway } from "@taotask/modules/order/core/gateway-infra/in-memory.meal-gateway";
import { InMemoryTableGateway } from "@taotask/modules/order/core/gateway-infra/in-memory.table-gateway";
import { Dependencies } from "@taotask/modules/store/dependencies";
import { AppStore, createStore } from "@taotask/modules/store/store";


export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {
      idProvider: new SystemIdProvider(),
      // tableGateway: {
      //   getTables: function (): Promise<OrderingDomainModel.Table[]> {
      //     return Promise.resolve([
      //       OrderingDomainModel.TableFactory.create({}),
      //     ]);
      //   }
      // },
      
      tableGateway: new InMemoryTableGateway(),
      mealGateway: new InMemoryMealGateway()
    };
  }
}

export const app = new App();
