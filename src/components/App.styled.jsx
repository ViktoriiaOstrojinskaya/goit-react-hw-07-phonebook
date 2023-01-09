import styled from '@emotion/styled';

export const Box = styled.div`
  margin: ${p => p.theme.space[5]}px;
  width: 550px;
  height: '100vh';
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
