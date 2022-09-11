export default function Buttons(props) {
  return (
    <div>
      <button value={-5} onClick={props.handleIterate}>
        Far Back
      </button>
      <button value={-1} onClick={props.handleIterate}>
        Back
      </button>
      <button value={1} onClick={props.handleIterate}>
        Next
      </button>
      <button value={5} onClick={props.handleIterate}>
        More Next
      </button>
    </div>
  );
}
