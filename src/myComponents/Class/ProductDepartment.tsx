

export class ProductDepartment {
  private _id: number;
  private _name: string;
  private _description: string;
  private _status: string;
  private _timeCreated: string;
  private _timeUpdated: string;
  private _image: string;
  private _note: string;

  constructor(id: number, name: string, description: string, status: string, timeCreated: string, timeUpdated: string, image: string, note: string) {
    this._id = id
    this._name = name
    this._description = description
    this._status = status
    this._timeCreated = timeCreated
    this._timeUpdated = timeUpdated
    this._image = image
    this._note = note
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get status(): string {
    return this._status
  }

  set status(value: string) {
    this._status = value
  }

  get timeCreated(): string {
    return this._timeCreated
  }

  set timeCreated(value: string) {
    this._timeCreated = value
  }

  get timeUpdated(): string {
    return this._timeUpdated
  }

  set timeUpdated(value: string) {
    this._timeUpdated = value
  }

  get image(): string {
    return this._image
  }

  set image(value: string) {
    this._image = value
  }

  get note(): string {
    return this._note
  }

  set note(value: string) {
    this._note = value
  }
}