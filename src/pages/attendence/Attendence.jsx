import Navbar from "../../components/navbar/Navbar";
import './attendence.css';

const Attendance = () => {
    return (
        <Navbar>
            <div style={{margin:'20px'}}>
                <h1>Attendance of the day</h1>
                <div class="flex-container">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div class="absent">4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </div>
            </div>
        </Navbar>
    )
}

export default Attendance;