import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(value: Object, ...args: unknown[]): unknown {
    const language = Object.values(value)[0];
    if (!language) {
      return '---';
    }
    return language;
  }
}
