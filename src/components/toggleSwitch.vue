<template>
  <div class="toggle-switch-container flex items-center">
    <input type="checkbox" id="toggle-switch" v-model="isChecked"
      class="toggle-input appearance-none w-10 h-5 bg-gray-400 rounded-3xl relative cursor-pointer outline-none checked:bg-black">
    <span class="toggle-state font-bold">{{ isChecked ? '' : '' }}</span>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isChecked: false // Initialize the switch to the OFF state
    };
  }
};
</script>
  
<style>
.toggle-input::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  left: 2px;
  transition: 0.2s;
}

.toggle-input:checked::before {
  left: 20px;
  /* Move the thumb to the right when checked */
}
</style>
  
  