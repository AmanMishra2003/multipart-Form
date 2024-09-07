import Button from "../Button"
import { useState } from "react";
function Control3() {
    const [data, setData] = useState({jobTitle:'', companyName:'', experience:''})
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
    }
    return (
        <form className="ControlContainer" onSubmit={handleSubmission}>
            <h3>Job Details</h3>
            {
                error ? <h5>Every feild is required field...</h5> : <h5 style={{visibility:'hidden'}}>Invisible Text...</h5>
            }
            <div className="controls" >
                <label htmlFor="jobTitle">Job Title :</label>
                <input type="text" id="jobTitle" name="jobTitle" value={data.jobTitle}  onChange={handleChange}/>
            </div>
            <div className="controls">
                <label htmlFor="companyName">Company Name :</label>
                <input type="text" id="companyName" name="companyName" value={data.companyName} onChange={handleChange}/>
            </div>
            <div className="controls"  style={{marginBottom:'20px'}}>
                <label htmlFor="experience">Experience: </label>
                <input type="text" id="experience" name="experience" value={data.experience}  onChange={handleChange} />
            </div>

            
            <div className="btn-grp">
                <Button type="submit"> Submit </Button>
            </div>
            

        </form>
    )
}

export default Control3
