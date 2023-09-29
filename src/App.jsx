import HotelList from "./components/HotelList.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Route, Switch} from "wouter";
import HotelDetails from "./components/HotelDetails.jsx";
import {Toaster} from "react-hot-toast";

const client = new QueryClient();

function App() {
  return (
   <>
    <Toaster position="top-left" reverseOrder={false}/>
    <QueryClientProvider client={client}>
      <Switch>
         <Route path="/" component={HotelList} />
        <Route path="/hotel/:id" component={HotelDetails} />
      </Switch>
    </QueryClientProvider>
   </>
  )
}

export default App
