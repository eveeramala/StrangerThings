import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LanguageService {
    currentLang = new Map<any, any>();
    langEvent = new Subject();
    constructor() { }

    getLang() {
        return this.currentLang.get('lang');
    }
    setLang(lang) {
        this.currentLang.set('lang', lang);
        this.langEvent.next();
    }
    getObs() {
        return this.langEvent.asObservable();
    }
}