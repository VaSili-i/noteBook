import React from 'react';
import {publicRouter, privateRouter} from '../routers'
import {Routes, Route} from 'react-router-dom'
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Profiler} from 'react';

const AppRouter = function () {
    const {isAuth} = useTypedSelector(store => store.user)


    return (
        <Routes>
            {publicRouter.map(({path, Element}) =>
                <>
                    <Route path={path} key={path} element={<Element/>}/>

                </>
            )}

            {isAuth && privateRouter.map(({path, Element}) =>
                <>
                    <Route path={path} key={path} element={<Element/>}/>

                </>
            )}
        </Routes>

    )
}

export default AppRouter