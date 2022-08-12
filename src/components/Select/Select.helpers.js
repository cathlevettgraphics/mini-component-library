export function getDisplayedValue(value, children) {
  const childArray = children;
  const selectedChild = childArray.find((child) => child.props.value === value);

  return selectedChild.props.children;
}
