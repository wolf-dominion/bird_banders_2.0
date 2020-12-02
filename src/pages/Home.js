import React from 'react'
import '../../src/App.scss'
import UserSidebar from '../../src/ui-components/UserSidebar'
import useVisibilityToggle from '../../src/hooks/useVisibilityToggle'

function Home() {

    // const [Sidebar, toggleBarVisibility] = useVisibilityToggle(
    //     <UserSidebar onClick={toggleBarVisibility}/>, 
    //     true
    // );

return(
    <div className='wrapper'>
        {/* {Sidebar} */}
        <UserSidebar />
        <div className='workspace'>
            <div className='group-header'>
                <div className='photo'>
                    photograph here
                </div>
                <div className='group-info'>
                    <h3>Group Name</h3>
                    <br></br>
                    <p>Description: yeeeeee haaawwww</p>
                </div>
            </div>
            <div className='main-content-area'>
                <div className='tabs'>tabs   one     two     three   four  five     six     seven   eight</div>
                <div className='content'>content woohoo</div>
            </div>
        </div>
    </div>
)
}
export default Home