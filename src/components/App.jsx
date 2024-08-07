import TermCard from "./TermCard";
import emojipedia from "../emojipedia";

function createTermCard(termObj) {
  return (
    <TermCard
      key={termObj.id}
      emoji={termObj.emoji}
      name={termObj.name}
      description={termObj.meaning}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="title">
        &#8901; <span>emojipedia</span> &#8901;
      </h1>
      <dl className="dictionary">{emojipedia.map(createTermCard)}</dl>
    </>
  );
}

export default App;
