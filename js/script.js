function submitAnswers() {
    var total = 5, score = 0;
    
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;
    
    for (var i=1;i<=total;i++){
        
        if(eval('q'+[i]) == null || eval('q'+[i]) == ''){
            alert('You missed answer '+ i);
            return false;
     }
        
    }
    
    var answers= ['a','a','b','a','a'];
    
    for(i=1;i<=total;i++){
        if(eval('q'+i)==answers[i-1]) score++;
    }
        var results= document.getElementById('results');
    results.innerHTML = '<h3> you scored <span> '+score+' </span> out of <span> '+total+' </span> </h3>';

      
     alert('you scored '+score+'out of '+total );
    
    return false;
    
    
    
    
}