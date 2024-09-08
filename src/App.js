import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;

// function App() {
//   const title = "Blog Post";
//   const body = "This is my first App";
//   const comments = [
//     { ID: 1, text: "comment one" },
//     { ID: 2, text: "comment two" },
//     { ID: 3, text: "comment three" },
//   ];
//   const loading = false;
//   const showComments = true;
//   const comment = (
//     <div className="comments">
//       <h3>number of comments ({comments.length})</h3>
//       <ul>
//         {comments.map((Comment, index) => (
//           <li key={index}>comment.text</li>
//         ))}
//       </ul>
//     </div>
//   );
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>

//       <p>{body}</p>

//       {showComments && comment}

//       {/* <h1>My App</h1>; */}
//     </div>
//   );
// }
// export default App;
