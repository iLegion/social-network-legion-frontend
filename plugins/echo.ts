import Echo from "laravel-echo";
import Pusher from "pusher-js";
import LocalStorageService from "~/services/LocalStorageService";

interface Context {
  $config: any;
  app: any;
}

declare module 'vue/types/vue' {
  interface Vue {
    $echo: Echo
  }
}

export default ({ app, $config }: Context, inject: Function) => {
  inject('echo', new Echo({
    broadcaster: 'pusher',
    key: 'b089a5a7575fd7587b6f',
    cluster: 'eu',
    client: new Pusher('b089a5a7575fd7587b6f', {
      cluster: 'eu',
      authEndpoint: 'http://sn-legion.test/broadcasting/auth',
      auth: {
        headers: {
          Authorization: LocalStorageService.getToken()
        }
      }
    })
  }))
}
