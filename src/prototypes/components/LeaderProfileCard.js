import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import CourseMiniCard from './CourseMiniCard';
import {Avatar} from 'src';

const AVATAR_SIZE = 128;

const LeaderProfileCard = ({styles, key, leaderboard, ...props}) => {
  const {userName, numCoursesCompleted, rank, score, currentCourse, courseId} = leaderboard;
  const statsRowData = [{
    label: 'points',
    number: score,
  }, {
    label: 'ranking',
    number: rank,
  }, {
    label: 'complete',
    number: numCoursesCompleted,
  }, {
    label: 'enrolled',
    number: 2,
  }]
  console.warn('---', leaderboard);
  return (
    <div {...cssWithClass('LeaderProfileCard m-b-2', styles.LeaderProfileCard)}>
      <div className="vertical-box w-100 card">
        <div {...cssWithClass('vertical-box align-items-absolute-center', styles.profileContainer)}>
          <div {...css(styles.AvatarWrapper)}>
            <Avatar imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/marcomano_/128.jpg" size={AVATAR_SIZE} bordered />
          </div>
        </div>
        <div className="p-a-1">
          <h3>{userName}</h3>
          <div className="horizontal-box align-items-spacebetween wrap m-b-2">
            {statsRowData.map((item, index) => (
              <div className="vertical-box align-items-absolute-center" key={`stats-row~${index}`}>
                <span {...css(styles.stats) }>{item.number}</span>
                <small className="text-uppercase font-xs">{item.label}</small>
              </div>
            ))}
          </div>
          <div className="current-course-container m-b-2">
            <label className="text-uppercase font-sm font-weight-bold">Current Courses</label>
            <CourseMiniCard id={courseId}/>
          </div>

          <div className="finished-course-container m-b-1">
            <label className="text-uppercase font-sm font-weight-bold">Accomplishments</label>
            <CourseMiniCard id={courseId} type={'FINISHED_COURSE'} grade={21} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default withStyles(({color, gradient}) => ({
  LeaderProfileCard: {
    width: '100%',
  },
  profileContainer: {
    background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,
    height: 200,
    margin: -1,
    // marginLeft: -2,
    // marginTop: -2,
  },
  stats: {
    color: color.primary,
    fontSize: 36,
    fontWeight: 'normal',
  },
  AvatarWrapper: {
    width: 132,
    height: 132,
    borderRadius: '50%',
    border: `2px solid rgba(255, 255, 255, .8)`,
  },
}))(LeaderProfileCard);