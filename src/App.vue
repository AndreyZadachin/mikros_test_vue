<template>
  <Discount />
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Discount from '@/components/Discount.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Discount,
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Gotham Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000c0c;
  background: #ffffff;
  max-width: 1920px;
  margin: 0 auto;
  font-style: normal;
}

body {
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #5c5c5c;
  cursor: pointer;
}

button {
  outline: none;
  padding: 0;
  align-self: center;
  border: 0;
  cursor: pointer;
}

p {
  margin: 0;
}
h4 {
  margin: 0;
}
</style>
