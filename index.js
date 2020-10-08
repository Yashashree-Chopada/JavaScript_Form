function validate()
{
	var fname = stdreg.fname.value;
    var lname = stdreg.lname.value;
    var email = stdreg.EmailID.value;
    var uno = stdreg.uno.value;
    var bday = stdreg.birthday.value;
    var pass = stdreg.password.value;
    var flag = false;
    var str = "";
    var efilter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(fname.trim()===""){
        flag=true;
        str +="  First name should not be blank!!\n";
    }
    if(lname.trim()===""){
        flag=true;
        str +="  Last name should not be blank!!\n";
    }
    if(!efilter.test(email)){
        flag=true;
        str +="  Email is not valid!!!\n";
    }
    if(isNaN(uno)||uno.length<12){
        flag = true;
        str+="  Mobile Number is not valid!!\n";
    }
    if(bday.trim()===""){
        flag=true;
        str +="  Birthdate should not be blank!!\n";
    }
    if(pass.trim()===""){
        flag=true;
        str +="  Password is Blank !!\n";
    }
    if(flag){
        alert("Warning!!\n"+str);
        return false;
    }
    else{
        return true;
    }
}
