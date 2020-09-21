class Form{
  constructor(){
      this.title = createElement('h1');
      this.input = createInput("");
      this.email = createElement('h3');  
      this.emailInput = createInput("");
      this.button = createButton('Submit');
      this.name = createElement('h3'); 
      this.greeting = createElement('h2');
      this.greeting1 = createElement('h2');
      this.reset = createButton('Reset');


      // Button
      this.button.style('width','100px');
      this.button.style('height','40px');
      this.button.style('background','#153250');
      this.button.style('borderRadius','20');
      this.button.style('color','#EDF0EE');

      // Reset
      this.reset.style('background', '#00735C');
      this.reset.style('width','100px');
      this.reset.style('height','40px');
      this.reset.style('color','#EDF0EE');


      // Q1
      this.question1 = createElement('h4',"Q1 : Do you have fever,cough,cold,throat pain ?");
      this.radio1 = createRadio('h5');
      this.radio1.option('yes');
      this.radio1.option('no');
      this.radio1.style('margin', '20px');
      this.radio1.style('color','#9168A0');
      this.radio1.style('height', '460px');


      // Q2
      this.question2 = createElement('h4',"Q2 : Do you have any medical problems like,ex:-cancer,asthama,etc... ?");
      this.radio2 = createRadio('yes');
      this.radio2.option('no');
      this.radio2.style('color','#DCA1B0');
      this.radio2.style('height', '560px');
      this.radio1.style('margin', '20px');


      // Q3
      this.question3 = createElement('h4',"Q3 : Do you have any travel history?")
      this.radio3 = createRadio('yes');
      this.radio3.option('no');
      this.radio3.style('color','#9168A0');
      this.radio3.style('height', '460px');


      // Q4
      this.question4 = createElement('h4',"Q4 : Do you meet any covid patient?");
      this.radio4 = createRadio('yes');
      this.radio4.option('no');
      this.radio4.style('color','#DCA1B0');
      this.radio4.style('height', '460px');


      //  Comments
      this.comments = createInput('Anything else you would like to comment about?');
      this.comments.style('width','420px');
      this.comments.style('height','100px');
  }

  display(){

      this.title.html("Covid Self Assesment");
      this.title.style('color','#970C10');
      this.title.position(displayWidth/2 - 140 ,50);

      this.comments.style('width','500 px');
      this.comments.style('color','#710117');
      this.comments.position(displayWidth/2 - 670 ,859);

      this.question1.position(displayWidth/2 - 670 ,380);
      this.question1.style('color','#3C4C70');
      this.radio1.position(displayWidth/2 - 700, 430);

      this.question2.position(displayWidth/2 - 670 ,480);
      this.question2.style('color','#3C4C70');
      this.radio2.position(displayWidth/2 -600, 530);

      this.question3.position(displayWidth/2 -670 ,600);
      this.question3.style('color','#3C4C70');
      this.radio3.position(displayWidth/2 -700, 660);

      this.question4.position(displayWidth/2 -670 ,720);
      this.question4.style('color','#3C4C70');
      this.radio4.position(displayWidth/2 -700, 790);

      this.button.position(displayWidth/2 - 670 ,1100);

      this.reset.position(displayWidth/2 -  540,1100);
      

      this.name.html("Your Name");
      this.name.style('color','#000000');
      this.name.position(displayWidth/2 - 650 ,310);
      this.input.position(displayWidth/2 - 550, 330);

      this.email.html("Your Email");
      this.email.position(displayWidth/2 - 650 ,350);
      this.emailInput.position(displayWidth/2 - 550 ,370);
      this.email.style('color','#CA2B4B');
  

  this.button.mousePressed(() => {
       

      this.greeting.show();
      this.comments.hide();
      this.reset.hide();

      this.greeting.html("Thanks for your Submisssion for covid test we will mail you the results!!");
      this.greeting1.html("Your response is deeply appreciated!");

      this.greeting.position(50,10);
      this.greeting1.position(480,90);
      this.greeting1.style('color','#710117');
      this.greeting.style('width', '1200px');
      this.greeting.style('height', '1200px');
      this.greeting.style('background','#ECD5BB');
      this.greeting.style('padding','30px');

      this.question1.hide();
      this.question2.hide();
      this.question3.hide();
      this.question4.hide();

      this.radio1.hide();
      this.radio2.hide();
      this.radio3.hide();
      this.radio4.hide();
      this.button.hide();

      //User.getCount();
      User.input = this.input.value();
      User.email = this.email.value();
      User.radio= this.radio.value();
      User.radio1= this.radio1.value();
      User.radio2= this.radio2.value();
      User.radio3= this.radio3.value();
      peopleCount += 1;
      User.index = peopleCount;
      User.update();
      User.updateCount(peopleCount);
      
  });

  this.reset.mousePressed(() => { 

      this.greeting.hide();
      this.description.show();
      this.input.value('');
      this.email.value('');
      this.radio.value();
      this.radio1.value();
      this.radio2.value();
      this.radio3.value();

    });    
  }
 }