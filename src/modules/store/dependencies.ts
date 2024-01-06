import { IIDProvider } from '@ratatouille/modules/core/id-provider';
import { ITableGateway } from '@ratatouille/modules/order/core/gateway/table.gateway';

export type Dependencies = {
    idProvider?: IIDProvider;
    // Nouvelle dépendance ajoutée pour les test de fetch-table.usecase.test.ts
    tableGateway?: ITableGateway;
};
