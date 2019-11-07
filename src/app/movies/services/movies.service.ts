import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/lang-service';

@Injectable()
export class MovieService {
  constructor(private langService: LanguageService) { }

  async getAllData() {
    const language = this.langService.getLang();
    const result = await fetch(`../../assets/i18n/${language}.json`);
    return result.text();
  }
}