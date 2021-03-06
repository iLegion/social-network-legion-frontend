<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">SN "Legion"</router-link>
        <button v-if="$auth.loggedIn"
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="$auth.loggedIn"
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
            <router-link v-if="$auth.loggedIn"
                         to="/posts/create"
                         class="btn btn-dark text-center me-2">
              <font-awesome-icon :icon="faPlusSquare" fixed-width />
            </router-link>
            <router-link v-if="$auth.loggedIn"
                         to="/chat"
                         class="btn btn-dark text-center me-2">
                <font-awesome-icon :icon="faComments" fixed-width />
              </router-link>

            <Dropdown v-if="$auth.loggedIn"
                      id="header-auth-dropdown"
                      theme="dark">
              <template v-slot:dropdown-button-content>
                <font-awesome-icon :icon="faUser" fixed-width />
              </template>

              <template v-slot:dropdown-list-content>
                <li>
                  <span class="dropdown-item disabled mt-2 text-center">{{ shortUserName }}</span>
                  <hr/>
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
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import Dropdown from '~/components/Dropdown/Dropdown.vue';
import Logout from '~/components/Auth/Logout.vue';

export default Vue.extend({
  components: {
    Dropdown,
    Logout
  },
  computed: {
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
      const value = this.$auth.user.name;

      return value && value.length > 15 ? value.slice(0, 15) + "..." : value;
    },
  }
})
</script>

<style lang="scss" scoped>
  .navbar {
    height: 8vh;

    .dropdown-item {
      &:focus {
        color: #1e2125;
        background-color: #e9ecef;
      }
    }
  }
</style>
