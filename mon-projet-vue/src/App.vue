<script setup>
const message = "Vous voulez voir ma liste de jeux ?";
const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const handleClick = () => {
  alert("Bouton cliqué !");
};
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ loremText }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
  font-size: 2rem;
}

p {
  max-width: 600px;
  line-height: 1.5;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #369f77;
}
</style>
