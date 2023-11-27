<template class="dark">
  <div class="grid grid-rows-2">
    <DropdownButton class="mb-4" />
    <NameChanger class="mb-10" />
  </div>
</template>
  
<script>
import { useDark, useToggle } from "@vueuse/core"
import DropdownButton from '@/components/DropdownButton.vue';
import NameChanger from '@/components/NameChanger.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark)

console.log(isDark.value);

export default {
  components: {
    DropdownButton,
    NameChanger
  }
}
</script>