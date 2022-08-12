/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`unknown height passed to ProgressBar ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      $padding={`${styles.padding}px`}
      $borderRadius={`${styles.radius}px`}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar $wide={`${value}%`} $height={`${styles.height}px`} />
      </BarWrapper>
    </Wrapper>
  );
};

// const Wrapper = styled.div(({ $padding, $borderRadius }) => css``);

const Wrapper = styled.div(
  ({ $padding, $borderRadius }) => css`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${$padding};
    border-radius: ${$borderRadius};
  `,
);

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is nearly full */
  overflow: hidden;
`;

const Bar = styled.div(
  ({ $wide, $height }) => css`
    width: ${$wide};
    height: ${$height};
    background-color: ${COLORS.primary};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px 0 0 4px;
  `,
);

export default ProgressBar;
