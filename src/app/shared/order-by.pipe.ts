import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], fields: string[], orders: ('asc' | 'desc')[] = ['asc']): any[] {
    if (!Array.isArray(array)) {
      return array;
    }
  
    array.sort((a, b) => {
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const order = orders[i] || 'asc';
  
        if (a[field] < b[field]) {
          return order === 'asc' ? -1 : 1;
        }
        if (a[field] > b[field]) {
          return order === 'asc' ? 1 : -1;
        }
      }
      return 0;
    });
  
    return array;
  }

}
