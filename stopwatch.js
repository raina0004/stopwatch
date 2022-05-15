const timer=document.getElementById("stopwatch");
        var hr=0;
        var min=0;
        var sec=0;

        var stoptimer=true;//means time is not in ruung phase
        function starttimer()//if stop timer is stop then it not stop and call timercycle
        {
            if(stoptimer==true)
            {
                stoptimer=false;
                timerCycle();
            }
        }
        function pausetimer()
        {
            if(stoptimer==false)
            {
                stoptimer=true;
            }
        }
        function timerCycle()
        {
            if(stoptimer==false)
            {
                sec=parseInt(sec);
                min=parseInt(min);
                hr=parseInt(hr);

                sec=sec+1;

                if(sec==60)
                {
                    min=min+1;
                    sec=0;
                }
                if(min==60)
                {
                    hr=hr+1;
                    min=0;
                    sec=0;
                }
                if(sec<10)
                {
                    sec="0" + sec;
                }
                if(min<10)
                {
                    min="0" + min;
                }
                if(hr<10)
                {
                    hr="0" + hr;
                }
                timer.innerHTML=hr + ":" + min + ":" + sec;
                setTimeout("timerCycle()",1000)//call withinif when it run only call and run as a loop 
                //in a terminal otherwise not call
            }
        }
        function resettimer()

        {
            timer.innerHTML="00:00:00";
            stoptimer=true;
            hr=0;
            sec=0;
            min=0;
        }
    