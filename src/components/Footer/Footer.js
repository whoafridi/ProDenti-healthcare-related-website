import { Button, InputGroup, FormControl } from 'react-bootstrap'
import './Footer.css'
const Footer = ()=>{
return (
    <div className="container mt-5 footer">
        <div className="container w-35">
            <h2 className="text-center mt-2 mb-2 fw-bold title">Subscribe to our newsletter</h2>
        <InputGroup className="">
            <FormControl
                placeholder="Your email address"
                aria-label="Your email"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Subscribe
            </Button>
        </InputGroup>
        </div>
        <h2 className="text-center mt-2 mb-2 fw-bold title">Follow social network</h2>
        <div className="icons mt-2">
            <h1><i className='bx bxl-facebook-circle'></i></h1>
            <h1><i className='bx bxl-twitter'></i></h1>
            <h1><i className='bx bxl-linkedin' ></i></h1>
        </div>
        <h5 className="text-center mt-2 title">Copyright © 2020 ProDenti All Rights Reserved.</h5>
    </div>
)
}

export default Footer;