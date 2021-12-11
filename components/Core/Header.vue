<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <div v-if="isAuth"
             class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/users"
                           class="nav-link">
                Users
              </router-link>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <router-link v-if="isAuth"
                         to="/posts/create"
                         class="btn btn-dark text-center me-2">
              <font-awesome-icon :icon="faPlusSquare" fixed-width />
            </router-link>
            <router-link v-if="isAuth"
                         to="/chat"
                         class="btn btn-dark text-center me-2">
                <font-awesome-icon :icon="faComments" fixed-width />
              </router-link>

            <Dropdown v-if="isAuth"
                      id="header-auth-dropdown"
                      theme="dark">
              <template v-slot:dropdown-button-content>
                <font-awesome-icon :icon="faUser" fixed-width />
              </template>

              <template v-slot:dropdown-list-content>
                <li>
                  <span class="dropdown-item disabled">{{ shortUserName }}</span>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/profile">Profile</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/settings">Settings</router-link>
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
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import Dropdown from "~/components/Dropdown/Dropdown.vue";
import Logout from "~/components/Auth/Logout.vue";

export default Vue.extend({
  components: {
    Dropdown,
    Logout
  },
  computed: {
    ...mapGetters('auth', ['isAuth', 'user']),

    faUser() {
      return faUser;
    },
    faComments() {
      return faComments;
    },
    faPlusSquare() {
      return faPlusSquare;
    },
    shortUserName(): string {
      return this.user.name.slice(0, 15) + "...";
    },
  }
})
</script>

<style lang="scss">
  .navbar {
      height: 8vh;
  }
</style>
