import { useState } from "react";
import Button from "../Button"
function Control2({changeStage}) {

    const [data, setData] = useState({streetAddress:'', city:'', state:'', postCode:''})
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

    return (
        <form className="ControlContainer" onSubmit={handleSubmission}>
            <h3>Address Details</h3>
            {
                error ? <h5>Every feild is required field...</h5> : <h5 style={{visibility:'hidden'}}>Invisible Text...</h5>
            }
            <div className="controls" style={{alignItems:"start"}} >
                <label htmlFor="streetAddress">Street Address :</label>
                <textarea name="streetAddress" id="streetAddress" rows={10} onChange={handleChange} value={data.streetAddress}></textarea>
            </div>
            <div className="controls" >
                <label htmlFor="city">City :</label>
                <input type="text" id="city" name="city" value={data.city} onChange={handleChange}/>
            </div>
            <div className="controls">
                <label htmlFor="state">State :</label>
                <input type="text" id="state" name="state" value={data.state} onChange={handleChange}/>
            </div>
            <div className="controls"  style={{marginBottom:'20px'}}>
                <label htmlFor="postCode">Postal Code: </label>
                <input type="text" id="postCode" name="postCode" value={data.postCode} onChange={handleChange}/>
            </div>

            
            <div className="btn-grp">
            <Button type="submit">
                    Next
                </Button>
            </div>
            

        </form>
    )
}

export default Control2
