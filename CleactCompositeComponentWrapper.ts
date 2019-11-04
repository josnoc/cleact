import {
  CleactElement,
  CleactSFC,
  IComponent,
  CleactNode,
  CleactUserComponent,
  CleactDOMElement
} from "./types";
import { Component } from "./Cleact";
import CleactDOMComponent from "./CleactDOMComponent";

export default class CleactCompositeComponentWrapper {
  componentElement: CleactElement<any>;
  constructor(element: CleactElement<any>) {
    this.componentElement = element;
  }

  mountComponent(container: HTMLElement) {
    const component = this.componentElement.type;
    const element = this.getElement(component);

    const domComponent = new CleactDOMComponent(element as CleactDOMElement);

    return domComponent.mountComponent(container);
  }

  private getElement(component: string | CleactSFC<any> | IComponent<any>) {
    if (typeof component === "string") {
      return this.componentElement;
    } else {
      const instance = new (Component as IComponent<any>)(
        this.componentElement.props
      );

      return instance.render
        ? instance.render()
        : (component as CleactSFC<any>)(this.componentElement.props);
    }
  }
}
