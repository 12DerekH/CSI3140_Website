import './Styles.css'

const Profile = () => {

    return (
        <div class="container"> 
                <div class="titleProfile">Account Settings</div><br/>
                <div class="belowtitle">Your email address is your identity in Quizzle and is used to log in</div>
                <input class="info" type="text" placeholder="First name"/>
                <input class="info" type="text" placeholder="Last name"/>
                <input class="info" type="email" placeholder="Email"/>
                <input class="info" type="text" placeholder="Password"/>
                <button>Save</button>
        </div>
    )
}


export default Profile