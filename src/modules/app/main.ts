import { SystemIdProvider } from "@ratatouille/modules/core/system.id-provider";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { Dependencies } from "@ratatouille/modules/store/dependencies";
import { AppStore, createStore } from "@ratatouille/modules/store/store";

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
    };
  }
}

export const app = new App();
