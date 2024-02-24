/**
*
* <div id="parent">
*   <div id="child1">
*      <h1>"I am a h1 tag"</h1>
*      <h2>"I am a h2 tag"</h2>
*    </div>
     id="child2">
*      <h1>"I am a h1 tag"</h1>
*      <h2>"I am a h2 tag"</h2>
*    </div>
*  </div>
*/

const parent = React.createElement(
    "h1", 
   {id:"parent"},
    React.createElement( "h1", {id:"child1"}, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement( "h1", {id:"child2"}, [
     React.createElement("h1", {}, "I am an h1 tag"),
     React.createElement("h2", {}, "I am an h2 tag")
   ])
  );
  console.log(parent);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
 