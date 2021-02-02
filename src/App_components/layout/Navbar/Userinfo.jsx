import React, { useState } from 'react'
// Context
import { Text } from "../../../App_util/Context/LanguageContext"
// MUI stuff
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Userinfo() {
    const [open, setOpen] = useState("")

    return (
        <>
            <Tooltip
                aria-label="my info"
                placement="bottom"
                title={Text({ tid: "nav_tooltip_info" })}
            >
                <IconButton
                    onClick={() => setOpen("open-modal")}
                    color="inherit" aria-label="my info">
                    <AccountCircleIcon />
                </IconButton>
            </Tooltip>
            {open &&
                <div className="mySass Modal">
                    <div className={`modal-overlay ${open}`}>
                        <div className="modal-container">
                            <h3>My contact info</h3>
                            <h5>email: kassen.boyaubay@nu.edu.kz</h5>
                            <h5>instagram: &nbsp;
                                <a href="https://www.instagram.com/kassenboyaubay/" target="_blank"
                                    rel="noopener noreferrer"
                                >kassenboyaubay</a>
                            </h5>
                            <button className="close-btn" onClick={() => setOpen("")}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Userinfo
