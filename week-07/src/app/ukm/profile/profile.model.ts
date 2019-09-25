import { UKM } from '../ukm.model';

export class Profile{
    constructor(
        public name: string,
        public nim: string,
        public avatar: string,
        public ukm: UKM[],
    ) {}
}
