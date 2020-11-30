import React from 'react'

import '../../src/App.scss'

function Home() {
//     return(
//             <div className="wrapper">
//                 <div className="menu">MENU</div>
//                 <div className="rows">
//                     <div className="content">CONTENT</div>
//                     <div className="content2">MORE CONTENT</div>
//                 </div>
//             </div>
//     )
// }
return(
    <div className="wrapper">
        <header class="header">
            <h1>Header</h1>
        </header>
        <article class="main">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. 
            </p>
        </article>
        <aside class="aside aside1">
            <h1>aside1</h1>
        </aside>
        <aside class="aside aside2">
            <h1>aside2</h1>
        </aside>
        <footer class="footer">
            <h1>footer</h1>
        </footer>
    </div>
)
}
export default Home