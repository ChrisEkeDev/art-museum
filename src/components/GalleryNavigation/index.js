import { NavLink } from "react-router-dom";

function GalleryNavigation (props) {
    const {galleries} = props
    console.log(galleries)
    return (
    <nav>
        <NavLink to="/"></NavLink>
        {galleries.map(gallery=>{
            return(
                <NavLink to = {`/galleries/${gallery.id}`} key = {gallery.id}>
                    {gallery.labeltext}
                </NavLink>
            )
        })}
    </nav>)
}

export default GalleryNavigation
