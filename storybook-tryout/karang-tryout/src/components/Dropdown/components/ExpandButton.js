import React from 'react';
import { bool, node } from 'prop-types';
import styled, { css } from 'styled-components';

import VmenuIcon from 'components/Icon/icons/content/vmenu';
import { nobel } from 'styles/colors';

const Button = styled.button`
  appearance: none;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${nobel['700']};
  cursor: pointer;
  border-radius: 100%;
  outline: 0;

  &:hover {
    background-color: ${nobel['100']};
  }

  &:focus {
    background-color: ${nobel['200']};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;

      &:hover,
      &:focus {
        background: transparent;
      }
    `};
`;

const ExpandButton = ({ icon, disabled, ...remainProps }) => (
  <Button disabled={disabled} {...remainProps}>
    {icon}
  </Button>
);

ExpandButton.propTypes = {
  icon: node,
  disabled: bool,
};

ExpandButton.defaultProps = {
  icon: <VmenuIcon size={36} />,
  disabled: false,
};

export default ExpandButton;
