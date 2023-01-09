import styled from '@emotion/styled';

export const FilterInput = styled.input`
  width: auto;
  height: 25px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};
  margin-left: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.snow};

  &:focus {
    outline: transparent;
  }
`;
