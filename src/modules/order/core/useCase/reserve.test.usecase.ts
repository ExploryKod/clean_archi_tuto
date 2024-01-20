// On va se faire un mock > dossier testing
import {MockReservationGateway} from "@taotask/modules/order/core/testing/mock.reservationGateway";
import {createTestStore} from "@taotask/modules/testing/tests-environment";
import { reserve } from "@taotask/modules/order/core/useCase/reserve.usecase";
describe("Reserve", () => {
    it("Should reserve successfully", () => {
        const reservationGateway = new MockReservationGateway();
        const store = createTestStore({
            dependencies: {
                reservationGateway
            }
        })

        const promise = store.dispatch(reserve())
    })
})

