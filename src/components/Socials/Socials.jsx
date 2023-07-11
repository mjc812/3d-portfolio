import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faUnity } from '@fortawesome/free-brands-svg-icons';

function Socials() {
  return (
    <div className="flex items-center justify-center h-full">
      <ul className="flex space-x-4">
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
            <div className="icon-background">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
            <div className="icon-background">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://unity.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
            <div className="icon-background">
              <FontAwesomeIcon icon={faUnity} size="2x" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
