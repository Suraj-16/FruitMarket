import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFruit'
})
export class SearchFruitPipe implements PipeTransform {

  transform(value: any, searchTerm : any): any {

    if(value.lenght === 0){
      return value;
    }

    return value.filter(function(search : any){
      return search.fruitname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
