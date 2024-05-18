const key="16fb21c9d69f15a418243abe21eedb87";
/*http://apilayer.net/api/validate?access_key=16fb21c9d69f15a418243abe21eedb87&number=+919330113875*/
const btn=document.getElementById("but");
const locf=document.getElementById("locf");
const intf=document.getElementById("intf");
const con=document.getElementById("con");
const loc=document.getElementById("loc");
const sim=document.getElementById("sim");
const line=document.getElementById("line");
const pref=document.getElementById("pref");
const cc=document.getElementById("cc");
const phn=document.getElementById("phn");
btn.onclick=async function work(){
    const num=document.getElementById("phn").value;
    //console.log(num);
    const url=`http://apilayer.net/api/validate?access_key=${key}&number=${num}`;
    let x= await fetch(url);
    const data= await x.json();
    //console.log(data.carrier);
    //access all input boxes

    if(data.valid==false)
    {
        alert("Error in number");
        document.getElementById("phn").value="";
    }
    if(num!=""){
        //put the values
        locf.value=data.local_format;
        intf.value=data.international_format;
        con.value=data.country_name;
        loc.value=data.location;
        sim.value=data.carrier;
        line.value=data.line_type;
        pref.value=data.country_prefix;
        cc.value=data.country_code;
        
    }
}
document.getElementById("res").onclick=()=>{
    phn.value="";
    locf.value="";
    intf.value="";
    con.value="";
    loc.value="";
    sim.value="";
    line.value="";
    pref.value="";
    cc.value="";
}