import { IIDProvider } from "@taotask/modules/core/id-provider";
import { nanoid } from "nanoid";

export class SystemIdProvider implements IIDProvider {
    generate() {
        return nanoid();
    }
}