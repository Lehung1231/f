import { configureStore } from '@reduxjs/toolkit'
import productsAPI from './services/product.service'


export const store = configureStore({
  reducer: {
    "products": productsAPI.reducer
  },
  middleware: defaultMiddleware => defaultMiddleware().concat(productsAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
