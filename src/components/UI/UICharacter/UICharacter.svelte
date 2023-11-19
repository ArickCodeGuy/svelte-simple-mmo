<script lang="ts">
import UiCharacterStats from './UICharacterStats.svelte';
import { LIVING_LEVELS } from '@/backend/Controllers/Livings/constants';
import type { UICharacterProps } from './types';
import type { ItemType } from '@/backend/Controllers/Items/types';
import { currentHealth } from './utils/currentHealth';
import UiCharacterGridItem from './UICharacterGridItem.svelte';
import UiInventoryItem from '../UIInventoryItem/UIInventoryItem.svelte';
import { itemToUIInventoryItemProps } from '@/modal/components/ItemInfoModal/utils/itemToUIInventoryItemProps';

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

{#if props}
  <div class="UICharacter">
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
        props={{ type: 'pfp', image: props.items.pfp }}
        on:click={(e) => handleInventoryCellClick(e.detail)}
      />
    </div>
    <div class="UICharacter__add">
      {#if !props.isView}
        <div>Exp: {props.exp}/{LIVING_LEVELS[props.lvl].exp}</div>
      {/if}

      <UiCharacterStats
        stats={props.stats}
        isView={props.isView}
        statPoints={props.statPoints}
        statsConfirm={props.statsConfirm}
      />

      {#if props.drops?.length}
        <div>
          <div>Drops:</div>
          {#each props.drops as drop}
            <UiInventoryItem props={itemToUIInventoryItemProps(drop)} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
.UICharacter {
  &__add {
    display: grid;
    grid-gap: var(--column-gap);
  }
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
    'neck pfp head'
    'leftHand pfp hands'
    'leftHand pfp rightHand'
    'body pfp feet';
}
</style>
