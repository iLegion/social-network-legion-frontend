import { LocalScheme } from "@nuxtjs/auth-next/dist/runtime";
import { HTTPRequest } from "@nuxtjs/auth-next";

import UserModel from "~/classes/Models/User/UserModel";

export default class DefaultScheme extends LocalScheme {
  async fetchUser (endpoint: HTTPRequest) {
    // Token is required but not available
    if (!this.check().valid) {
      return
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({})
      return
    }

    // Try to fetch user and then set
    return this.$auth.requestWith(
      this.name,
      endpoint,
      this.options.endpoints.user
    ).then((response) => {
      const user = this.getProp(response.data, this.options.user.property)

      // Transform the user object
      const customUser = new UserModel(user);

      // Set the custom user
      // The `customUser` object will be accessible through `this.$auth.user`
      // Like `this.$auth.user.fullName` or `this.$auth.user.roles`
      this.$auth.setUser(customUser)

      return response
    }).catch((error) => {
      this.$auth.callOnError(error, { method: 'fetchUser' })
    })
  }

  getProp(holder: any, propName: any) {
    if (!propName || !holder || typeof holder !== "object") {
      return holder;
    }
    if (propName in holder) {
      return holder[propName];
    }
    const propParts = Array.isArray(propName) ? propName : (propName + "").split(".");
    let result = holder;
    while (propParts.length && result) {
      result = result[propParts.shift()];
    }
    return result;
  }
}
