import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  listStyles: {
    position: 'relative',
    margin: 0,
    top: 50,
    padding: 0,
  },
  listItemStyles: {
    listStyleType: 'none',
    display: 'inline-block',
  },
  buttonStyles: {
    backgroundColor: '#2ecc71',
    width: 11,
    height: 11,
    display: 'block',
    padding: 0,
    margin: 10,
    borderRadius: '50%',
    fontSize: 0,
    border: 0,
    cursor: 'pointer',
  },
};

const PagingDots = (props) => (
    <ul style={{...styles.listStyles}}>
      {PagingDots.getIndexes(props.slideCount, props.slidesToScroll).map(index => {
        return (
          <li style={{...styles.listItemStyles}} key={index}>
            <button
              style={{...styles.buttonStyles, opacity: props.currentSlide === index ? 1 : 0.5}}
              onClick={props.goToSlide.bind(null, index)}
            >
              &bull;
            </button>
          </li>
        );
      })}
    </ul>
  );
  PagingDots.getIndexes = (count, inc) => {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  };
  
  PagingDots.propTypes = {
    slideCount: PropTypes.number,
    slidesToScroll: PropTypes.number,
    goToSlide: PropTypes.func,
    currentSlide: PropTypes.number,
  };
  
  export default PagingDots;