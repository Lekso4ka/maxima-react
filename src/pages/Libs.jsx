
/*
    https://mui.com/material-ui/material-icons/?theme=Rounded
    https://mui.com/material-ui/react-slider/
    https://ant.design/
*/

import {Row, Col} from "antd";
// import {Grid} from "@mui/material";
import images from "../assets/images";

export default () => {
    return <>
        <Row>
            <Col span={24}>
                <h2>AntDesign</h2>
            </Col>
            {Object.entries(images).map(item => <Col 
                span={6} key={item[0]}
                >
                    {item[0]}
                </Col>
            )}
        </Row>
        {/* <Grid container>
            <Grid xs={12}>
                <h2>MUI</h2>
            </Grid>
            {Object.entries(images).map(item => <Grid 
                xs={12} sm={6} md={4} key={item[0]}
                >
                    {item[0]}
                </Grid>
            )}
        </Grid> */}
    </>
}