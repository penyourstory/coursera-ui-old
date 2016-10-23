import React from 'react';
import copy from 'copy-to-clipboard';

const copyToClipboard = (Component) => {
  const componentName = Component.displayName || Component.name;

  return class HOC extends React.Component {
    displayName = `copyToClipboard(${componentName})`;

    static propTypes = {
      text: React.PropTypes.string,
      onCopy: React.PropTypes.func,
      options: React.PropTypes.shape({
        debug: React.PropTypes.bool,
        message: React.PropTypes.string,
      }),
    }

    static defaultProps = {
      text: 'color',
    }

    state = {}

    onClick = (e) => {
      const {text, onCopy, options, onClick} = this.props;
      copy(text, options);

      if (onCopy) {
        onCopy(text);
      }

      if (onClick) {
        onClick(e);
      }
    }

    render() {
      const {text, onCopy, options, onClick, htmlAttributes, ...props} = this.props;
      return (
        <Component
          {...props}
          htmlAttributes={{
            ...htmlAttributes,
            onClick: this.onClick,
          }}
        />
      );
    }
  };
};

module.exports = copyToClipboard;
