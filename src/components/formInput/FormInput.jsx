import React from 'react';
import {
  GroupContainer,
  FormInputField,
  FormInputLabel,
} from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputField {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value?.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
