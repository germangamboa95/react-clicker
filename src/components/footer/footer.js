import React from "react"


const styles = {
    backgroundColor: "LightSlateGray ",
    color: "HoneyDew" ,
    paddingTop: ".75em"
}

const Footer = () => (
    <footer className="text-center" style={styles}>
        <p>German Gamboa &copy; {new Date().getFullYear()}</p>
    </footer>
)

export default Footer