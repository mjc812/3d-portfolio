import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faUnity } from '@fortawesome/free-brands-svg-icons';
import { socials } from "../../constants"; //hidden sm:block
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Socials = ({socialsList, description}) => {
  return (
    <div className="h-full">
      <ul className="items-center h-full flex space-x-4">
        {socialsList.map((social, index) => {
          if (social.name == socials.github) {
            return (
              <div key={index} className="flex flex-row space-x-3">
                <p className='text-secondary text-[13px] leading-[30px] max-w-full'>
                  GITHUB REPO:
                </p>
                <li>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                    <div className="icon-background">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </div>
                  </a>
                </li>
              </div>
            );
          } else if (social.name == socials.unity) {
            return (
              <div key={index} className="flex flex-row space-x-3">
                <p className='text-secondary text-[13px] leading-[30px] max-w-full'>
                  PLAYABLE DEMO:
                </p>
                <li>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                    <div className="icon-background">
                      <FontAwesomeIcon icon={faUnity} size="2x" />
                    </div>
                  </a>
                </li>
              </div>
            );
          } else if (social.name == socials.documentation) {
            return (
              <div key={index} className="flex flex-row space-x-3">
                <p className='text-secondary text-[13px] leading-[30px] max-w-full'>
                  DOCUMENTATION:
                </p>
                <li>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                    <div className="icon-background">
                      <FontAwesomeIcon icon={faFile} size="2x" />
                    </div>
                  </a>
                </li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Socials;
