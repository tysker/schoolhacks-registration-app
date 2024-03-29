import {Link} from "react-router-dom";
import React from "react";

function LinkLogo({element, linkName = ["Link", "Logo"], to = "/"}: {element: React.ReactElement, linkName: string[], to: string}) {
    return (
        <Link className="flex items-center" to={to}>
            {element}
            <p className="inline">
                {linkName[0]}<span className="text-rose-600">{linkName[1]}</span>
            </p>
        </Link>
    );
}

export default LinkLogo;