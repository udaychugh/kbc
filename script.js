/*const gamequestions [
    {
        question: 'September 27 is celebrated every year as',
        answers: [
            {text: 'A. Teachers Day', correct: false},
            {text: 'B. National Integration Day', correct: false},
            {text: 'C. World Tourism Day', correct: true},
            {text: 'D. International Literacy Day', correct: false},
        ] // answers end here
    }, // first questions end here


    {
        question: 'Who is the author of the epic Meghdoot?',
        answers: [
            {text: 'A. Vishakadatta', correct: false},
            {text: 'B. Valmiki', correct: false},
            {text: 'C. Banabhatta', correct: false},
            {text: 'D. Kalidas', correct: true},
        ] // answers end here
    }, // second questions end here
    
    {
        question: 'Which of the following is observed as Sports Day every year?',
        answers: [
            {text: 'A. 22nd April', correct: false},
            {text: 'B. 26th July', correct: false},
            {text: 'C. 29th August', correct: true},
            {text: 'D. 2nd October', correct: false},
        ] // answers end here
    }, // third questions end here
    
    {
        question: 'Pongal is a popular festival of which state?',
        answers: [
            {text: 'Tamil Nadu', correct: true},
            {text: 'Karnataka', correct: false},
            {text: 'Kerela', correct: false},
            {text: 'Andhra Pradesh', correct: false},
        ] // answers end here
    }, // fourth questions end here
    
    {
        question: 'Ghototkach in Mahabharat was the son of',
        answers: [
            {text: 'A. Duryodhana', correct: false},
            {text: 'B. Arjuna', correct: false},
            {text: 'C. Yudhistra', correct: false},
            {text: 'D. Bhima', correct: true},
        ] // answers end here
    }, // fifth questions end here
    
    {
        question: 'The first month of the Indian national calendar is',
        answers: [
            {text: 'Magha', correct: false},
            {text: 'Chaitra', correct: true},
            {text: 'Ashadha', correct: false},
            {text: 'Vaishakha', correct: false},
        ] // answers end here
    }, // sixth questions end here    

    {
        question: 'lSI stands for',
        answers: [
            {text: 'A. International Standards Institute', correct: false},
            {text: 'B. Indian Statistical Institute', correct: false},
            {text: 'C. Indian Standards Institute', correct: true},
            {text: 'D. Indian Service Institute', correct: false},
        ] // answers end here
    }, // seventh questions end here
    
    {
        question: 'Delhi became capital of India in',
        answers: [
            {text: 'A. 1910', correct: false},
            {text: 'B. 1911', correct: true},
            {text: 'C. 1916', correct: false},
            {text: 'D. 1923', correct: false},
        ] // answers end here
    }, // eight questions end here
    
    {
        question: 'Lunar month is equal to',
        answers: [
            {text: 'A. one earth day', correct: false},
            {text: 'B. 14 earth days', correct: false},
            {text: 'C. 28 earth days', correct: true},
            {text: 'D. 365 days', correct: false},
        ] // answers end here
    }, // ninth questions end here
    
    {
        question: 'Who was awarded the Padma Vibhushan on the 50th Republic Day in 2000 ?',
        answers: [
            {text: 'A. Lata Mangeshkar', correct: true},
            {text: 'B. Amitabh Bachchan', correct: false},
            {text: 'C. Shabana Azmi', correct: false},
            {text: 'D. Dev Anand', correct: false},
        ] // answers end here
    }, // tenth questions end here
    
    {
        question: 'Rial is the currency of ',
        answers: [
            {text: 'A. Iran', correct: true},
            {text: 'B. Indonesia', correct: false},
            {text: 'C. Zambia', correct: false},
            {text: 'D. Namibia', correct: false},
        ] // answers end here
    }, // elevnth questions end here
    
    {
        question: 'Which of the following combinations of country and its national games is correct?',
        answers: [
            {text: 'A. Australia - Football', correct: false},
            {text: 'B. Japan - Bull Fighting', correct: false},
            {text: 'C. U.S.A. - Baseball', correct: true},
            {text: 'D. India - Cricket', correct: false},
        ] // answers end here
    }, // twelth questions end here
    
    {
        question: 'Who among the following wrote "Glimpses of World History" ?',
        answers: [
            {text: 'A. Mahatma Gandhi', correct: false},
            {text: 'B. Rajendra Prasad', correct: false},
            {text: 'C. Mulk Raj Anand', correct: false},
            {text: 'D. Jawaharlal Nehru', correct: true},
        ] // answers end here
    }, // thirteen questions end here
    
    {
        question: 'What was the name of all the three soccer clubs set up with the help of Mahatama Gandhi in the early 20th century at Durban, Pretoria and Johannesburg?',
        answers: [
            {text: 'A. Truth Seekers', correct: false},
            {text: 'B. Non-Violents', correct: false},
            {text: 'C. Passive Resisters', correct: true},
            {text: 'D. Non Co-operators', correct: false},
        ] // answers end here
    }, // forteen questions end here
    
    {
        question: 'Which of these states has had the most number of its governors become presidents of India?',
        answers: [
            {text: 'A. Rajasthan', correct: false},
            {text: 'B. Bihar', correct: true},
            {text: 'C. punjab', correct: false},
            {text: 'D. Andhra Pradesh', correct: false},
        ] // answers end here
    }, // fiftin questions end here

] // end of questions */


