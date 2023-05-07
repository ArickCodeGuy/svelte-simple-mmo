<script lang="ts">
import UiCharacterStats from './UICharacterStats.svelte';
import { onMount } from 'svelte';
import { livingCurrentHealth } from '@/backend/Controllers/Livings/utils/livingCurrentHealth';
import { LIVING_LEVELS } from '@/backend/Controllers/Livings/constants';
import type { UICharacterProps } from './types';
import type { LivingStats } from '@/backend/Controllers/Livings/types';

export let props: UICharacterProps;
/**
 * if false show additional info as you are this character
 */
export let isView: boolean = false;
export let statsConfirm: (updatedStats: LivingStats) => void = () => undefined;

let actualHp = livingCurrentHealth(props);
$: characterHealth = isView ? props.computedStats.health : actualHp;
$: healthPercent = characterHealth / props.computedStats.health;

onMount(() => {
  const interval = window.setInterval(() => {
    if (!props) return;

    actualHp = livingCurrentHealth(props);

    if (actualHp === props.computedStats.health) {
      clearInterval(interval);
    }
  }, 100);

  return () => {
    clearInterval(interval);
  };
});
</script>

<div class="UICharacter">
  {#if props}
    <div class="title">{props.name} <b>[{props.lvl}]</b></div>
    <div class="bars">
      <div class="bar">
        <div class="bar__line" style:--scale={healthPercent} />
        <div class="bar__bottom">
          {characterHealth} / {props.computedStats.health}
        </div>
      </div>
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
    {#if !isView}
      <div class="extra">
        <div>Exp: {props.exp}/{LIVING_LEVELS[props.lvl].exp}</div>
      </div>
    {/if}
    <UiCharacterStats
      stats={props.stats}
      {isView}
      statPoints={props.statPoints}
      {statsConfirm}
    />
  {/if}
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
  .extra {
    margin-bottom: 0.5em;
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
    color: aquamarine;
    &::after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      transform-origin: left;
      background-color: currentColor;
      transform: scaleX(var(--scale));
    }
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
