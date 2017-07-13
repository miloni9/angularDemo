import { Pipe, PipeTransform } from '@angular/core';
import { Produ } from "./ProductOnline/product/produ";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Produ[], args: string): any {
    return value.filter((res)=>res.pname.startsWith(args));
  }

}
