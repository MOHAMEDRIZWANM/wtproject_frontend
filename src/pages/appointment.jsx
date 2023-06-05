import React, { useState,useNavigate} from 'react';
import "../css/appointment.css"
import { Link } from 'react-router-dom';
function Appointment() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [problemtype, setProblemType] = useState('');


    function handleSubmit() {
        const data={
            name:name,
            email:email,
            phone:phone,
        }
        fetch(`https://laptopservice.onrender.com/user/${email}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
            if(data?.email===email){
                // alert('update');
            }
            else{
                alert('Not found');
            }
            console.log(data)
          })
          .catch(err => console.log(err));
        const info={
            email:email,
            accepteddate:date,
            problemtype:problemtype
        }
        
        fetch(`https://laptopservice.onrender.com/info`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
          if(data?.email===email){
              alert('update');
          }
          else{
              console.log('Not'+data);
          }
          console.log(data)
        })
        .catch(err => console.log(err));
    };
    

    return (
      <div id='body'>
        <div className='image'>
        <div id='class'></div>
        <div class="container1">
		<h1 className='head'>Laptop Service Appointment</h1>
		<form>
			<label className='topic' for="name">Name:</label>
			<input className='given' type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)}/>

			<label className='topic' for="phone">Phone:</label>
			<input className='given' type="tel" id="phone" name="phone"onChange={(e)=> setPhone(e.target.value)} />

			<label className='topic' for="email">Email:</label>
			<input className='given appemail' type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} />


			<label className='topic' for="date">Date:</label>
			<input className='given' type="date" id="date" name="date"  onChange={(e)=> setDate(e.target.value)} />

			<label className='topic' for="problem-type">Problem Type:</label>
			<input className='given' type="text" id="problem-type" name="problem-type"  onChange={(e)=> setProblemType(e.target.value)} />

			{/* <!-- <select id="problem-type" name="problem-type" />
				<option value="" selected disabled>Select the type of problem</option>
				<option value="Hardware Issue">Hardware Issue</option>  
				<option value="Software Issue">Software Issue</option>
				<option value="Virus Removal">Virus Removal</option>
				<option value="Data Recovery">Data Recovery</option>
				<option value="Other">Other</option>
			</select> --> */}
			<input className='given' type="submit" value="Send a Request"  onClick={()=>handleSubmit()}/>
		</form>
	</div>
        </div>
      </div>

                    );
}

export default Appointment
