import React from "react";

interface IButton {
  name?: string;
}
type ButtonType = { name: string };

export function ButtonComponent(props: ButtonType) {
  return <button>{props.name}</button>;
}
export class Welcome extends React.Component<IButton> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
