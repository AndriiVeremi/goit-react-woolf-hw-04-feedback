import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
