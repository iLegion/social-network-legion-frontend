<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">SC "Legion"</router-link>
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <div>
              <Dropdown v-if="isAuth">
                <template v-slot:dropdown-button-content>
                  <font-awesome-icon :icon="faUser" fixed-width />
                </template>

                <template v-slot:dropdown-list-content>
                  <li>
                    <router-link class="dropdown-item" to="/profile">Profile</router-link>
                  </li>
                  <li>
                    <Logout>
                      <button type="button" class="dropdown-item">Log out</button>
                    </Logout>
                  </li>
                </template>
              </Dropdown>

              <router-link v-else to="/auth">
                <font-awesome-icon :icon="faUser" fixed-width />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { faUser } from '@fortawesome/free-regular-svg-icons'

import Dropdown from "~/components/Dropdown/Dropdown.vue";
import Logout from "~/components/Auth/Logout.vue";

export default Vue.extend({
  components: {
    Dropdown,
    Logout
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),

    faUser() {
      return faUser;
    }
  }
})
</script>
