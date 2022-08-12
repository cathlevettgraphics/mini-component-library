import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    inputHeight: 24,
    paddingLeft: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    inputHeight: 36,
    paddingLeft: 32,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`unknown properties passed to IconInput ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper $height={styles.iconSize}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>
      <Input
        {...delegated}
        $width={width}
        $fontSize={`${styles.fontSize}px`}
        $borderThickness={`${styles.borderThickness}px`}
        $inputHeight={`${styles.inputHeight}px`}
        $paddingLeft={`${styles.paddingLeft}px`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label(
  ({ $width }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    color: ${COLORS.gray700};

    &:hover {
      color: ${COLORS.black};
    }
  `,
);

const IconWrapper = styled.div(
  ({ $height }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: ${`${$height}px`};
  `,
);

const Input = styled.input(
  ({ $fontSize, $width, $borderThickness, $inputHeight, $paddingLeft }) => css`
    width: ${`${$width}px}`};
    height: ${$inputHeight};
    border: none;
    border-bottom: ${$borderThickness} solid ${COLORS.black};
    border-left: 0;
    padding-left: ${$paddingLeft};
    color: ${COLORS.gray700};
    font-size: ${$fontSize};
    font-weight: 700;
    outline-offset: 2px;
    color: inherit;

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `,
);

export default IconInput;
