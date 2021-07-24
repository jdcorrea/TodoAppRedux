const ACTIVE_CLASSNAMES = "list__item list__item--active";
const INACTIVE_CLASSNAMES = "list__item";

const HeaderOption = (props) => {
  const activeOption = (props && props.activeOption) || "";
  const optionText = (props && props.optionText) || "";
  const option = (props && props.option) || "";
  const path = (props && props.path) || "";
  const onClick = (props && props.onClick) || null;
  const isActive = activeOption === option;
  const isOnClickFunction = typeof onClick === "function";
  const itemClassNames = isActive ? ACTIVE_CLASSNAMES : INACTIVE_CLASSNAMES;

  if (onClick && isOnClickFunction) {
    return (
      <li className={itemClassNames} onClick={() => onClick(option, path)}>
        {optionText}
      </li>
    );
  }

  return null;
};

export default HeaderOption;
