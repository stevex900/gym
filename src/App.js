import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import { Route } from "react-router-dom";
import {
  PrimaryContainer,
  SecondaryContainer,
  MainContainer,
} from "./app.styles";
import Header from "./components/header/Header";
import ArrangeTraining from "./pages/arrange-training/ArrangeTraining";
import History from "./pages/history/History";
import Start from "./pages/start/Start";
import ViewTraining from "./pages/view-training/ViewTraining";
import LogIn from "./components/log-in/LogIn";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase";

// const App = () => {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser({ currentUser: user });
//       console.log("Zalogowany uzytkownik: ", user);
//     });
//     return () => unsubscribe();
//   }, []);
//   return (
//     <>
//       <MainContainer>
//         <PrimaryContainer>
//           <Header currentUser={currentUser} />
//         </PrimaryContainer>
//         <SecondaryContainer>
//           <Route path="/" component={Start} exact={true} />
//           <Route path="/arrangetraining" component={ArrangeTraining} />
//           <Route path="/viewtraining" component={ViewTraining} />
//           <Route path="/history" component={History} />
//           <Route path="/login" component={LogIn} />
//         </SecondaryContainer>
//       </MainContainer>
//     </>
//   );
// };

// export default App;

//===================================================================================
//===================================================================================
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <MainContainer>
          <PrimaryContainer>
            <Header currentUser={this.state.currentUser} />
          </PrimaryContainer>
          <SecondaryContainer>
            <Route path="/" component={Start} exact={true} />
            <Route path="/arrangetraining" component={ArrangeTraining} />
            <Route path="/viewtraining" component={ViewTraining} />
            <Route path="/history" component={History} />
            <Route path="/login" component={LogIn} />
          </SecondaryContainer>
        </MainContainer>
      </>
    );
  }
}

export default App;
