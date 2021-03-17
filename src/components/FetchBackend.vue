<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default fetchBackend({
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      const fetchedId = this.$route.params.id
      // replace `getPost` with your data fetching util / API wrapper
      getPost(fetchedId, (err, post) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.id !== fetchedId) return
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }


</script>


/* const backendurl = "http://localhost:3000";

const app = Vue.createApp({
    data() {
        return {
            output: "no output yet",
            player: username,
            guess: 0,
        }
    },
    methods: {
        changeOutput: function () {
            this.output = " the button has been clicked!"
        },

        getPing: function () {    // 1 Backend 
            fetch(backendURL + '/scoretable') //userlist  , ping
                .then(response => response.json())
                .then(data => this.output= data)
                .catch(err => this.output = err)
        },

        guessNumber: function () {   // 2 
            fetch(backendURL + '/guess', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    game: 1,
                    guess: Number(this.guess)
                })
            }).then(response => response.json())
                .then(data => {
                    this.output = data
                })
                .catch(err => this.output = err);


        }
    },
});




// id , image, location , country , text /

//* 

