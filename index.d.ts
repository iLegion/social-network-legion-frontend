import { Auth as NuxtAuth } from '@nuxtjs/auth-next'

import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

declare module 'vue/types/vue' {
  interface Auth extends NuxtAuth {
    user: UserInterface & typeof NuxtAuth.prototype.user
  }
}
//
// declare module '@nuxt/types' {
//   interface Auth extends NuxtAuth {
//     user: UserInterface & typeof NuxtAuth.prototype.user
//   }
// }
//
// declare module 'vuex/types/index' {
//   interface Auth extends NuxtAuth {
//     user: UserInterface & typeof NuxtAuth.prototype.user
//   }
// }
