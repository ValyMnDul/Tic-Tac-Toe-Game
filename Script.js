
let turner=true;///true=x;
let ScoreX=0;
let ScoreO=0;

function AWM()
{
    document.getElementById("C1").textContent="";
    document.getElementById("C2").textContent="";
    document.getElementById("C3").textContent="";
    document.getElementById("C4").textContent="";
    document.getElementById("C5").textContent="";
    document.getElementById("C6").textContent="";
    document.getElementById("C7").textContent="";
    document.getElementById("C8").textContent="";
    document.getElementById("C9").textContent="";

    C1B=false;
    C2B=false;
    C3B=false;
    C4B=false;
    C5B=false;
    C6B=false;
    C7B=false;
    C8B=false;
    C9B=false;
}

function CID()
{
    if((C1B==true)&&(C2B==true)&&(C3B==true)&&(C4B==true)&&(C5B==true)&&(C6B==true)&&(C7B==true)&&(C8B==true)&&(C9B==true))
        AWM();
}

function CISW()
{
    if((document.getElementById("C1").textContent=='X')&&(document.getElementById("C2").textContent=='X')&&(document.getElementById("C3").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C4").textContent=='X')&&(document.getElementById("C5").textContent=='X')&&(document.getElementById("C6").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C7").textContent=='X')&&(document.getElementById("C8").textContent=='X')&&(document.getElementById("C9").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C1").textContent=='X')&&(document.getElementById("C4").textContent=='X')&&(document.getElementById("C7").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C2").textContent=='X')&&(document.getElementById("C5").textContent=='X')&&(document.getElementById("C8").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C3").textContent=='X')&&(document.getElementById("C6").textContent=='X')&&(document.getElementById("C9").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C1").textContent=='X')&&(document.getElementById("C5").textContent=='X')&&(document.getElementById("C9").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if ((document.getElementById("C3").textContent=='X')&&(document.getElementById("C5").textContent=='X')&&(document.getElementById("C7").textContent=='X'))
    {
        ScoreX=ScoreX+1;
        document.getElementById("ScoreX").textContent=ScoreX;
        AWM();
    }
    else if((document.getElementById("C1").textContent=='O')&&(document.getElementById("C2").textContent=='O')&&(document.getElementById("C3").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C4").textContent=='O')&&(document.getElementById("C5").textContent=='O')&&(document.getElementById("C6").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C7").textContent=='O')&&(document.getElementById("C8").textContent=='O')&&(document.getElementById("C9").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C1").textContent=='O')&&(document.getElementById("C4").textContent=='O')&&(document.getElementById("C7").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C2").textContent=='O')&&(document.getElementById("C5").textContent=='O')&&(document.getElementById("C8").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C3").textContent=='O')&&(document.getElementById("C6").textContent=='O')&&(document.getElementById("C9").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C1").textContent=='O')&&(document.getElementById("C5").textContent=='O')&&(document.getElementById("C9").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
    else if ((document.getElementById("C3").textContent=='O')&&(document.getElementById("C5").textContent=='O')&&(document.getElementById("C7").textContent=='O'))
    {
        ScoreO=ScoreO+1;
        document.getElementById("ScoreO").textContent=ScoreO;
        AWM();
    }
}

let C1B=false;
function C1()
{
    if(C1B==false)
    {
        if(turner==true)
        {
            document.getElementById("C1").textContent='X';
        }
        else
        {
            document.getElementById("C1").textContent='O';  
        }
        turner=!turner;
        C1B=!C1B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
        
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C2B=false;
function C2()
{
    if(C2B==false)
    {
        if(turner==true)
        {
            document.getElementById("C2").textContent='X';
        }
        else
        {
            document.getElementById("C2").textContent='O';  
        }
        turner=!turner;
        C2B=!C2B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C3B=false;
function C3()
{
    if(C3B==false)
    {
        if(turner==true)
        {
            document.getElementById("C3").textContent='X';
        }
        else
        {
            document.getElementById("C3").textContent='O';  
        }
        turner=!turner;
        C3B=!C3B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C4B=false;
function C4()
{
    if(C4B==false)
    {
        if(turner==true)
        {
            document.getElementById("C4").textContent='X';
        }
        else
        {
            document.getElementById("C4").textContent='O';  
        }
        turner=!turner;
        C4B=!C4B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C5B=false;
function C5()
{
    if(C5B==false)
    {
        if(turner==true)
        {
            document.getElementById("C5").textContent='X';
        }
        else
        {
            document.getElementById("C5").textContent='O';  
        }
        turner=!turner;
        C5B=!C5B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C6B=false;
function C6()
{
    if(C6B==false)
    {
        if(turner==true)
        {
            document.getElementById("C6").textContent='X';
        }
        else
        {
            document.getElementById("C6").textContent='O';  
        }
        turner=!turner;
        C6B=!C6B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C7B=false;
function C7()
{
    if(C7B==false)
    {
        if(turner==true)
        {
            document.getElementById("C7").textContent='X';
        }
        else
        {
            document.getElementById("C7").textContent='O';  
        }
        turner=!turner;
        C7B=!C7B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C8B=false;
function C8()
{
    if(C8B==false)
    {
        if(turner==true)
        {
            document.getElementById("C8").textContent='X';
        }
        else
        {
            document.getElementById("C8").textContent='O';  
        }
        turner=!turner;
        C8B=!C8B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

let C9B=false;
function C9()
{
    if(C9B==false)
    {
        if(turner==true)
        {
            document.getElementById("C9").textContent='X';
        }
        else
        {
            document.getElementById("C9").textContent='O';  
        }
        turner=!turner;
        C9B=!C9B;
        CISW();
        CID();
        if(turner==true)
        {
            document.getElementById("turner").textContent="X turn";
        }
        else
        {
            document.getElementById("turner").textContent="O turn";
        }
                
        if((ScoreO==10)||(ScoreX==10))
        {
            ScoreO=0;
            ScoreX=0;
            document.getElementById("ScoreX").textContent=ScoreX;
            document.getElementById("ScoreO").textContent=ScoreO;
        }
    }
}

