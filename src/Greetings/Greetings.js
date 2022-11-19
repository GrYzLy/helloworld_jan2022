function newName(name)
{
  return name + " New"
}

function Greetings(props) {
  return (
    
  <div>
    
    <div className="greetings" style={{"fontWeight" : "bold", "color" : "blue"}}>Hello {newName(props.name)}!</div>
  </div>
  );
}

export default Greetings;
