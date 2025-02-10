import { Injectable } from '@angular/core';
import { count } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LibroService {

    countLog = 0;
    countWarn = 0;
    countError = 0;

    constructor() { }

    log(msg: string) {
        console.log(msg);
        this.countLog++;
        this.showCounts();
    }
    showCounts() {
        console.log(this.countLog, this.countWarn, this.countError);
    }
    error(msg: string) {
        console.error(msg);
        this.countError++;
        this.showCounts();
    }
    warn(msg: string) {
        console.warn(msg);
        this.countWarn++;
        this.showCounts();
    }

}