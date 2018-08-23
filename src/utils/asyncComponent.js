/** @jsx createElement */
/** @flow */
// refer https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
import { createElement, Component } from 'react';
import { ComponentType } from '~/types';

export default function asyncComponent(getComponent: () => Promise<{ default: ComponentType }>) {
  return class AsyncComponent extends Component<{}, { Comp: ComponentType | null }> {
    state = {
      Comp: null,
    };

    componentWillMount() {
      if (this.state.Comp === null) {
        getComponent().then(({ default: Comp }: { default: ComponentType }) => {
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
