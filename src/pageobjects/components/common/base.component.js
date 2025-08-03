export default class BaseComponent {
  constructor(rootElement) {
    this._rootElement = rootElement;
  }

  get rootElement() {
    return $(this._rootElement);
  }
}
