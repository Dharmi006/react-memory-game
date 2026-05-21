export default function ImageCard({ image, name, handleClick }) {
  return (
    <div className="pokemon-card" onClick={handleClick}>
      <div className="Image">
        <img src={image} alt={name} />
      </div>

      <div className="card-name">
        <p>{name}</p>
      </div>
    </div>
  );
}