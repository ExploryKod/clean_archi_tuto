import { ITableGateway } from "@taotask/modules/order/core/gateway/table.gateway";

// 1. On créer un stub pour nos tests de failed et ensuite on va donc changer nos test dans fetch table usecase test (3.)
export class FailingTableGateway implements ITableGateway {

    async getTables(): Promise<any> {
        throw new Error("Failed to fetch data");
    }
    
}