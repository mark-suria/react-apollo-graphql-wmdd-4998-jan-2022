import './App.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Title from './components/layout/Title'
import CarTitle from './components/layout/CarTitle'
import AddContact from './components/forms/AddContact'
import AddCar from './components/forms/AddCar'
import Contacts from './components/lists/Contacts'
import Car from './components/lists/Cars'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <Title />
      <AddContact />
      <Contacts />
    </div>

    <div className='App'>
      <CarTitle />
      <AddCar />
      <Car />
    </div>

  </ApolloProvider>
)

export default App
