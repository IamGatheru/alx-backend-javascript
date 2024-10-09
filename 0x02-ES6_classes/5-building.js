export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('class extending Building must override evacuationWarningMessage');
      }
    }
  }

  set sqft(footage) {
    if (typeof footage === 'number') {
      this._sqft = footage;
    }
  }

  get sqft() {
    return this._sqft;
  }
}
