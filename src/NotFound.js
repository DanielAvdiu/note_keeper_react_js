import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Not Found</p>
      <Link to="/">
        Back to the homepage...
      </Link>
    </div>
  );
}

export default NotFound;