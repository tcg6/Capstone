import * as moment from "moment";

export class Vent {
    public user: object;
    public text: string;

    constructor(ventObj: any) {
        this.user = ventObj.user;
        this.text = ventObj.text;
        
    }
}