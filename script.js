function getName(){
    var gender = document.getElementById('gender').value;   
    var dob = document.getElementById('dob').value;

    if(gender==''||dob==''){
        alert('ensure all fields are not empty!');
    }else{

        var date = new Date(dob);
        var day = date.getDay();

        if(gender=='male'){
            switch(day){
                case 0:
                name = 'Kwasi';
                break;    
                case 1:
                name = 'Kwado';
                break;    
                case 2:
                name = 'Kwabena';
                break;    
                case 3:
                name = 'Kwaku';
                break;    
                case 4:
                name = 'Yaw';
                break;    
                case 5:
                name = 'Kofi';
                break;    
                case 6:
                name = 'Kwame';
                break;
                default:
                name = 'error';                    
            }
        }else{
                switch(day){
                case 0:
                name = 'Akosua';
                break;    
                case 1:
                name = 'Adwoa';
                break;    
                case 2:
                name = 'Abenaa';
                break;    
                case 3:
                name = 'Akua';
                break;    
                case 4:
                name = 'Yaa';
                break;    
                case 5:
                name = 'Afua';
                break;    
                case 6:
                name = 'Ama';
                break;
                default:
                name = 'error';                    
            }
        }

        //display result
        $('#result').modal('show');
        document.getElementById("resulttxt").innerHTML = name;
        //clear inputs
         document.getElementById('gender').value = '';
         document.getElementById('dob').value = '';

    }
}
