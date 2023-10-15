interface ParentProps {
  childComponent: React.ReactNode;
}

export const Card: React.FC<ParentProps> = (props) => {
  const { childComponent } = props;
  return (
    <div className="aspect-square m-0 p-0 flex items-center justify-center">
      <div className="w-4/5">{childComponent}</div>
    </div>
  );
};
