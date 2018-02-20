export default class Campaign {
  constructor({ id='0', name='', vertical_id: vertical = '', subvertical_id: subvertical='' }) {
    this.name = name
    this.id = id
    this.vertical = vertical
    this.subVertical = subvertical
  }
}
