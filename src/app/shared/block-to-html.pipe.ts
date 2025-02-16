import { Pipe, PipeTransform } from '@angular/core';
import { toHTML } from '@portabletext/to-html';
import { PortableTextBlock } from '@portabletext/types';

@Pipe({
  name: 'blockToHtml'
})
export class BlockToHtmlPipe implements PipeTransform {
  transform(value: any): string {
    return toHTML(value);
  }
  // transform(value: PortableTextBlock[]): string {
  //   return toHTML(value, { components: this.components });
  // }
}
