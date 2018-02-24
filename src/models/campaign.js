export default class Campaign {
  constructor({ id, name='', vertical_id: vertical = '', subvertical_id: subvertical='' }) {
    this.id = id
    this.name = name
    this.vertical = vertical
    this.subVertical = subvertical
  }
}
