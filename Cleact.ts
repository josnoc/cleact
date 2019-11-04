import CleactDOMComponent from "./CleactDOMComponent";
import {
  CleactElement,
  CleactSFC,
  PropsWithChildren,
  CleactNode,
  IComponent
} from "./types";
import CleactCompositeComponentWrapper from "./CleactCompositeComponentWrapper";

export function createElement<P = {}>(
  type: string | IComponent<P> | CleactSFC<P>,
  props: P | null,
  children?: string | CleactNode<any> // FIXME: Replace string with respected type.
) {
  const element: CleactNode<P> = {
    props: props || ({} as P),
    type: type
  };
  element.props.children = children ? children : undefined;

  return element;
}

export function createClass() {}

export abstract class Component<P = {}> {
  props: PropsWithChildren<P>;

  constructor(props: PropsWithChildren<P>) {
    this.props = props;
  }

  abstract render(): CleactNode<P>;
}

export function render<P>(
  element: CleactElement<P>,
  container: HTMLElement | null
) {
  if (!container)
    throw new Error(
      "Cannot mount component!\nCannot mount on an undefined container."
    );

  const component = new CleactCompositeComponentWrapper(element);

  return component.mountComponent(container);
}
