import Card from '../components/Shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>This is Project</h1>
        <p>This is a React app to leave a feedback product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
