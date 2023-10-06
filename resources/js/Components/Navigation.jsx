import NavItem from "./NavItem"

const navLinksAuthed = [
    {
        name: "",
        route: "",
        target: "",
    }
]

const navLinksUnAuthed = [
    {
        name: "Anmelden",
        route: "login",
        target: "",
    }
]

export default function Navigation({ auth }) {
    return (
        <div className="navigation">
            <div className="flex">
                <div id="logo_wrapper">
                    <span id="logo">NFT Showcase</span>
                </div>
                <div id="links_wrapper">
                    {auth.user ? MappedLinks(navLinksAuthed) : MappedLinks(navLinksUnAuthed) }
                </div>
            </div>
        </div>
    )
}

const MappedLinks = ({navLinks}) => {
    return navLinks.map(link => (
        <NavItem name={link.name} route={link.route} key={link.name} />
    ))
}