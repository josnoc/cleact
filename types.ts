import { Component } from "./Cleact";

export type PropsWithChildren<P> = P & {
  children?: any;
};

export type IComponent<P> = new (props: P) => Component<P>;

export type CleactUserComponent<P> = CleactSFC<P> | IComponent<P>;

export type CleactDOMComponent = string;

export interface CleactDOMElement<P = {}, T extends string | string = string> {
  props: PropsWithChildren<P>;
  type: T;
}

export interface CleactElement<
  P = {},
  T extends CleactDOMComponent | CleactUserComponent<P> =
    | string
    | CleactUserComponent<P>
> {
  type: T;
  props: PropsWithChildren<P>;
}

export type CleactNode<P = {}> = CleactElement<P>;

export type CleactSFC<P = {}> = (props: PropsWithChildren<P>) => CleactNode;
