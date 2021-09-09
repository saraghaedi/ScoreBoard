import "./Player.scss";
export default function Player(props) {
  const onClickIncrement = () => {
    console.log("Click the button for player id = ", props.id);
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} (score: {props.score}){" "}
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
}
