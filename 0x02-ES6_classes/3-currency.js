export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  /**
   * Creates a new Currency instance
   *
   * @param {string}name - currency name
   * @param {string}code - currency code
   */

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  get code() {
    return this._code;
  }
  /**
   * creates the attributes in the following format name (code).
   * @returns {string}
   */

  displayFullCurrency() {
    return `S{this._name} (${this._code})`;
  }
}
