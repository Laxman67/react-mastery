import React from 'react';
import { GroupContainer, FormInputLabel } from './forminput.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <StyledInput {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value?.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
