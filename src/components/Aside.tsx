import { NavLink } from "react-router-dom";

// styles
import "./Aside.scss";
import { CollapsibleMenu } from "./CollapsibleMenu";

// data
import navLinkData from "../Data/navLinkData";

// types


const Aside = () => {

  return (
    <div className="aside">
        <CollapsibleMenu title="Dávid Šetek" isOpenDefault={false}>
            <CollapsibleMenu title="React I" isOpenDefault={false}>
                {navLinkData.filter((navlink) => {
                    return navlink.category === 'react1'
                }).map( (navlink) => {
                    return <NavLink key={navlink.id} className={navlink.className} to={navlink.to}>
                        {navlink.projectName}
                    </NavLink>
                })}
            </CollapsibleMenu>

            <CollapsibleMenu title="React II" isOpenDefault={false}>
                {navLinkData.filter((navlink) => {
                    return navlink.category === 'react2'
                }).map( (navlink) => {
                    return <NavLink key={navlink.id} className={navlink.className} to={navlink.to}>
                        {navlink.projectName}
                    </NavLink>
                })}
            </CollapsibleMenu>

            <CollapsibleMenu title="React III" isOpenDefault={false} >
                {navLinkData.filter((navlink) => {
                    return navlink.category === 'react3'
                }).map( (navlink) => {
                return <NavLink key={navlink.id} className={navlink.className} to={navlink.to}>
                    {navlink.projectName}
                    </NavLink>
                })}
            </CollapsibleMenu>
        </CollapsibleMenu>

        <hr style={{
            background: "#898b8b",
            width: "100%",
            height: 5,
            }}
        />

        <CollapsibleMenu title="Moje Appky" isOpenDefault={true} >
            {navLinkData.filter((navlink) => {
            return navlink.category === 'moje'
            }).map( (navlink) => {
            return <NavLink key={navlink.id} className={navlink.className} to={navlink.to}>
                {navlink.projectName}
                </NavLink>
            })}
        </CollapsibleMenu>
        </div>
    );
};

export default Aside;
