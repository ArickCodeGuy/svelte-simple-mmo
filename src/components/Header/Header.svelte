<script lang="ts">
import { Link } from 'svelte-routing';
import type { HeaderProps } from './types';

export let props: HeaderProps;

$: links = (props && props.links) || [];
</script>

<header>
  <div class="container container--stretch">
    <slot />
    <nav class="header-nav">
      <ul>
        {#each links as link}
          <li>
            <Link class="header-link" to={link.href}>
              {link.text}
            </Link>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background-color: rgba(var(--rgba-bgc), 0.3);
  padding: 20px 0;
}
.header-nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: var(--column-gap);
  }
}
:global(.header-link) {
  color: var(--color-primary);
  text-decoration: none;
}
</style>
