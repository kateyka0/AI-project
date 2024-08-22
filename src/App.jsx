import { Routes, Route } from "react-router-dom";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// function App() {
//   return (
//     <div>
//       <Navigation />
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<MovieCast />} />
//             <Route path="reviews" element={<MovieReviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import ChatWindow from "./component/ChatSection/ChatSection";
import InputBar from "./component/InputBar/InputBar";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);

    // Имитируем ответ от AI
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Відповідь від AI", sender: "ai" },
      ]);
    }, 1000);
  };

  return (
    <div className="container">
     <Header />
      <div className="main-content">
        <div className="">
          <Sidebar />
          <div className="chat-container ">
          <ChatWindow messages={messages} />
          <InputBar onSendMessage={handleSendMessage} />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
