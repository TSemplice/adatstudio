<template>
  <button
    @click.prevent="$store.commit('menu/TOGGLE_MENU', true)"
    :class="[
      $style.icon,
      {
        [$style.open]: $store.state.menu.isOpen,
      }
    ]"
    aria-label="Toggle Menu">
    <p>{{ $t('menu') }}</p>
    <p>{{ $t('close') }}</p>
    <span />
  </button>
</template>

<script>
export default {
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module lang="postcss">
.icon {
  @apply flex
    relative
    items-center
    p-0
    m-0
    overflow-hidden
    lg:hidden;

  background-color: transparent;
  border: none;

  & > p {
    @apply text-[14px]
      leading-[14px]
      pt-[4px]
      uppercase
      font-black;

    transition: var(--medium-transition);
  }

  & > p:last-of-type {
    @apply absolute;

    transform: translate3d(0, 20px, 0);
  }

  & > span {
    @apply w-[20px]
      h-[20px]
      block
      bg-dark
      ml-[10px];

    border-radius: 100%;
    transition: var(--medium-transition);
    animation: morph 2s linear alternate infinite;
  }

  &.open {
    & > p {
      @apply text-light;
    }

    & > p:first-of-type {
      transform: translate3d(0, -20px, 0);
    }

    & > p:last-of-type {
      transform: translate3d(0, 0, 0);
    }

    & > span {
      @apply bg-light;
    }
  }
}

@keyframes morph {
  0% {
    border-radius: 2px;
  }

  100% {
    border-radius: 100%;
  }
}
</style>
