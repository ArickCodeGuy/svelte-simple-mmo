<script lang="ts">
import type {
  LivingComputedStats,
  LivingStats,
} from '@/backend/Controllers/Livings/types';
import UiCharacterStats from './UICharacterStats.svelte';

export let name: string = '';
export let lvl: number = 0;
export let stats: LivingStats;
export let currentHp: number = 0;
export let computedStats: LivingComputedStats;
</script>

<div class="UICharacter">
  <div class="title">{name} <b>[{lvl}]</b></div>
  <div class="bars">
    <div class="bar">
      <div class="bar__line" />
      <div class="bar__bottom">
        {currentHp} / {computedStats.maxHp}
      </div>
    </div>
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
  <UiCharacterStats {stats} />
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
    margin-bottom: 1em;
  }
}
.bars {
  display: grid;
  gap: 5px;
}
.bar {
  &__line {
    width: 100%;
    height: 5px;
    background-color: rgba(var(--rgba-bgc), 0.3);
  }
  &__bottom {
    font-size: 10px;
    text-align: right;
  }
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
