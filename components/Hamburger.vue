<template>
  <button
    @click.prevent="$store.commit('menu/TOGGLE_MENU', true)"
    :class="[
      $style.icon,
      {
        [$style.open]: $store.state.menu.isOpen,
        [$style.home]: isHome
      }
    ]"
    aria-label="Hamburger Menu">
    <span />
    <span />
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
    flex-col
    justify-between
    relative
    h-[16px]
    p-0
    m-0
    lg:hidden;

  background-color: transparent;
  border: none;

  span {
    @apply block
      w-[36px]
      h-[2px]
      pointer-events-none
      bg-light;

    transition: var(--medium-transition);
    transition-delay: 0.4s;

    &:first-of-type, &:last-of-type {
      transform-origin: left center;
    }


    &:nth-of-type(2) {
      transform-origin: right center;
    }
  }

  &.open {
    span {
      transform: scaleX(0);
      transition-delay: 0s;
    }

    &::before {
      transition-delay: 0.4s;
      transform: rotate(45deg) scale(1);
    }

    &::after {
      transition-delay: 0.4s;
      transform: rotate(-45deg) scale(1);
    }
  }

  &::before, &::after {
    @apply absolute
      w-[2px]
      h-[28px]
      bg-light;

    content: '';
    top: calc(50% - 14px);
    left: calc(50% - 1px);

    transform: rotateZ(45deg);
    transition-delay: 0s;
    transition: var(--medium-transition);
  }

  &::before {
    transform-origin: 50% 50%;
    transform: rotate(45deg) scale(0);
  }

  &::after {
    transform-origin: 50% 50%;
    transform: rotate(-45deg) scale(0);
  }
}
</style>
