import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pretraga'
})
export class PretragaPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.naziv.toLowerCase().includes(searchText);
    });
  }

}
