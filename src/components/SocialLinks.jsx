import PropTypes from "prop-types";

const SocialLinks = ({
  href,
  label,
  icon: IconComponent,
  aClass,
  icnClass,
}) => (
  <span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={aClass}
    >
      <IconComponent className={icnClass} />
    </a>
  </span>
);

export default SocialLinks;

SocialLinks.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  aClass: PropTypes.string,
  icnClass: PropTypes.string,
};
