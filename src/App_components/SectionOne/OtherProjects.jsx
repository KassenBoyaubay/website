import React, { useState, useEffect } from 'react'
import axios from "axios";
// Components
import ButtonNeon from "../../components/button_neon_light/buttonNeon";
import ToggleMode from "../../components/dark_light_toggle_mode/toggleMode";
import FlexGallery from "../../components/flex_gallery/flexGallery";
import RealPhone from "../../components/real_phone/realPhone";
import SignForm from "../../components/sign_form/signForm";
import SkewedBorderBox from "../../components/skewed_border_box/skewedBorderBox";
import StatsCard from "../../components/stats_card/statsCard";

const buttonNeonContainer = {
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
    background: "#031321",
    fontFamily: "consolas",
};

const signFormContainer = {
    background: "#f6f5f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: ["Montserrat", "sans-serif"],
    height: "80vh",
};

const skewedBorderBoxContainer = {
    minHeight: "100vh",
    background: "#060c21",
};

function OtherProjects() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fake Back-end API
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => {
                console.log(res.data);
                setTodos(res.data);
            });
    }, []);

    /*
    // Post to server (Add todo)
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })  // and after change data of states
    .then(res => this.setState({
      [...this.state.todos, res.data]
    }))
 
    // Delete from server
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  */

    return (
        <div>
            <div style={buttonNeonContainer}>
                <ButtonNeon name={"Neon Button"} />
            </div>
            <ToggleMode />
            <FlexGallery />
            <RealPhone />
            <div style={signFormContainer}>
                <SignForm />
            </div>
            <div style={skewedBorderBoxContainer}>
                <SkewedBorderBox />
            </div>
            <StatsCard />
            <div className="todos">
                <div><h2>ToDo API</h2></div>
                {todos.map((todo) => (
                    <p key={todo.id}>
                        {todo.id}. {todo.title}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default OtherProjects
