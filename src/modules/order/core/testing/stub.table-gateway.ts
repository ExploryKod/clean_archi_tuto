// Approche de chicago (TDD) > on se créer un stub pour nos tests
import { ITableGateway } from "@taotask/modules/order/core/gateway/table.gateway";
import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";

// 1. On créer un stub pour nos tests et ensuite on va donc changer nos test dans fetch table usecase test
export class StubTableGateway implements ITableGateway {
    constructor(private data: OrderingDomainModel.Table[] = []){}

    async getTables(): Promise<OrderingDomainModel.Table[]> {
        return this.data;
    }
    
}