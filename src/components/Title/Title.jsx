import PropTypes from 'prop-types';
import { TitleItem } from './Title.styled';

export const Title = ({ title }) => <TitleItem>{title}</TitleItem>;

Title.propTypes = {
  title: PropTypes.string,
};
