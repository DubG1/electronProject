<template>
    <v-app>
        <Header/>
        <MainContainer>
            <h1>Home</h1>
        </MainContainer>
    
    </v-app>

</template>

<script lang="ts">
import Header from '../components/header.vue';
import MainContainer from '../components/main-container.vue';

export default {
  components: {
    Header,
    MainContainer
  },
};
</script>