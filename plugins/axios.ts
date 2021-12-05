import { NuxtAxiosInstance } from "@nuxtjs/axios";

interface Context {
  $axios: NuxtAxiosInstance;
  $config: any;
  app: any;
}

export default function ({ $axios, $config, app }: Context) {
  $axios.setBaseURL($config.apiUrl);
  $axios.onResponseError((e) => {
    if (e.response?.status === 401) {
      app.router.push('/auth');
    } else if (e.response?.status === 500) {
      app.router.push('/500');
    }
  });
}
