import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(value: Object | undefined, ...args: unknown[]): unknown {
    if (!value) {
      return '---';
    }
    return Object.values(value)[0];
  }
}
