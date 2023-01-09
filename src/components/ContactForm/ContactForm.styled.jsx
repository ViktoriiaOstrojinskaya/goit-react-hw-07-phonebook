import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormInput = styled.input`
  width: auto;
  height: 25px;
  margin-left: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};
  background-color: ${p => p.theme.colors.snow};

  &:focus {
    outline: transparent;
  }
`;

export const ButtonAddContact = styled.button`
  width: 85px;
  height: auto;

  font-size: ${p => p.theme.fontSizes.xs};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.steelBlue};
  color: ${p => p.theme.colors.royalBlue};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.royalBlue};
    color: ${p => p.theme.colors.white};
  }
`;
