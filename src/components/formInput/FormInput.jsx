import React from 'react';
import {
  GroupContainer,
  FormInput as StyledInput,
  FormInputLabel,
} from './Forminput.styles';

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
