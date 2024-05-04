<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <section class="section">
      <div class="content">
        <div class="heading__container">
          <!-- <RevealDiv> -->
          <p class="chapter"><span class="marker">(04)</span>Blog</p>
          <!-- </RevealDiv> -->
          <div class="heading">
            <!-- <RevealDiv> -->
            <div>Some of our</div>
            <!-- </RevealDiv> -->
            <!-- <RevealDiv> -->
            <div>recent news</div>
            <!-- </RevealDiv> -->
          </div>
        </div>
        <div class="blog__wrapper">
          <!-- {cards.map((card) => ( -->
          <!-- <RevealDiv -->
          <!-- key={card.id} -->
          <!-- style={{ transform: `scale(${card.scale})` }} -->
          <!-- > -->
          <div
            v-for="(card, index) in items"
            :key="index"
            :id="card.id"
            class="blog__item card-animation"
            @mouseover="handleMouseOver(index)"
            @mouseleave="handleMouseLeave()"
            @mousemove="handleMouseMove()"
            :class="{ hovered: hoveredIndex === index }"
          >
            <div class="info__column">
              <div class="info__wrapper">
                <div class="category">{{ card.categories[0].title }}</div>
                <div class="time">{{ card.readingTime }}</div>
              </div>
              <h2 class="article">{{ card.title }}</h2>
              <div class="info__wrapper">
                <div class="info">{{ card.publishedAt }}</div>
                <div class="info">{{ card.authorName }}</div>
              </div>
            </div>
            <div class="movable">
              <div class="movable__overflow">
                <img
                  class="movable__image"
                  src="/images/img2.jpg"
                  alt="cursor image"
                />
                <div class="sticker__wrapper">
                  <div class="sticker">
                    <div class="sticker__text__wrapper ticker">
                      <p class="sticker__text">Read article</p>
                      <p class="sticker__text">Read article</p>
                      <p class="sticker__text">Read article</p>
                      <p class="sticker__text">Read article</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="description__column">{{ card.description }}</p>
          </div>
          <!-- </RevealDiv> -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  margin-bottom: calc(var(--width-k) * 240);
}

.content {
  margin: 0 calc(var(--width-k) * 80);
}

.chapter {
  font-family: "DM Sans", sans-serif;
  font-size: calc(var(--width-k) * 14);
  line-height: 100%;
  text-transform: uppercase;
  color: var(--white);
}

.marker {
  font-style: italic;
  margin-right: calc(var(--width-k) * 22);
}

.heading__container {
  display: flex;
  gap: calc(var(--width-k) * 232);
  margin-bottom: calc(var(--width-k) * 74);
}

.heading {
  font-size: calc(var(--width-k) * 90);
  line-height: 100%;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: calc(var(--width-k) * 6);
  color: var(--white);
}

.blog__wrapper {
  display: flex;
  flex-direction: column;
  gap: calc(var(--width-k) * 22);
}

.blog__item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--width-k) * 52) calc(var(--width-k) * 42);
  width: calc(var(--width-k) * 1280);
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: calc(var(--width-k) * 12);
  transition: transform 0.4s, opacity 0.4s;
  transition-timing-function: ease-in-out;
  transform: scale(1);
  opacity: 1;
}

.info__column {
  display: flex;
  flex-direction: column;
  gap: calc(var(--width-k) * 38);
}

.info__wrapper {
  display: flex;
  align-items: center;
  gap: calc(var(--width-k) * 29);
}

.category {
  font-family: "DM Sans", sans-serif;
  font-size: calc(var(--width-k) * 12);
  line-height: 135%;
  border: solid 1px rgba(255, 255, 255, 0.2);
  border-radius: calc(var(--width-k) * 31);
  text-transform: uppercase;
  padding: calc(var(--width-k) * 8) calc(var(--width-k) * 13);
  color: var(--white);
}

.time {
  font-family: "DM Sans", sans-serif;
  font-size: calc(var(--width-k) * 14);
  line-height: 135%;
  text-transform: uppercase;
  color: var(--white);
}

.article {
  font-size: calc(var(--width-k) * 44);
  line-height: 100%;
  color: var(--white);
}

.info {
  font-family: "DM Sans", sans-serif;
  font-size: calc(var(--width-k) * 16);
  color: var(--white);
}

.description__column {
  font-family: "DM Sans", sans-serif;
  font-size: calc(var(--width-k) * 16);
  line-height: 152%;
  color: var(--white);
  width: calc(var(--width-k) * 533);
}

.sticker__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sticker {
  background-color: var(--brand);
  color: var(--black);
  width: calc(var(--width-k) * 140);
  height: calc(var(--width-k) * 45);
  overflow: hidden;
  border-radius: calc(var(--width-k) * 30);
  position: relative;
  transform: scale(0);
  transition: transform 0.4s;
  transition-timing-function: ease-in-out;
}

.sticker__text__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: calc(var(--width-k) * 12);
  position: absolute;
}

.sticker__text {
  font-size: calc(var(--width-k) * 16);
  text-transform: none;
  white-space: nowrap;
  line-height: 100%;
}

.ticker {
  animation: moveLeft 3s linear infinite;
}

.movable {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hovered {
  transform: scale(1);
  opacity: 1;
}

.movable__overflow {
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--width-k) * 13);
  width: calc(var(--width-k) * 239);
  height: calc(var(--width-k) * 179);
}

.movable__image {
  width: 100%;
  height: 100%;
  border-radius: calc(var(--width-k) * 13);
  transform: scale(0);
  object-fit: cover;
  transition: transform 0.4s;
  transition-timing-function: ease-in-out;
}

.blog__wrapper:hover .card-animation:not(.hovered) {
  transform: scale(0.95);
  opacity: 0.55;
}

.card-animation:hover .movable__image {
  transform: scale(1);
}

.card-animation:hover .sticker {
  transform: scale(1);
}
</style>

<script>
/* eslint-disable */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
import { client } from "../sanity";
import { gsap } from "gsap";
import jsonData from "../assets/data.json";

export default {
  data() {
    return {
      items: [],
      hoveredIndex: null,
    };
  },
  // mounted() {
  //   this.items = jsonData;
  // },
  async mounted() {
    try {
      const posts = await client.fetch(
        '*[_type == "post"]{..., "authorName": author->name, categories[]->{title}}'
      );
      this.items = posts;
      console.log(posts);
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    handleMouseOver(index) {
      this.hoveredIndex = index;
      const hoveredElement = event.currentTarget;
    },
    handleMouseLeave() {
      this.hoveredIndex = null;
    },
    handleMouseMove() {
      const hoveredElement = event.currentTarget;
      const movable = hoveredElement.querySelector(".movable");
      const width = window.innerWidth;
      const height = window.innerHeight;
      const movableWidth = movable.getBoundingClientRect().width;
      const movableHeight = movable.getBoundingClientRect().height;
      let posX = event.screenX - 0.5 * width - 0.5 * movableWidth;
      let posY = event.screenY - 0.5 * height - 0.5 * movableHeight;
      gsap.to(movable, { y: posY, x: posX, delay: 0.2 });
    },
  },
};
</script>
