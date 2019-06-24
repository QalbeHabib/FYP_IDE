import React, { Component } from "react";
import { Terminal } from 'xterm';
import "xterm/dist/xterm.css";
import "xterm/dist/xterm.js";
import * as fit from 'xterm/lib/addons/fit/fit';

class Term extends Component {
    componentDidMount() {
        Terminal.applyAddon(fit);
        var xterm = new Terminal();
        xterm.open(this.refs.terminal);
        xterm.fit();
        xterm.focus();
        xterm.on('key', (key, ev) => {
            // console.log(key.charCodeAt(0));
            if (key.charCodeAt(0) == 13) {
                // xterm.write('\n');
                this.props.socket.emit("message", '\n');
            }
            // xterm.write(key);
            // console.log(key);
            this.props.socket.emit("message", key);
        });
        this.props.socket.on("responce", res => {
            xterm.focus();
            xterm.write(res);
            console.log(res);
        });
        this.props.socket.on("running", val => {
            if (val) {
                xterm.clear();
                xterm.reset();
            }
        })
    }
    render() {
        return (
            <div ref="terminal" style={{ width: "100%" }}></div>
        );
    }
}
export default Term;