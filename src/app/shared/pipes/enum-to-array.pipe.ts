import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
    transform(data: Record<any, string>, isNumber?: boolean) {
        const keys = Object.keys(data);
        if (!keys || !keys.length) {
            return ;
        }
        const divider = keys[0] === data[keys[0]] ? keys.length * 2 : 2;
        return isNumber ? keys.slice(0, keys.length / divider).map(val => +val) : keys.slice(keys.length / divider);
    }
}
