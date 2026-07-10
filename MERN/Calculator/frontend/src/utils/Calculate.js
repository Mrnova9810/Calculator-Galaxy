

function Calculate(s){
    s = s.replaceAll(" " , "");

    let firstHave  =false;
    let secondHave = false;
    let firstNo = 0;
    let secondNo = 0;
    let thirdNo;
    let opt1 =-1;
    let opt2 =-1;
    let Do = false;

    for(let i = 0; i < s.length; i++){
            if(isOperator(s,i)){   // handle all cases
                if(!firstHave){
                    firstNo = num(s,0, i);
                    firstHave = true;
                    opt1  = i;
                    Do = isMust(s,i);
                    continue;
                }


                if(isMust(s, i)){ // means * , /

                    if(Do){  // previews operation is  * , /   --> do operation
                        if(!secondHave){  // dont have 2nd number
                            secondNo = num(s,opt1+1,i);
                            firstNo = calc(firstNo , s.charAt(opt1), secondNo);
                            opt1 = i;
                        }else{
                            thirdNo =  num(s,opt2+1,i);
                            secondNo = calc(secondNo , s.charAt(opt2), thirdNo);
                            opt2 = i;
                        }

                    }else{  // first have  && with opt1 +, -

                        // second Number have ,not possible  --> with + , - opt2  if 2nd operation == +,- then its will add that number to first 1

                        // second not have.
                        secondNo = num(s,opt1+1,i);
                        secondHave = true;
                        opt2  =  i;
                    }

                    Do = true;   // * , / so must do operation on next operation.
                }
                else{ // + , -

                    if(!firstHave){
                        firstNo = num(s,0, i);
                        firstHave = true;
                        opt1  = i;
                    }else{
                        if(Do){  // previews was * , /
                            if(!secondHave){
                                secondNo = num(s,opt1+1,i);
                                firstNo = calc(firstNo , s.charAt(opt1), secondNo);
                                opt1 = i;

                            }else{  // second have
                                thirdNo =  num(s,opt2+1,i);
                                secondNo = calc(secondNo , s.charAt(opt2), thirdNo);
                                firstNo = calc(firstNo , s.charAt(opt1), secondNo);
                                secondHave = false;
                                opt1 = i;
                            }
                        }else{  // previews was + , -  so ...
                            // second not have.     // second not possible --> not needed!
                            secondNo = num(s,opt1+1,i);
                            firstNo = calc(firstNo , s.charAt(opt1), secondNo);
                            opt1 = i;
                        }
                    }

                    Do= false;
                }


            }
    }


          // i == s.length
        if(!firstHave) return num(s, 0,s.length);
        if(!secondHave){
            secondNo = num(s,opt1+1,s.length);
            return calc(firstNo , s.charAt(opt1), secondNo);
        }
        // first && second both have.
        thirdNo = num(s,opt2+1, s.length);
        secondNo = calc(secondNo , s.charAt(opt2), thirdNo);
        firstNo= calc(firstNo , s.charAt(opt1), secondNo);
        return firstNo;


}



    function isOperator( s, index){
        let ch =s.charAt(index);
        return ch == '*' || ch == '/' ||   ch== '+' || ch == '-' || ch == '%';
    }

    function isMust(s, index){    //returns true i at we found * , /     and false +,-
        let ch =s.charAt(index);
        return ch == '*' || ch == '/' || ch== '%';
    }

    function num(s,  st , ed){   // st is inclusive   && ed  exclusive  // for end pass operator  yah last index when over.
        return parseFloat(s.substring(st,ed));
    }


    function calc( a, opt , b){
        switch(opt){
            case '+' : 
                  return a + b;
            case '-' : 
                  return a - b;
            case '/' :
                  return  a /b;
            case '%': 
                   return a % b;     
            default  :
                  return a * b;
        };
    }

    export default Calculate;