var score = 1;

// first
function wrong1(){
    swal({
        title: "Afsos Ye Galat Jawab",
        text: "winnig prize : ₹ 0",
        icon: "error",
        button: "Restart",});
}

function right1(){
    swal({
        title: "Sahi Jawab", 
        text: "winning prize : ₹ 5,000",
        icon: "success",
        button: "Aww Yiss!",});
    var element = document.getElementById("one");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("two");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize1");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize2");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r2");
    ring.classList.remove("hide");
    
    score++;
}

//second
function wrong2(){
    swal({
        title: "Afsos Ye Galat Jawab",
        text: "winnig prize : ₹ 5,000",
        icon: "error",
        button: "Restart",});
    
    
}

function right2(){
    swal({
        title: "Sahi Jawab", 
        text: "winning prize : ₹ 10,000",
        icon: "success",
        button: "Aww Yiss!",});
    var element = document.getElementById("two");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("three");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize2");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize3");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r3");
    ring.classList.remove("hide");
    
    score++;
}

//third
function wrong3(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize :  ₹ 10,000", icon: "error", button : "Restart",});
}

function right3(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 20,000", icon: "success", button: "Aww Yiss!",});
    var element = document.getElementById("three");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("four");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize3");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize4");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r4");
    ring.classList.remove("hide");
    
    score++;
}

//fourth
function wrong4(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize :₹ 20,000", icon: "error", button : "Restart",});
}

function right4(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 40,000", icon: "success", button: "Aww Yiss!",});
    var element = document.getElementById("four");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("five");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize4");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize5");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r5");
    ring.classList.remove("hide");
    
    score++;
}

//fifth
function wrong5(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 40,000", icon: "error", button : "Restart",});
}

function right5(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 80,000", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("five");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("six");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize5");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize6");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r6");
    ring.classList.remove("hide");
    
    score++;
}

// sixth
function wrong6(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 80,000", icon: "error", button : "Restart",});
}

function right6(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 1,60,000", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("six");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("seven");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize6");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize7");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r7");
    ring.classList.remove("hide");
    
    score++;
}

//seventh
function wrong7(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 1,60,000", icon: "error", button : "Restart",});
}

function right7(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 3,20,000", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("seven");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("eight");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize7");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize8");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r8");
    ring.classList.remove("hide");
    
    score++;
}

//eightth
function wrong8(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 3,20,000", icon: "error", button : "Restart",});
}

