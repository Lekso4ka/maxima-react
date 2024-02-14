/*
    https://icons.getbootstrap.com/?q=cloud
    https://bootstrap-4.ru/docs/5.3/content/typography/
    https://react-bootstrap.netlify.app/docs/components/cards
*/

import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import {
    HeartFill,
    CloudFill
} from "react-bootstrap-icons";

import images from "../assets/images";

export default () => {
    return <Container className="bg-light h-100">
        <Row className="g-4">
            {Object.entries(images).map(item => <Col xs={12} md={6} lg={4} xl={3} key={item[0]}>
                <Card className="p-3 h-100 justify-content-between">
                    <Card.Img 
                        src={item[1]} 
                        variant="top" 
                        className="w-100"
                    />
                    <Card.Body style={{flex: "0"}}>
                        <Card.Title>{item[0]}</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro perspiciatis, mollitia quidem aut commodi.
                        </Card.Text>
                        <Button variant="dark">
                            <CloudFill/>
                            <span className="ps-2">Click</span>
                        </Button>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
    </Container>
}