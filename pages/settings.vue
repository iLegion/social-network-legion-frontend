<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col mt-3">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active text-reset"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true">
              Main
            </button>
            <button class="nav-link text-reset"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false">
              Privacy
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <Main :user="user" />
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <Privacy :user="user" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from "vuex";

import Main from "~/components/Settings/Main.vue";
import Privacy from "~/components/Settings/Privacy.vue";

export default Vue.extend({
  middleware: ['authenticated'],
  components: {
    Main,
    Privacy
  },
  computed: {
    ...mapGetters('auth', ['user'])
  }
})
</script>
