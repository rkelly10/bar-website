
export default function CheersChild({ data, onChildClick }) {
    return (
      <div className="child">
        <button onClick={onChildClick}>{data}</button>
      </div>
    );
  }
  