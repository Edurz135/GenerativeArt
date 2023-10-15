interface ParentProps {
  childComponent: React.ReactNode;
}

export const Card: React.FC<ParentProps> = (props) => {
  const { childComponent } = props;
  return <div className="aspect-square m-0 p-0">{childComponent}</div>;
};
