// https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
import React, { Component } from 'react';

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends Component {
    static Comp = null;

    state = {
      Comp: AsyncComponent.Comp,
    };

    componentWillMount() {
      if (this.state.Comp === null) {
        getComponent()
          .then(({ default: Comp }) => {
            AsyncComponent.Comp = Comp;
            this.setState({ Comp });
          });
      }
    }

    render() {
      const { Comp } = this.state;

      if (Comp === null) {
        return null;
      }

      return <Comp {...this.props} />;
    }
  };
}
