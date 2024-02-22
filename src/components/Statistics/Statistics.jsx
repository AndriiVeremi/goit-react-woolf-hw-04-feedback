import PropTypes from 'prop-types';
import { FcLike, FcDislike, FcLikePlaceholder } from 'react-icons/fc';
import { ListStatistic, ItemStatistic, ItemIcon } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, positive, total }) => {
  return (
    <ListStatistic>
      <ItemStatistic>
        <ItemIcon>
          <FcLike />
        </ItemIcon>
        Good: {good}
      </ItemStatistic>
      <ItemStatistic>
        <ItemIcon>
          <FcLikePlaceholder />
        </ItemIcon>
        Neutral: {neutral}
      </ItemStatistic>
      <ItemStatistic>
        <ItemIcon>
          <FcDislike />
        </ItemIcon>
        Bad: {bad}
      </ItemStatistic>
      <ItemStatistic>Total: {total}</ItemStatistic>
      <ItemStatistic>Positive feedback: {positive}%</ItemStatistic>
    </ListStatistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
