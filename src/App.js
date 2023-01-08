import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './App.css'
import {Home} from './Pages/Home/Home'
import AddContact from './Pages/AddContact/AddContact'
import ViewContact from './Pages/ViewContact/View-Contact'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav className='container'>
         
              <Link to='/contact'>Contacts</Link>
            
              <Link to='/add-contact'>Add Contact</Link>
        
        </nav>
        <Routes>
          <Route path='/add-contact' element={<AddContact />} />
          <Route path="/contact/:id" element={<ViewContact/>}/>
         
          {/* <Route path='/rq-super-heroes' element={ <RQSuperHeroesPage />}/> */}
          <Route path='/contact' element={<Home/>} />
            
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  )
}

export default App
