import { Component } from '@angular/core';
import { LanguageService } from './shared/services/lang-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langValue = 'en_US';

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.setLang(this.langValue);  
  }

  changeLanguage(lang): void {
    this.langValue = lang;
   this.langService.setLang(lang);
  }
}
