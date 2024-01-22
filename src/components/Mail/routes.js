
import {lazy} from "react"
const Main=lazy(()=>import("./View"))
const EmailList=lazy(()=>import("./EmailList"))
const View=lazy(()=>import("./View"))
const routes={
    main:{
        path:"/",
        element:Main
    },
    emails:{
        path:"/emails",
        element:EmailList
    },
    invalid :{
        path:"/*",
        element:EmailList
    },
    view :{
        path:"/view",
        element:View
    }
    
    
}
export {routes}