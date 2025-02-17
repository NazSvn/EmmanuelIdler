import PropTypes from "prop-types";

const SocialLinks = ({ href, label, icon: IconComponent }) => (
  <span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-block focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1]"
    >
      <IconComponent className="m-1 inline size-11 cursor-pointer transition-all hover:size-12 hover:text-[#45CB85]" />
    </a>
  </span>
);

export default SocialLinks;

SocialLinks.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};
