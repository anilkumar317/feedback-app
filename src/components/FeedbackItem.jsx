import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './Shared/Card';
import FeedbackContext from './context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display"> {item.rating} </div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="#333" />
      </button>
      <div className="text-display"> {item.text} </div>
    </Card>
  );
}
export default FeedbackItem;
