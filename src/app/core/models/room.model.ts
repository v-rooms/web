import { RoomType } from './enums/room-type.enum';

export class Room {
  id: string;
  name: string;
  type: RoomType;
  createDate: string;
  description: string;
  ownerId: string;
  preview: string;
}
