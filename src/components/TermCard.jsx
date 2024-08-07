function TermCard(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Sparkles">
          {props.emoji}
        </span>
        <h3 className="termCaption">{props.name}</h3>
      </dt>
      <dd className="termDescription">{props.description}</dd>
    </div>
  );
}

export default TermCard;
