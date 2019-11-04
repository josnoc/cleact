import * as Cleact from "./Cleact";
import { CleactSFC } from "./types";

interface IProps {
  message: string;
}

class TestClass extends Cleact.Component<IProps> {
  render() {
    return Cleact.createElement<IProps>("h1", null, this.props.message);
  }
}

const myTest = Cleact.createElement<IProps>(TestClass, {
  message: "Hi from Class Component"
});

const myMessage: CleactSFC<IProps> = props => {
  return Cleact.createElement<{}>("h1", null, props.message);
};

const MyMessage = Cleact.createElement<IProps>(myMessage, {
  message: "Hi from User Component"
});

Cleact.render(MyMessage, document.getElementById("root"));
