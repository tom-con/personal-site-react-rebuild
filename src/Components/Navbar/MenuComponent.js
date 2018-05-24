import React from 'react'

const MenuComponent = ({children}) => {
    return (
        <nav className="navbar navbar-default navbar-sticky">
            <div className="container-fluid">

                {/* <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> 
                        <span className="sr-only">Toggle navigation</span> 
                        <span className="icon-bar" /> 
                        <span className="icon-bar" /> 
                        <span className="icon-bar" /> 
                    </button>
                </div> */}
                
                <div className="navbar-collapse collapse">  
                    <ul className="nav navbar-nav">
                       {children}
                    </ul>
                
                </div>			
            </div>	
        </nav>
    )
}

export default MenuComponent