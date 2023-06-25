<script lang="ts">
import UiCharacterStats from './UICharacterStats.svelte';
import { LIVING_LEVELS } from '@/backend/Controllers/Livings/constants';
import type { UICharacterProps } from './types';
import type { ItemType } from '@/backend/Controllers/Items/types';
import { currentHealth } from './utils/currentHealth';
import UiCharacterGridItem from './UICharacterGridItem.svelte';

export let props: UICharacterProps;

let actualHp = currentHealth(props);
$: characterHealth = props.isView ? props.health.current : actualHp;
$: healthPercent = characterHealth / props.health.max;

// @@TODO: fix optimize
let interval: number;
$: {
  clearInterval(interval);

  interval = window.setInterval(() => {
    if (!props) return;

    actualHp = currentHealth(props);

    if (actualHp === props.health.max) {
      clearInterval(interval);
    }
  }, 100);
}

const handleInventoryCellClick = (type: ItemType) => {
  if (props.isView) return;

  props.inventoryClick && props.inventoryClick(type);
};
</script>

<div class="UICharacter">
  {#if props}
    <div class="title">{props.name} <b>[{props.lvl}]</b></div>
    <div class="bars">
      <div class="bar">
        <div class="bar__line" style:--scale={healthPercent} />
        <div class="bar__bottom">
          {characterHealth} / {props.health.max}
        </div>
      </div>
    </div>
    <div class="grid">
      <UiCharacterGridItem
        props={{ type: 'neck' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'head' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'hands' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'leftHand', image: props.items.leftHand }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'rightHand' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'body' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'feet' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
      <UiCharacterGridItem
        props={{ type: 'pp' }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
    </div>
    {#if !props.isView}
      <div class="extra">
        <div>Exp: {props.exp}/{LIVING_LEVELS[props.lvl].exp}</div>
      </div>
    {/if}
    <UiCharacterStats
      stats={props.stats}
      isView={props.isView}
      statPoints={props.statPoints}
      statsConfirm={props.statsConfirm}
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
    'leftHand pp hands'
    'leftHand pp rightHand'
    'body pp feet';
}
</style>
