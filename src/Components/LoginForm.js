/**
 * Created by davidchains on 4/17/17.
 */
import React,{ Component } from 'react';
import {CardSection, Card, Button, Input} from './common'

class LoginForm extends Component {
    state = { text: ''}
    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection/>
                <CardSection>
                   <Button>
                      Log In
                   </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;