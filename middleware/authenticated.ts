import { ContextInterface } from "~/interfaces/ContextInterface";

export default function ({ route, store, redirect }: ContextInterface) {
  if (!store.getters['auth/isLoading'] && !store.getters['auth/isAuth']) {
    if (route.path !== '/auth') {
      return redirect('/auth');
    }
  }
}
