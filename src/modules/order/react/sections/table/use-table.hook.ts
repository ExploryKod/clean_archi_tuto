import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { TableFactory } from "@taotask/modules/order/core/model/table.factory";
import { useState } from "react";
// 1. Je détermine toutes mes fonctions utiles pour l'UI de la section Table
// 1. Je ne crée pas mes useState à ce stade, je remplace par des variables comme assignTableId=null
// 1. Je créer l'UI avec ce presenter (toute les fonctions Onclick, le map ....)
// 2. Je reviens ici pour y mettre de la data avec les factory 
// 2. Je créer mes useStates et useEffect etc... 
export const useTable = () => {

    function assignTable(tableId: string){
        setAssignTableId(tableId);
    }

    function onNext(){}

    function onPrevious(){}

    function isSubmittable(){
        return false;
    }

    const [assignTableId, setAssignTableId] = useState<string | null>(null);
    const availableTables: OrderingDomainModel.Table[] = [
        TableFactory.create({
            id : "1",
            title: "Prés de la fenêtre",
            capacity: 4
        }),

        TableFactory.create({
            id : "2",
            title: "Prés de la porte",
            capacity: 8
        })
    ];

    return {
        assignTableId,
        availableTables,
        assignTable,
        onNext,
        onPrevious,
        isSubmittable: isSubmittable()
    }
};