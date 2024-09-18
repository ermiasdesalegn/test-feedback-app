import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import ABoutIconLink from "./components/ABoutIconLink";
// import FeedbackContext from "./context/FeedbackConext";
import { FeedbackProvider } from "./context/FeedbackConext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <ABoutIconLink />
      </Router>
    </FeedbackProvider>
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
