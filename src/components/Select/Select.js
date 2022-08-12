import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2} size={24}></Icon>
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

// Sits on top of the PresentationalSelect
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

// Set the presentation style of our select while the native select will handle functionality
const PresentationalSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-size: 1rem;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 52px;

  /* '+' is the adjacent sibling combinator. It will select the directly adjacent child. In this case '&' is the current element */

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator */

  /* style our presentational element when the real element is focused */
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
