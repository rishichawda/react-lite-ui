import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.scss';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.progress = null;
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    return {
      progress: props.progress,
    };
  }

  componentDidUpdate(props) {
    this.progress.style.width = `${props.progress}%`;
  }

  render() {
    const { theme, type } = this.props;
    const classes = classnames(theme.bar);
    const progress = classnames(theme.progress, theme[type]);
    return (
      <div className={classes}>
        <div
          className={progress}
          ref={(ref) => {
            this.progress = ref;
          }}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  type: PropTypes.string,
  progress: PropTypes.number,
};

ProgressBar.defaultProps = {
  theme: defaultTheme,
  type: 'primary',
  progress: 0,
};

export default themr('CBProgressBar', defaultTheme)(ProgressBar);
