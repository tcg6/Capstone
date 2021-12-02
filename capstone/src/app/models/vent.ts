import * as moment from "moment";

export class Vent {
    public user: object;
    public text: string;
    public time: string;

    constructor(ventObj: any) {
        this.user = ventObj.user;
        this.text = ventObj.text;
        this.time = ventObj.time || new Date().toISOString();
    }

    get timeFromNow() {
        return moment(new Date(this.time)).fromNow();
    }
}