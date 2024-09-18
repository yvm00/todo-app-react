import folder from "../image/folder.png"

function Header() {

    return(
        <div className="header" >            
            <div className="header__text">
                <img className="header__img" src={folder} alt="folder"/>
                <span>Taski</span>
            </div>
        </div>
    )
}

export {Header}