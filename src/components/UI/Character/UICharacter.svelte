<script lang="ts"></script>

<div class="UICharacter">
  <div class="title">Player name <b>[lvl]</b></div>
  <div class="bars">
    <div class="bar" />
    <div class="bar" />
  </div>
  <div class="grid">
    <div class="grid__item grid__item--neck" />
    <div class="grid__item grid__item--head" />
    <div class="grid__item grid__item--hands" />
    <div class="grid__item grid__item--hand-left" />
    <div class="grid__item grid__item--hand-right" />
    <div class="grid__item grid__item--body" />
    <div class="grid__item grid__item--feet" />
    <div class="grid__item grid__item--profile-picture" />
  </div>
</div>

<style lang="scss">
  .UICharacter {
    .title {
      text-align: center;
      margin-bottom: 0.5em;
    }
    .bars {
      margin-bottom: 15px;
    }
    .grid {
    }
  }
  .bars {
    display: grid;
    gap: 5px;
  }
  .bar {
    width: 100%;
    height: 5px;
    background-color: rgba(var(--rgba-bgc), 0.3);
  }
  .grid {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
      'neck pp head'
      'hand-left pp hands'
      'hand-left pp hand-right'
      'body pp feet';
    &__item {
      &--neck {
        grid-area: neck;
      }
      &--profile-picture {
        grid-area: pp;
      }
      &--head {
        grid-area: head;
      }
      &--hands {
        grid-area: hands;
      }
      &--hand-left {
        grid-area: hand-left;
      }
      &--hand-right {
        grid-area: hand-right;
      }
      &--body {
        grid-area: body;
      }
      &--feet {
        grid-area: feet;
      }
      background-color: rgba(var(--rgba-bgc), 0.3);
      cursor: pointer;
      &::after {
        content: '';
        display: block;
        padding-top: 50%;
      }
    }
  }
</style>
