import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;

export const ListTitle = styled.p`
  margin-top: ${p => p.theme.space[5]}px;
`;

export const ContactItem = styled.p`
  font-style: italic;
  color: ${p => p.theme.colors.royalBlue};
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const ButtonDelete = styled.button`
  width: 85px;
  height: 30px;
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
