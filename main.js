students=[];

function submit()
{
    name1=document.getElementById("name1").value;
    name2=document.getElementById("name2").value;
    name3=document.getElementById("name3").value;
    name4=document.getElementById("name4").value;

    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);

    document.getElementById("result").innerHTML=students;
    document.getElementById("sub").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort()
{
    students.sort();
    document.getElementById("result").innerHTML=students;
}

