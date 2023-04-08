<script lang="ts">
  import UIMap from '@/components/UI/UIMap/UIMap.svelte';
  import { globalInfoState } from '@/store/player';
  import { Server } from '@/backend';
  import { onMount } from 'svelte';
  import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
  import type { GlobalInfo } from '@/backend/Server/types';

  let globalInfo: GlobalInfo;
  globalInfoState.subscribe((v) => (globalInfo = v));

  const handleMoveClick = (direction: DirectionalMove) => {
    globalInfoState.update(
      (v) => Server.tryDirectionalMove(v.living.id, direction)!
    );
  };

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'ArrowUp') handleMoveClick('UP');
      if (e.key === 'a' || e.key === 'ArrowLeft') handleMoveClick('LEFT');
      if (e.key === 's' || e.key === 'ArrowDown') handleMoveClick('DOWN');
      if (e.key === 'd' || e.key === 'ArrowRight') handleMoveClick('RIGHT');
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });
</script>

{#if globalInfo && globalInfo.map}
  <UIMap
    position={globalInfo.living.position}
    range={4}
    map={globalInfo.map.layout}
  />
{/if}
<button on:click={() => handleMoveClick('UP')}>UP</button>
<button on:click={() => handleMoveClick('LEFT')}>LEFT</button>
<button on:click={() => handleMoveClick('RIGHT')}>RIGHT</button>
<button on:click={() => handleMoveClick('DOWN')}>DOWN</button>
