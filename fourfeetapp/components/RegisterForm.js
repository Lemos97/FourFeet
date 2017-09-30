import * as t from "tcomb-form-native";
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";


const Side = t.enums({
    Right: 'Direito',
    Left: 'Esquerdino',
    Both: 'Ambidextro'
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
            placeholder: "Nome",
            auto: "none",
            required: true
        },
        age: {
            type: "Number",
            auto: "none",
            placeholder: "Idade",
            required: true,
            attr: {
                min: 1,
                max: 99
            }
        },
        gender: {
            auto: "none",
            required: true,
            nullOption: { value: null, text: 'Sexo' }
        },
        side: {
            auto: "none",
            nullOption: { value: null, text: 'Escolha o seu lado predominante' }
        }
    }
};

export default class RegisterForm extends Component {
    state = { value: null };

    onPress() {
        const value = this.refs.form.getValue();

        if (!value) {
            return;
        }

        this.props.onSubmit(value);
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
                    style={styles.button}
                    onPress={() => this.onPress()}
                    underlayColor="#99d9f4"
                >
                    <Text style={styles.buttonText}>Register</Text>
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
        color: "white",
        alignSelf: "center"
    },
    button: {
        height: 36,
        width: 200,
        backgroundColor: "#48BBEC",
        borderColor: "#48BBEC",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 25,
        alignSelf: "stretch",
        justifyContent: "center"
    }
});
