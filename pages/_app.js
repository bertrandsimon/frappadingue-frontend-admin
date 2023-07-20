import '../styles/globals.css';
import Head from 'next/head';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import hiddenArticles from '../reducers/hiddenArticles';


const reducers = combineReducers({ hiddenArticles });
const persistConfig = { key: 'hackatweet', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 
 const persistor = persistStore(store);

 const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFF00', // Yellow color code
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Head>
              <title>Frappadingue : courses à obstacles</title>
            </Head>
            <Component {...pageProps} />
            </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
