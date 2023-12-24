import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class LanguageService {

  public languages: string[] = ['en', 'es', 'de', 'it', 'ru'];

  constructor(public translate: TranslateService) {
    let browserLang: any;
    this.translate.addLangs(this.languages);

    browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
  }

  public setLanguage(lang: any) {
    this.translate.use(lang);
  }

}
