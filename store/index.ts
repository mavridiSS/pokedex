import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import reducer from "./reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const persistConfig = {
  key: "pokemon",
  storage,
  whitelist: ["myPokemons", "lastPokemonIndex"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export function makeStore() {
  return configureStore({
    reducer: { pokemon: persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const persistor = persistStore(store);

export default store;
