import { NuxtAxiosInstance } from "@nuxtjs/axios";

interface Context {
  $axios: NuxtAxiosInstance;
  $config: any;
}

export default function ({ $axios, $config }: Context) {
  $axios.setBaseURL($config.apiUrl);
}
