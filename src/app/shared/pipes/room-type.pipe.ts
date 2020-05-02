import { Pipe, PipeTransform } from '@angular/core';
import { RoomType } from '@core/models/enums/room-type.enum';

@Pipe({
  name: 'roomType'
})
export class RoomTypePipe implements PipeTransform {
  private locale:Record<RoomType, string> = {
    [RoomType.PRIVATE]: 'Приватный',
    [RoomType.PUBLIC]: 'Публичный'
  }

  transform(value: RoomType): string {
    return this.locale[value];
  }

}
