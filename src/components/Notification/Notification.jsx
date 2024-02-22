import PropTypes from 'prop-types';
import { TextMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <TextMessage>{message}</TextMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
