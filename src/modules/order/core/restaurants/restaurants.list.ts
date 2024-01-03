import { produce } from "immer";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { IIDProvider } from "@ratatouille/modules/core/id-provider";
export class GuestForm {
    constructor(
        private idProvider:IIDProvider
    ) { }


}