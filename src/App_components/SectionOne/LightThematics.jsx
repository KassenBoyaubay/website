import React from 'react'
// components
import Menu from "../../components/menu/menu";
import CountdownTimer from "../../components/countdown_timer/countdownTimer";
import ColorFlipper from "../../components/color_flipper/colorFlippper";
import Counter from "../../components/counter/counter";
import Reviews from "../../components/reviews/reviews";
import Sidebar from "../../components/sidebar/sidebar";
import Modal from "../../components/modal/modal";
import Questions from "../../components/questions/questions";
import TextGenerator from "../../components/text_generator/textGenerator";
import TodoVanilla from "../../components/todo_vanilla/todoVanilla";
import SliderReview from "../../components/slider_review/sliderReview";
import TypingTest from "../../components/typing_test/TypingTest";
import ImageLightbox from "../../components/image_lightbox/imageLightbox";
import Tabs1 from "../../components/tabs1/tabs1";
import Tabs2 from "../../components/tabs2/tabs2";
import AutocompleteVanilla from "../../components/autocomplete_vanilla/autocompleteVanilla";

function LightThematics() {
    return (
        <div style={{ backgroundColor: '#f1f5f8' }}>
            <Menu />
            <CountdownTimer />
            <ColorFlipper />
            <Counter />
            <Sidebar />
            <Modal />
            <Questions />
            <TodoVanilla />
            <TextGenerator />
            <TypingTest />  {/* Remove to toher projects somewhere or change color & put on top*/}
            <AutocompleteVanilla />
            <ImageLightbox />
            <Reviews />
            <SliderReview /> {/* style state works for 3, if more remove style and change in scss */}
            <Tabs1 />
            <Tabs2 />
        </div>
    )
}

export default LightThematics