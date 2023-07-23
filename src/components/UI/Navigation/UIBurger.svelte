<script lang="ts">
export let value: boolean;
</script>

<div
  class="UIBurger"
  class:UIBurger--toggled={!value}
  on:keydown
  on:click={() => (value = !value)}
>
  <span />
  <span />
  <span />
</div>

<style lang="scss">
.UIBurger {
  position: relative;
  width: 40px;
  height: 40px;
  border: 2px solid var(--contrast);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 75%;
    height: 3px;
    border-radius: 3px;
    background-color: var(--contrast);
    position: absolute;
    transition: 0.3s;
    &:nth-child(1) {
      transform: translateY(-200%);
    }
    &:nth-child(2) {
    }
    &:nth-child(3) {
      transform: translateY(200%);
    }
  }
  &--toggled {
    span {
      &:nth-child(1) {
        transform: translateY(0) rotate(45deg);
      }
      &:nth-child(2) {
        scale: 0;
      }
      &:nth-child(3) {
        transform: translateY(0) rotate(-45deg);
      }
    }
  }
}
</style>
