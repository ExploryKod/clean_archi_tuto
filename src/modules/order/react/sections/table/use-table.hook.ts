import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { orderingSlice } from "@taotask/modules/order/core/store/ordering.slice";
import { chooseTable } from "@taotask/modules/order/core/useCase/choose-table.usecase";
import { invariant } from "@taotask/modules/shared/invariant";
// import { TableFactory } from "@taotask/modules/order/core/model/table.factory";
import { AppState, useAppDispatch } from "@taotask/modules/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
// 1. Je détermine toutes mes fonctions utiles pour l'UI de la section Table
// 1. Je ne crée pas mes useState à ce stade, je remplace par des variables comme assignTableId=null
// 1. Je créer l'UI avec ce presenter (toute les fonctions Onclick, le map ....)
// 2. Je reviens ici pour y mettre de la data avec les factory 
// 2. Je créer mes useStates et useEffect etc... 
// 3. Ici la logique est si simple qu'on décide de ne pas ajouter de test donc on fait pas de form
// 4. On va ensuite quitter la fake data interne à cette fonction et user plutôt du selector (redux)
// 4. Je retrouve alors ma table qui est dans le in-memory.table-gateway.ts
// 5. Le bouton précèdent / suivant >> easy à faire grâce à nos dispatch et notre useAppDispatch(), orderingslice.actions et OrderingStep.GUEST etc...
// 6. On va ensuite faire un usecase (hors-react) (choose-table.usecase.ts)
export const useTable = () => {

    function assignTable(tableId: string){
        setAssignTableId(tableId);
    }

    function onNext(){
        // sécurité > defensing programming et même c'est un invariant >> on va donc créer invariant.ts dans shared où on aura le throw new Error
        invariant(assignTableId !== null, "Assign table id must be set");
        // On remarque ici le point d'exclamation à la fin > permet d'avoir string | null >> voir en l'enlevant pour check
        // On va gérer le passage de l'étape ailleurs > voir les reducers dans ordering.slice.ts
        dispatch(chooseTable(assignTableId!));
        // Ancienne version avant d'avoir implémenter le choose-table.usecase.ts
        // dispatch(orderingSlice.actions.setStep(OrderingDomainModel.OrderingStep.MEALS))
    }

    function onPrevious(){
        dispatch(orderingSlice.actions.setStep(OrderingDomainModel.OrderingStep.GUESTS))
    }

    function isSubmittable(){
        return assignTableId !== null;
    }
    const dispatch = useAppDispatch();
    const [assignTableId, setAssignTableId] = useState<string | null>(null);
    const availableTables: OrderingDomainModel.Table[] = useSelector((state: AppState) => state.ordering.availableTables.data);
    // const availableTables: OrderingDomainModel.Table[] = [TableFactory.create({id : "1",title: "Prés de la fenêtre",capacity: 4}),TableFactory.create({id : "2",title: "Prés de la porte",capacity: 8})];
    
    return {
        assignTableId,
        availableTables,
        assignTable,
        onNext,
        onPrevious,
        isSubmittable: isSubmittable()
    }
};