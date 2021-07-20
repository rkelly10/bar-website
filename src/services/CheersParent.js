import Child from "./CheersChild.js";

export default function CheersParent() {
  function clickAlert() {
    alert("Cheers!");
  }
  return (
    <div className="Cheers">
      <Child data="Have a Pint!" onChildClick={clickAlert} />
    </div>
  );
}
