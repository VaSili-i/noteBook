import React, { useEffect, Suspense, Profiler } from 'react';
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import { AuthCreators } from './store/reducers/auth/actions-creators'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import './style/App.css'

function App() {
  const dispatch = useDispatch()
  const { isLoading, error } = useTypedSelector(store => store.user)
  useEffect(() => {
    dispatch(AuthCreators.check())
  }, [])

  function callBack(id: any, phase: any, actualDuration: any) {
    console.log(`${id}: ${phase}: ${actualDuration}`)
  }

  if (isLoading) {
    return (
      <>
        <div className='cerkleFetch1'></div>
        <div className='cerkleFetch2'></div>
        <div className='cerkleFetch3'></div>
        <div className='cerkleFetch4'></div>
        <div className='cerkleFetch5'></div>

        <div className="background">
          <div className='turn'></div>

        </div>


        <div className='fetching'>
          F e t c h i n g !
        </div>
      </>
    )
  }
  return (
    <Suspense fallback={<>
      <div className='cerkleFetch1'></div>
      <div className='cerkleFetch2'></div>
      <div className='cerkleFetch3'></div>
      <div className='cerkleFetch4'></div>
      <div className='cerkleFetch5'></div>
      <div className='fetching'>
        F e t c h i n g !
      </div>
    </>}>
      <BrowserRouter >
        <div className='mativate'>
          Remember who are you! And remember what you decided to be!
        </div>
        <Navbar />
        <Profiler id="Navbar" onRender={callBack} />
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
