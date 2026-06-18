import { Link } from "react-router-dom";

function StateCard({ state }) {
  return (
    <div className="state-card">

      <div className="state-image">
        State Image
      </div>

      <div className="state-content">

        <h2>{state.name}</h2>

        <p>{state.description}</p>

        <Link
  to={`/state/${state.name.toLowerCase().replace(/\s/g,"-")}`}
  className="state-btn"
>
  Explore State →
</Link>

      </div>

    </div>
  );
}

export default StateCard;