import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

function LottieControl({
  data, width, height, loop = true,
}) {
  const defaultOptions = {
    loop,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      isPaused={false}
      isStopped={false}
      options={defaultOptions}
      height={height}
      width={width}
    />
  );
}

LottieControl.defaultProps = {
  width: 350,
  height: 200,
};

LottieControl.propTypes = {
  // data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};


export default LottieControl;
