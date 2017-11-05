import * as t from "tcomb-form-native";
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import Colors from '../constants/Colors';


const Side = t.enums({
    Right: 'Destro',
    Left: 'Esquerdino',
    Both: 'Ambidestro'
});

var Gender = t.enums({
    M: 'Homem',
    F: 'Mulher'
});

const Person = t.struct({
    name: t.String,
    age: t.Number,
    gender: Gender,
    side: Side
});

const layout = {
    fields: {
        name: {
            type: "String",
            editable: false,
            placeholder: "Nome",
            auto: "none",
            // error: <Text style={{ color: Colors.errorText }}> O nome é campo obrigatório </Text>,
        },
        age: {
            type: "Number",
            auto: "none",
            placeholder: "Idade",
            error: <Text style={{ color: Colors.errorText }}> A idade é um campo obrigatório </Text>,
            attr: {
                min: 1,
                max: 99
            }
        },
        gender: {
            auto: "none",
            error: <Text style={{ color: Colors.errorText }}> O campo "sexo" é obrigatório </Text>,
            nullOption: { value: null, text: 'Sexo' }
        },
        side: {
            auto: "none",
            nullOption: { value: null, text: 'Escolha o seu lado predominante' },
            error: <Text style={{ color: Colors.errorText }}> O campo "lado predominante" é obrigatório </Text>,
        }
    }
};

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            disabled: true
        };
    }

    onPress() {
        const value = this.refs.form.getValue();
        // console.log(value)
        if (!value) {
            return;
        }

        this.props.onSubmit(value);

    }


    componentDidUpdate(_, prevState) {
        if (this.state.value !== prevState.value) {
            this.setState({ disabled: false })
        } else {
            this.setState({ disabled: true })
        }
    }

    componentWillMount() {
        if (this.props.data !== {}) {
            this.setState({ value: this.props.data })
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <t.form.Form
                    ref="form"
                    type={Person}
                    options={layout}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                />

                <TouchableHighlight
                    style={this.state.disabled ? [styles.buttonDisabled, styles.button] : styles.button}
                    onPress={() => this.onPress()}
                    underlayColor="#99d9f4"
                    disabled={this.state.disabled}
                >
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        fontSize: 18,
        color: "grey",
        alignSelf: "center"
    },
    error: {
        color: Colors.errorText,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    button: {
        height: 36,
        width: 200,
        backgroundColor: Colors.lightBlue,
        borderColor: Colors.lightBlue,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 25,
        alignSelf: "stretch",
        justifyContent: "center"
    },
    buttonDisabled: {
        opacity: .4,
    }
});
