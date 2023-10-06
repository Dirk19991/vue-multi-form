<template>
  <fragment>
    <div class="wrapper">
      <div class="steps">
        <div class="step">
          <div class="number">1</div>
          <div class="step__info">
            <div>Step 1</div>
            <div>Your Info</div>
          </div>
        </div>
        <div class="step">
          <div class="number">2</div>
          <div class="step__info">
            <div>Step 2</div>
            <div>Select Plan</div>
          </div>
        </div>
        <div class="step">
          <div class="number">3</div>
          <div class="step__info">
            <div>Step 3</div>
            <div>Add-Ons</div>
          </div>
        </div>
        <div class="step">
          <div class="number">4</div>
          <div class="step__info">
            <div>Step 4</div>
            <div>Summary</div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: calc(100% - 20px);
  width: 274px;
  position: relative;
  padding: 10px;
  background-image: url('../assets/bg-sidebar-desktop.svg');
  margin: 10px;
  border-radius: 20px;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
.steps {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: white;
  font-size: 1.1rem;
  padding: 20px;
}

.step {
  display: flex;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
}

.number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

.step__info {
  > div:first-child {
    font-size: 1rem;
    opacity: 0.7;
  }
}
</style>
