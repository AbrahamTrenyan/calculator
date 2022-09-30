import './Screen.css';
const Screen = ({ input, output }) => {
  return (
    <div className="screen">
      <h2 className="screen__calc" data-testid="calc">{input}</h2>
      <h1 className="screen__result" data-testid="result">
        {output}
      </h1>
    </div>
  );
};

export default Screen;
