import React, { PropTypes } from 'react';
import classNames from 'classnames';
import LogoSelect from './form/LogoSelect';
import ColorPicker from './form/ColorPicker';

function TeamControl(props) {
  return (
    <div className="column">
      <label className="label" htmlFor={props.nameLabel}>{props.nameLabel}</label>
      <p className="control">
        <input
          type="text"
          className="input is-large"
          placeholder="Home Team"
          id={props.nameLabel}
          value={props.name}
          onChange={props.onNameChange}
        />
      </p>
      { props.showLogo &&
        <div className="control">
          <LogoSelect
            onChange={props.onLogoChange}
            selected={props.logo}
          />
        </div>
      }
      { props.showColor &&
        <div className="control">
          <ColorPicker
            color={props.color}
            onColorSelect={props.onColorChange}
          />
        </div>
      }
      <div className={classNames('notification', props.isGreen ? 'is-light' : 'is-dark')}>
        <div className={classNames('counters', { 'is-flipped-on-desktop': props.isFlipped })}>
          <div className="counter is-big-on-desktop">
            <div className="point">
              <span className="desc">POINTS</span>
              <span id="pointsA">{props.points}</span>
            </div>
            <a className="button is-large score-button right-margin-4" onClick={props.decrementPoints}>-</a>
            <a className="button is-large score-button" onClick={props.incrementPoints}>+</a>
          </div>
          <div className="counter">
            <div className="point">
              <span className="desc">SET</span>
              <span id="setA">{props.sets}</span>
            </div>
            <a className="button is-large score-button right-margin-4" onClick={props.decrementSets}>-</a>
            <a className="button is-large score-button" onClick={props.incrementSets}>+</a>
          </div>
        </div>
      </div>
    </div>
  );
}

TeamControl.propTypes = {
  nameLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onLogoChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  sets: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  incrementPoints: PropTypes.func.isRequired,
  decrementPoints: PropTypes.func.isRequired,
  incrementSets: PropTypes.func.isRequired,
  decrementSets: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  showLogo: PropTypes.bool.isRequired,
  showColor: PropTypes.bool.isRequired,
};

TeamControl.defaultProps = {
  isFlipped: false,
}

export default TeamControl;
