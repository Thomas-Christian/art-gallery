export default function Gallery(props) {
  if (props.isPublicDomain === true) {
    return (
      <div>
        <img
          src={props.objectImg}
          alt={props.title}
          style={{ width: "50em" }}
        />
        <p>Painted By: {props.artist}</p>
      </div>
    );
  } else
    return (
      <div>
        <h1> IMAGE UNAVAILABLE </h1>
      </div>
    );
}
