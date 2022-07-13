import { ArrowBackOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './watch.scss';

export default function Watch() {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe
        className="video"
        autoPlay
        progress="true"
        controls
        title="video"
        src={movie}
      />
    </div>
  );
}
