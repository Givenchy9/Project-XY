<template>
    <button class="button" @mousemove="handleMouseMove">
        <span>Hover me I'm awesome</span>
    </button>
</template>
  
<script setup>
const handleMouseMove = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    const x = e.pageX - buttonRect.left;
    const y = e.pageY - buttonRect.top;

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};
</script>
  
<style lang="scss" scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: white;
}

.button {
    background-image: linear-gradient(70deg, rgba(128, 128, 128, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(128, 128, 128, 0.5) 1px, transparent 1px);
    background-size: 57px 73px;



    position: relative;
    appearance: none;
    padding: 1em 2em;
    border: none;
    color: white;
    backdrop-filter: blur(64px);
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 100px;

    span {
        position: relative;
        pointer-events: none;
        z-index: 2;
    }

    &::before {
        --size: 0;

        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, blue, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
        z-index: 1;
    }

    &:hover::before {
        --size: 300px;
    }
}
</style>
  