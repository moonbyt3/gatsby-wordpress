import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Navigation = (data) => {
    const menu = data.menu.allWordpressMenusMenusItems.edges[0].node.items;
    
    return(
        <div className="navigation">
            {menu.map(item => {
                return(
                    <Link key={item.object_id} to={item.url}>{item.title}</Link>
                )
            })}
        </div>
    )
}

export default Navigation;
