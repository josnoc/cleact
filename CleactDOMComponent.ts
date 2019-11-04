import { CleactElement, CleactDOMElement } from "./types";

export default class CleactDOMComponent<P> {
  private domElement: HTMLElement;

  constructor(element: CleactDOMElement<P>) {
    this.domElement = document.createElement(element.type);
    const text = element.props.children;
    const textNode = document.createTextNode(text);
    this.domElement.appendChild(textNode);
  }

  mountComponent(container: HTMLElement) {
    container.appendChild(this.domElement);
    return this.domElement;
  }
}
