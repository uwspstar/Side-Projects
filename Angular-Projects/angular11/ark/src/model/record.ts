export class Record {
    constructor(
        public date : string,
        public fund : string,
        public company : string,
        public ticker : string,
        public cusip : number,
        public shares : number,
        public marketValue : number,
        public weight: number
    ){}
}