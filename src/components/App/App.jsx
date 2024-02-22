import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = good =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage(good)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

//-------------------------------------------------------------------------------

// import { Component } from 'react';
// import { Section } from '../Section/Section';
// import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
// import { Statistics } from '../Statistics/Statistics';
// import { Notification } from '../Notification/Notification';
// import { Container } from './App.styled';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     this.setState({
//       [e]: this.state[e] + 1,
//     });
//   };

//   countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

//   countPositiveFeedbackPercentage = good =>
//     Math.round((good * 100) / this.countTotalFeedback(this.state));

//   render() {
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback(this.state) ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback(this.state)}
//               positive={this.countPositiveFeedbackPercentage(this.state.good)}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