function right8(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 6,40,000", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("eight");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("nine");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize8");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize9");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r9");
    ring.classList.remove("hide");
    
    score++;
}

//ninth
function wrong9(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 6,40,000", icon: "error", button : "Restart",});
}

function right9(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹12,50,000", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("nine");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("ten");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize9");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize10");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r10");
    ring.classList.remove("hide");
    
    score++;
}

//tenth
function wrong10(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 12,50,000", icon: "error", button : "Restart",});
}

function right10(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 25 lakh", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("ten");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("eleven");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize10");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize11");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r11");
    ring.classList.remove("hide");
    
    score++;
}

// eleventh
function wrong11(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 25 lakh", icon: "error", button : "Restart",});
}

function right11(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 50 lakh", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("eleven");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("twelve");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize11");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize12");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r12");
    ring.classList.remove("hide");
    
    score++;
}

//twelth
function wrong12(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 50 lakh", icon: "error", button : "Restart",});
}

function right12(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 1 crore", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("twelve");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("thirteen");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize12");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize13");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r13");
    ring.classList.remove("hide");
    
    score++;
}

//thirteen
function wrong13(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 1 crore", icon: "error", button : "Restart",});
}

function right13(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 3 crore", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("thirteen");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("fourteen");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize13");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize14");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r14");
    ring.classList.remove("hide");
    
    score++;
}

//forteen
function wrong14(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 3 crore", icon: "error", button : "Restart",});
}

function right14(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 5 crore", icon: "success", button: "Aww Yiss!",});
    
    var element = document.getElementById("fourteen");
    element.classList.add("hidden");
    
    var element2 = document.getElementById("fifteen");
    element2.classList.remove("hidden");
    
    var marker = document.getElementById("prize14");
    marker.classList.remove("omark");
    
    var marker2 = document.getElementById("prize15");
    marker2.classList.add("omark");
    
    var ring = document.getElementById("r15");
    ring.classList.remove("hide");
    
    score++;
}

//fifteen
function wrong15(){
    swal({title: "Afsos Ye Galat Jawab", text: "winning prize : ₹ 5 crore", icon: "error", button : "Restart",});
}

function right15(){
    swal({title: "Sahi Jawab", text: "winning prize : ₹ 7 crore", icon: "success", button: "Aww Yiss!",});
    
    var marker = document.getElementById("prize15");
    marker.classList.remove("omark");
    
    var element2 = document.getElementById("fifteen");
    element2.classList.add("hidden");
    
    var prize = document.getElementById("last");
    prize.classList.remove("hidden");
}

function fifty(){
    switch (score){
        case 1:
            swal("Two Options are:", "A. Teachers Day\nB. World Tourism Day");
            break;
        case 2:
            swal("Two Options are:", "B. Valmiki\nD. Kalidas");
            break;
            
        case 3:
            swal("Two Options are:", "A. 22nd April\nC. 29th August");
            break;
            
        case 4:
            swal("Two Options are:", "A. Tamil Nadu\nD. Andhra Pradesh");
            break;
            
        case 5:
            swal("Two Options are:", "B. Arjuna\nD. Bhima");
            break;
            
        case 6:
            swal("Two Options are:", "A. Magha\nB. Chaitra");
            break;
            
        case 7:
            swal("Two Options are:", "C. Indian Standards Institute\nD. Indian Service Institute");
            break;
            
        case 8:
            swal("Two Options are:", "B. 1911\nC. 1916");
            break;
            
        case 9:
            swal("Two Options are:", "A. one earth day\nC. 28 earth days");
            break;
            
        case 10:
            swal("Two Options are:", "A. Lata Mangeshkar\nD. Dev Anand");
            break;
            
        case 11:
            swal("Two Options are:", "A. Iran\nC. Zambia");
            break;
            
        case 12:
            swal("Two Options are:", "B. Japan - Bull Fighting\nC. U.S.A. - Baseball");
            break;
            
        case 13:
            swal("Two Options are:", "C. Mulk Raj Anand\nD. Jawaharlal Nehru");
            break;
            
        case 14:
            swal("Two Options are:", "C. Passive Resisters\n.Non Co-operatore");
            break;
            
        case 15:
            swal("Two Options are:", "B. Bihar\nD. Andhra Pradesh");
            break;
    }// switch end
    
    document.getElementById("fifty").disabled = true;
    
}

