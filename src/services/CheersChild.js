
export default function CheersChild({ data, onChildClick }) {
    return (
      <div class="child">
        <button onClick={onChildClick}>{data}</button>
      </div>
    );
  }
  