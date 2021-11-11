<template>
  <div class="dialog-component bg-light">
    <div class="content p-2">
        <p>Lorem ipsum magna&nbsp;&mdash; curabitur&nbsp;&mdash; sodales malesuada nibh pellentesque metus pellentesque, leo adipiscing&nbsp;&mdash; nec odio sit: at orci bibendum. Commodo ipsum sagittis eros quam nibh metus risus tellus cursus amet molestie et ligula pharetra, morbi. Duis eget enim, sodales&nbsp;&mdash; malesuada fusce et, magna tempus lorem, in fusce urna. Enim proin metus mattis sit nam&nbsp;&mdash; duis ligula amet vivamus lorem pellentesque rutrum auctor curabitur nec, sed. Elementum ligula nam commodo, et, rutrum gravida, magna bibendum morbi lorem, elementum sit ornare congue gravida malesuada, at risus. Justo nibh vulputate quam elementum malesuada urna malesuada, elementum morbi.</p><p>Maecenas vitae duis leo eget curabitur morbi lorem a sagittis tellus mattis sagittis ligula donec bibendum sagittis ligula vulputate ligula et amet morbi, at. Cursus risus metus lorem vulputate sem malesuada cursus ipsum vitae sodales pellentesque nibh et. Risus pellentesque ligula pellentesque, enim: donec lectus congue, nibh magna urna&nbsp;&mdash; eget tempus et. Vivamus tempus in mattis ornare commodo integer proin magna&nbsp;&mdash; congue risus.</p><p>Sem ligula justo elementum fusce, tellus sit quisque sodales in leo porta massa sodales eu, vivamus ipsum. Mauris sit commodo odio cursus nulla maecenas vitae ut justo leo ornare diam donec magna pellentesque, tellus enim, adipiscing risus. Nec tellus magna: vivamus auctor eros magna auctor enim vulputate morbi. Sed integer et, porta metus, arcu lectus magna duis rutrum&nbsp;&mdash; sodales nec nibh metus sit sem eros nulla bibendum ornare odio pellentesque. Pharetra sed ligula, adipiscing molestie eros orci pellentesque metus pellentesque eu leo sem odio porttitor auctor nec ultricies pharetra. Sem non, auctor ligula sit rutrum nibh massa tellus nibh&nbsp;&mdash; porttitor non.</p><p>Odio nulla quisque odio, quam massa porta&nbsp;&mdash; quisque pellentesque integer gravida mauris enim rutrum metus curabitur morbi molestie: quisque congue. A, commodo quam nulla maecenas risus sapien tellus integer ultricies sit nec eget mauris ipsum. Pharetra proin elementum lectus ipsum diam ultricies ut porttitor adipiscing sem auctor lectus diam: vivamus, donec in justo: tempus pharetra morbi at metus orci. Nulla proin lectus, enim porta mattis proin, mauris, molestie vulputate sagittis porta mauris&nbsp;&mdash; nec magna sodales donec elementum, integer. Orci mauris elementum donec metus ornare eros cursus congue, ornare eu. Orci vivamus molestie elementum eget curabitur molestie&nbsp;&mdash; bibendum, risus magna arcu rutrum congue ultricies morbi fusce sapien molestie. Vivamus curabitur eu enim ultricies sem vitae, risus tempus cursus diam amet maecenas sapien lorem, ligula eu porttitor sapien, pellentesque risus.</p><p>Cursus eget nam sit, eu, eget&nbsp;&mdash; elementum, duis eros vulputate, tempus, diam vitae sed adipiscing magna, amet porta eu pellentesque justo. Ipsum bibendum eget, justo ut auctor morbi, magna in mauris non. Odio morbi odio&nbsp;&mdash; leo, ipsum tempus ligula risus: lectus eros mattis nulla pellentesque pharetra rutrum et nam quam. Lorem metus enim, non adipiscing ultricies adipiscing metus pharetra commodo elementum vitae arcu.</p> 
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dialog',
  
})
</script>

<style lang="scss">
  .dialog-component {
    .content {
      height: 68.8vh;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background-color: #f9f9fd;
      }

      &::-webkit-scrollbar-thumb {
        background-color: gray;
      }
    }
  }
</style>