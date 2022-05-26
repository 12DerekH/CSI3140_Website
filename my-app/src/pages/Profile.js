import './Profile.css'

const Profile = () => {

    return (
        <center>
            <div class="box">
                <div class="title">Profile</div>
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="Last name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <button>Save</button>
            </div>
        </center>
    )
}



export default Profile