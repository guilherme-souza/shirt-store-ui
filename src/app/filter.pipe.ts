import { Pipe, PipeTransform } from '@angular/core';
import { Shirt } from './shirt';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(shirts: Shirt[], filterBySize: string, filterByColour: string): Shirt[] {
    if (!shirts) {
      return [];
    }

    const size: string = filterBySize || '';
    const colour: string = filterByColour || '';

    return shirts.filter(shirt => {
      return shirt.size.toLowerCase().startsWith(size.toLowerCase())
          && shirt.colour.toLowerCase().startsWith(colour.toLowerCase());
    });
  }

}
