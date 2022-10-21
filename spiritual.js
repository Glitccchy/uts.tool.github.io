$('.form').css('display', 'none')
let formValue = {}

//sample reusable function
function displayQuestionForm(num){
  //sample condition
  if(num ===1){
    $(".q1").css('display', 'block')
    $(".q2").css('display', 'none')
    $(".q3").css('display', 'none')
    $(".q4").css('display', 'none')
    $(".q5").css('display', 'none')
  }else if(num === 2){
    $(".q1").css('display', 'none')
    $(".q2").css('display', 'block')
    $(".q3").css('display', 'none')
    $(".q4").css('display', 'none')
    $(".q5").css('display', 'none')
  }else if(num === 3){
    $(".q1").css('display', 'none')
    $(".q2").css('display', 'none')
    $(".q3").css('display', 'block')
    $(".q4").css('display', 'none')
    $(".q5").css('display', 'none')
  }else if(num === 4){
    $(".q1").css('display', 'none')
    $(".q2").css('display', 'none')
    $(".q3").css('display', 'none')
    $(".q4").css('display', 'block')
    $(".q5").css('display', 'none')
  }else if(num === 5){
    $(".q1").css('display', 'none')
    $(".q2").css('display', 'none')
    $(".q3").css('display', 'none')
    $(".q4").css('display', 'none')
    $(".q5").css('display', 'block')
  }
}

//load when document or webpage is ready
$(document).ready(function(){
  displayQuestionForm(1)

  $('#q1-next').click(function(){
    let qValue = $("#q1-input").val()

    if(!qValue){
      alert("Please input your answer!")
      return;
    }
    formValue.answer1 = qValue
    $("#q1-input").val("")
    displayQuestionForm(2)
  })

  
  $("#q2-back").click(function(){
    displayQuestionForm(1)
  })

  $('#q2-next').click(function(){
    let qValue = $("#q2-input").val()

    if(!qValue){
      alert("Please input your answer!")
      return;
    }
    formValue.answer2 = qValue
    $("#q2-input").val("")
    displayQuestionForm(3)
  })

  
  $("#q3-back").click(function(){
    displayQuestionForm(2)
  })

  $('#q3-next').click(function(){
    let qValue = $("#q3-input").val()

    if(!qValue){
      alert("Please input your answer!")
      return;
    }
    formValue.answer3 = qValue
    $("#q3-input").val("")
    displayQuestionForm(4)
  })


  $("#q4-back").click(function(){
    displayQuestionForm(3)
  })

  $('#q4-next').click(function(){
    let qValue = $("#q4-input").val()

    if(!qValue){
      alert("Please input your answer!")
      return;
    }
    formValue.answer4 = qValue
    $("#q4-input").val("")
    displayQuestionForm(5)
  })

  $("#q5-back").click(function(){
    displayQuestionForm(4)
  })

  $('#q5-finish').click(function(){
    let qValue = $("#q5-input").val()

    if(!qValue){
      alert("Please input your answer!")
      return;
    }
    formValue.answer5 = qValue
    $("#q5-input").val("")
    alert(JSON.stringify(formValue, null, 2))
  })

})