function phone(){
    switch (score){
        case 1:
            swal("Online friend advice", "may be correct ans is A");
            break;
        case 2:
            swal("Online friend advice", "may be correct ans is D");
            break;
            
        case 3:
            swal("Online friend advice", "may be correct ans is C");
            break;
            
        case 4:
            swal("Online friend advice", "may be correct ans is A");
            break;
            
        case 5:
            swal("Online friend advice", "may be correct ans is D");
            break;
            
        case 6:
            swal("Online friend advice", "may be correct ans is B");
            break;
            
        case 7:
            swal("Online friend advice", "may be correct ans is C");
            break;
            
        case 8:
            swal("Online friend advice", "may be correct ans is B");
            break;
            
        case 9:
            swal("Online friend advice", "may be correct ans is C");
            break;
            
        case 10:
            swal("Online friend advice", "may be correct ans is A");
            break;
            
        case 11:
            swal("Online friend advice", "may be correct ans is A");
            break;
            
        case 12:
            swal("Online friend advice", "may be correct ans is C");
            break;
            
        case 13:
            swal("Online friend advice", "may be correct ans is D");
            break;
            
        case 14:
            swal("Online friend advice", "may be correct ans is C");
            break;
            
        case 15:
            swal("Online friend advice", "may be correct ans is B");
            break;
    }// switch end
    
    document.getElementById("phone").disabled = true;
}

function poll(){
    switch (score){
        case 1:
            swal("Audience Poll", "A: 70%\nB: 18%\nC: 2%\nD: 10%");
            break;
        case 2:
            swal("Audience Poll", "A: 40%\nB: 5%\nC: 5%\nD: 60%");
            break;
            
        case 3:
            swal("Audience Poll", "A: 20%\nB: 10%\nC: 70%\nD: 0%");
            break;
            
        case 4:
            swal("Audience Poll", "A: 70%\nB: 18%\nC: 2%\nD: 10%");
            break;
            
        case 5:
            swal("Audience Poll", "A: 38%\nB: 12%\nC: 10%\nD: 48%");
            break;
            
        case 6:
            swal("Audience Poll", "A: 12%\nB: 48%\nC: 15%\nD: 25%");
            break;
            
        case 7:
            swal("Audience Poll", "A: 20%\nB: 10%\nC: 70%\nD: 0%");
            break;
            
        case 8:
            swal("Audience Poll", "A: 12%\nB: 48%\nC: 15%\nD: 25%");
            break;
            
        case 9:
            swal("Audience Poll", "A: 20%\nB: 10%\nC: 70%\nD: 0%");
            break;
            
        case 10:
            swal("Audience Poll", "A: 70%\nB: 18%\nC: 2%\nD: 10%");
            break;
            
        case 11:
            swal("Audience Poll", "A: 98%\nB: 1.5%\nC: 0.5%\nD: 0%");
            break;
            
        case 12:
            swal("Audience Poll", "A: 25%\nB: 25%\nC: 25%\nD: 25%");
            break;
            
        case 13:
            swal("Audience Poll", "A: 25%\nB: 25%\nC: 25%\nD: 25%");
            break;
            
        case 14:
            swal("Audience Poll", "A: 25%\nB: 25%\nC: 25%\nD: 25%");
            break;
            
        case 15:
            swal("Audience Poll", "A: 25%\nB: 25%\nC: 25%\nD: 25%");
            break;
    }// switch end
    
    document.getElementById("poll").disabled = true;
}


