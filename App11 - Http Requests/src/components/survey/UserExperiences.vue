<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isloading">Loading...</p>
     <p v-else-if="!isloading && error">
      {{error}}</p> 
      <p v-else-if="!isloading && (!results || results.length=== 0)">No Stored Experiences found. Try adding new experineces! </p>
      
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data(){
    return {
      results: [],
      isloading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperience() {
      this.isloading = true;
      this.error = null;
      fetch( 'https://vue-httpdemo-d1be0-default-rtdb.firebaseio.com/surveys.json')
      .then((response) =>{
       if( response.ok){
         return response.json();
       }
      }).then((data) =>{
        this.isloading = false;
        const results= [];
        for(const id in data){
          results.push({
            id: id,
            name: data[id].userName,
            rating: data[id].rating,
          });
        }
        this.results = results;
        console.log(data);

      }).catch((error)=>{
        console.log(error);
        this.isloading = false;
        this.error='Error loading data. Try agian later.';
      });
    },
  },
  //loads the data from the database and displays it in the list on first load
  mounted() {
    this.loadExperience();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>