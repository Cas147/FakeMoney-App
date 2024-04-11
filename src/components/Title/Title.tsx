const Title = ({ text }: { text: string }): JSX.Element => {
  return (
    <h1 className="text-2xl md:text-3xl pl-2 mb-8 border-l-4  font-sans font-bold border-amber-400 text-white">
      {text}
    </h1>
  );
};

export default Title;
