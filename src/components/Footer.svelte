<script lang="ts">
const FOOTER_LINKS = [
  {
    img: '/svelte-simple-mmo/author.jpg',
    alt: 'Author',
    link: 'https://github.com/ArickCodeGuy',
  },
  {
    img: '/svelte-simple-mmo/github.png',
    alt: 'Github',
    link: 'https://github.com/ArickCodeGuy/svelte-simple-mmo',
  },
] as { img: string; alt: string; link: string }[];
</script>

<footer class="Footer banner">
  <div class="container">
    <div class="footer-links">
      {#each FOOTER_LINKS as link}
        <a href={link.link} target="_blank" class="footer-link">
          <img class="footer-link__img" src={link.img} alt={link.alt} />
          <div>{link.alt}</div>
        </a>
      {/each}
    </div>
  </div>
</footer>

<style lang="scss">
.Footer {
  background-color: rgb(30, 30, 30);
  color: white;
}

.footer-links {
  display: flex;
  gap: var(--column-gap);
  align-items: center;
  justify-content: center;
}
.footer-link {
  color: white;
  text-decoration: none;
  text-align: center;
  &__img {
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
  }
}
</style>
