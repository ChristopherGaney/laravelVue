<script>
  export default {
    name: 'comp-login',
    data(){
       return{
          username:'',
          password:''
       }
    },
    methods:{
       login(){
          console.log(this.username, this.password);
       }
    }
};
</script>

<template>
  <section class="login">
    <div class="form_wrap">
      <h4>Login Form</h4>
      <form>
        <div class="mb-3">
          <label for="txtuserName" class="form-label">User Name</label>
          <input
            type="text"
            class="form-control"
            id="txtuserName"
            aria-describedby="emailHelp"
            v-model="username"/>
        </div>
        <div class="mb-3">
          <label for="txtPassword" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="txtPassword"
            v-model="password"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="login()">Submit</button>
      </form>
    </div>
  </section>
</template>