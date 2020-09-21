class UserData{
  constructor(){
      this.index = null;
      this.input = null;
      this.email = null;
      this.radio = null;
      this.radio1 = null;
      this.radio2 = null;
      this.radio3 = null;
  }
  getCount(){
      var personCount = database.ref('personCount');
      personCountRef.on("value",(data)=>{
          personCount = data.val();
  })
}
  updateCount(count){
      database.ref('/').update({
          personCount : count
      })
  }
  update(){
      var userIndex = "users" + this.index;
      database.ref(userIndex).set({
          input: this.input,
          email: this.email,
          radio : this.radio,
          radio1 : this.radio1,
          radio2 : this.radio2,
          radio3 : this.radio3
  })
  }

  reset(){
      this.index = null;
      this.input = null;
      this.email = null;
      this.radio = null;
      this.radio1 = null;
      this.radio2 = null;
      this.radio3 = null;
  }
}