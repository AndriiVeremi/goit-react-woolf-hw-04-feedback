import PropTypes from 'prop-types';
import {Container, Title, Content} from './Section.styled'

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title> 
      <Content>{children}</Content>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
