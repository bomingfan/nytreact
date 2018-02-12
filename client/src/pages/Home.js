import React from "react";
import {Container, Col, Row} from "../components/Grid";
import Title from "../components/Title";
import Panel from "../components/Panel";
import Form from "../components/Form";
import API from "../utils/API";




class Home extends React.Component {
    state = {
        articles: [],
        q: '',
        begin_date: '',
        end_date: ''
    }

    handleFormInput = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    getArticles = () => {
       API.getArticles({
           q: this.state.q,
           begin_date: this.state.begin_date,
           end_date: this.state.end_date
       }).then(res => 
    this.setState({
        articles: res.data
    })
)
};

    handleFormSubmit = event => {
        event.preventDefault();
        this.getArticles();
  };


    render () {
        return(
            <Container fluid>
            <Title>
            New York Times Search
            </Title>

            <Row>
            <Panel title="Search Parameter">
            <Form 
            handleFormInput={this.handleFormInput}
            handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
            begin_date={this.state.begin_date}
            end_date={this.state.end_date}
            >
            </Form>
            </Panel>
            </Row>

            <Row>
            <Panel title="Results">

            </Panel>
            </Row>

            <Row>
            <Panel title="Saved Articles">
            
            </Panel>
            </Row>

            </Container>
        )
    }

}

export default Home;