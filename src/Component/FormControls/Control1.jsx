//https://restcountries.com/v3.1/all api endpoint
import { useEffect, useState } from "react"
import Button from "../Button"

function Control1({changeStage}) {
    const [countryCodes, setCountryCodes] = useState([]);
    const [data, setData] = useState({fname:'', lname:'', email:'', phone:'',countryCode:'' })
    const [error , setError] = useState(false)

    function handleChange(e){
        setError(false);
        const name = e.target.name;
        const value = e.target.value;

        setData(currData=>(
            {
                ...currData,
                [name]:value
            }
        ))
    }

    function handleSubmission(e){
        e.preventDefault();

        const validation = Object.keys(data).map(ele=>{
            if(data[ele]){
                return true;
            }else{
                return false;
            }
        })
        if(!validation.every(ele=>ele)){
            setError(true);
            return
        }

        console.log(data)
        changeStage()
        
    }

    useEffect(
        ()=>{
            async function fetchData(){
                const result = await fetch('https://restcountries.com/v3.1/region/asia')
                const data = await result.json();
                const requiredData = data.map((ele)=>(
                    {
                        name: ele.name,
                        idd: ele.idd,
                        flag: ele.flag
                    }
                ))
                setCountryCodes(requiredData)
                // setCountryCodes
            }
            fetchData();
        },[]
    )
    return (
        <form className="ControlContainer"  onSubmit={handleSubmission}>
            <h3>Personal Information</h3>
            {
                error ? <h5>Every feild is required field...</h5> : <h5 style={{visibility:'hidden'}}>Invisible Text...</h5>
            }
            
                <div className="controls" >
                    <label htmlFor="fname">First Name :</label>
                    <input type="text" id="fname" name="fname" value={data.fname} onChange={handleChange} />
                </div>
                <div className="controls" >
                    <label htmlFor="lname">Last Name :</label>
                    <input type="text" id="lname" name="lname" value={data.lname} onChange={handleChange}/>
                </div>
                <div className="controls">
                    <label htmlFor="email">Email :</label>
                    <input type="text" id="email" name="email" value={data.email} onChange={handleChange}/>
                </div>
                <div className="controls" style={{marginBottom:'20px'}}>
                    <label htmlFor="phone">Phone Number: </label>
                        <select name="countryCode" id="countryCode"value={data.countryCode} onChange={handleChange}>
                            {
                                countryCodes.map((ele,i)=>(
                                    <option key={i} value={ele.idd.root + ele.idd.suffixes[0]}>
                                        {ele.flag} {ele.idd.root + ele.idd.suffixes[0]}
                                    </option>
                                ))
                            }
                        </select>
                        <input type="text" id="phone" name="phone" style={{width:'40%'}} value={data.phone} onChange={handleChange}/>
                </div>

                <Button type="submit">
                    Next
                </Button>
            
        </form>
    )
}

export default Control1
