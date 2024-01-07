import { ITableGateway } from "@taotask/modules/order/core/gateway/table.gateway";
import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { TableFactory } from "@taotask/modules/order/core/model/table.factory";

export class InMemoryTableGateway implements ITableGateway {
    async getTables(): Promise<OrderingDomainModel.Table[]> {
        return [
            TableFactory.create({
                id : "1",
                title: "Prés de la fenêtre",
                capacity: 4
            })
        ]
        
    }
}