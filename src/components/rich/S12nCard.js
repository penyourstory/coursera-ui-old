/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, { PropTypes } from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, font,
} from 'src/styles/theme';
import { compose, pure } from 'recompose';
import _ from 'underscore';

import { SvgCheckOutline } from 'src/components/svg/coursera';
import withApiMockData from 'src/components/hocs/withApiMockData';

const S12nCard = ({
  id,
  s12n,
  weekCount = 26,
  weeklyHourCount = '6-8',
  nextSessionDate = 'October 3rd',
  certificateCount = 1,
  isSelected,
  onToggleS12nSelect,
}) => {
  const iconColor = isSelected ? color.primary : color.icon;
  const {courseIds, name, partnerName, partnerIds, promoPhoto} = s12n;
  const courseCount = _(courseIds).size() - 1;
  const capstoneCount = 1;

  return (
    <div {...cssWithClass('vertical-box card', styles.S12nCard)}>
      <img
        src={promoPhoto}
        alt="CourseraAlt"
        {...css(styles.courseImage)}
      />
      <div className="flex-1 vertical-box p-a-1 p-b-0">
        <div className="content flex-1">
          <h3 {...css(styles.title)}>{name}</h3>
          <span {...css(styles.subtitle)}>{partnerName}</span>
        </div>
        <div {...css(styles.details)}>
          {courseCount} courses + {capstoneCount} capstone projects <br />
          {weekCount} weeks ({weeklyHourCount} hours / week) <br />
          Next Session: {nextSessionDate} <br />
          {certificateCount} certificate
        </div>

        <div {...cssWithClass('row', styles.footer)}>
          <div {...cssWithClass('col-xs-6 horizontal-box align-items-vertical-center', styles.cardRibbon)}>
            <span {...css(styles.courseCount)}>
              {courseCount}{'-courses'}
            </span>
          </div>
          <div
            {...cssWithClass('col-xs-6 horizontal-box align-items-vertical-center align-items-right', styles.cardSelect)}
          >
            {!isSelected &&
              <span {...css(styles.selectText)}> Not Selected </span>
            }
            <button
              {...css(styles.iconButton, styles.iconButtonFocus)}
              onClick={() => (onToggleS12nSelect(id, !isSelected, courseIds))}
            >
              <SvgCheckOutline
                size={24}
                color={iconColor}
                hoverColor={iconColor}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

S12nCard.propTypes = {
  id: PropTypes.string.isRequired,
  onToggleS12nSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

// Add this for documentation
S12nCard.defaultProps = {
  id: 's1', // Remove later
};

module.exports = compose(
  withApiMockData({
    dataType: 'S12N',
  }),
  pure,
)(S12nCard);


const styles = StyleSheet.create({
  S12nCard: {
    marginBottom: spacing.md,
    maxWidth: 560,
    minHeight: 416,
  },
  cardContent: {
    alignContent: 'flex-end',
    padding: spacing.md,
  },
  cardRibbon: {
    color: color.secondaryText,
    fontSize: font.sm,
    backgroundImage: `linear-gradient(-250deg, ${color.gray} 90%, ${color.white} 90%)`,
    marginLeft: -1,
    height: '2rem',
  },
  cardSelect: {
    color: color.secondaryText,
    fontSize: font.xs,
  },
  courseImage: {
    height: 160,
    width: '100%',
  },
  details: {
    color: color.secondaryText,
    fontSize: font.xs,
    marginBottom: spacing.sm,
  },
  firstLayer: {
    borderColor: color.divider,
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    height: 8,
    margin: '0px 10px',
  },
  iconButton: {
    padding: 0,
    height: 24,
    backgroundColor: 'transparent',
    border: 'none',
  },
  iconButtonFocus: {
    ':focus': {
      outline: 'none',
    },
  },
  secondLayer: {
    borderColor: color.divider,
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    height: 6,
    margin: '0px 20px',
  },
  selectText: {
    color: color.darkGray,
    paddingRight: spacing.sm,
    marginLeft: `-${spacing.sm}`,
  },
  subtitle: {
    color: color.secondaryText,
    fontSize: font.sm,
  },
  title: {
    marginBottom: 0,
  },
});
