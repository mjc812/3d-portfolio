import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faUnity } from '@fortawesome/free-brands-svg-icons';
import { socials } from "../../constants";

const Socials = (socialsList, description) => {
  return (
    <div className="flex items-center h-full">
      <ul className="flex space-x-4">
        {socialsList.socials.map((social, index) => {
          if (social.name == socials.github) {
            return (
              <li key={index}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                  <div className="icon-background">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </div>
                </a>
              </li>
            );
          } else if (social.name == socials.youTube) {
            return (
              <li key={index}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                  <div className="icon-background">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </div>
                </a>
              </li>
            );
          } else if (social.name == socials.unity) {
            return (
              <li key={index}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                  <div className="icon-background">
                    <FontAwesomeIcon icon={faUnity} size="2x" />
                  </div>
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Socials;
