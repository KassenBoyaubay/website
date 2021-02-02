import React, { useState } from "react";
import "./autocompleteVanilla.scss";

const AutocompleteVanilla = () => {
  const countryList = [
    "Albania",
    "Colombia",
    "Cuba",
    "El Salvador",
    "Jordan",
    "Kenya",
    "Nepal",
    "Romania",
    "Sri Lanka",
    "Wales",
    "Kazakhstan",
    "Russia",
    "Germany",
    "China",
    "Korea",
    "Japan",
    "Uranus",
  ];

  const [value, setValue] = useState("");
  const [list, setList] = useState(countryList);
  const [show, setShow] = useState(false);
  const [highlighted, setHighlighted] = useState(0);

  const changed = (e) => {
    setValue(e.currentTarget.value);
    setHighlighted(0);
  };

  const keyDown = (e) => {
    if (e.keyCode === "13") {
      e.preventDefault();
    }
  };

  const keyUp = (e) => {
    check(e.currentTarget.value);
    changeHighlight(e);
  };

  function changeHighlight(e) {
    switch (e.keyCode) {
      case 13:
        setValue(list[highlighted]);
        setShow(false);
        setHighlighted(0);
        break;
      case 38:
        if (highlighted > 0) {
          setHighlighted(highlighted - 1);
        } else setHighlighted(list.length - 1);
        break;
      case 40:
        if (highlighted < list.length - 1) {
          setHighlighted(highlighted + 1);
        } else setHighlighted(0);
        break;
      default:
        break;
    }
  }

  function check(str) {
    let cl = countryList;
    let check = cl.filter(
      (item) => item.includes(str) || item.toLowerCase().includes(str)
    );
    setList(check);
    if (check.length !== cl.length) setShow(true);
  }

  const displayAll = (e) => {
    let cl = countryList;
    let check = cl.filter(
      (item) =>
        item.includes(e.currentTarget.value) ||
        item.toLowerCase().includes(e.currentTarget.value)
    );
    if (check.length === cl.length) {
      setShow(true);
      changeHighlight(e);
    }
  };

  const remove = (e) => {
    if (
      e.target.id !== "country" &&
      e.target.id !== "autocomplete-results" &&
      e.target.parentElement.id !== "autocomplete-results"
    )
      setShow(false);
  };

  return (
    <div className="AutocompleteVanilla" onClick={(e) => remove(e)}>
      <div className="av-container">
        <form action="" autoComplete="off">
          <label for="autocomplete">Please enter your country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Type here"
            onChange={(e) => changed(e)}
            onKeyDown={(e) => keyDown(e)}
            onKeyUp={(e) => keyUp(e)}
            onFocus={(e) => keyUp(e)}
            value={value}
            onClick={(e) => displayAll(e)}
          />
        </form>
        <ul
          id="autocomplete-results"
          className={show ? "visible" : ""}
          style={
            list.length === 0 ? { border: "0" } : { border: "1px solid #e2e8ee" }
          }
        >
          {list.map((item, i) => (
            <li
              className={`result ${i === highlighted ? "highlighted" : ""}`}
              onClick={() => setHighlighted(i)}
              onDoubleClick={() => {
                setValue(list[highlighted]);
                setShow(false);
                setHighlighted(0);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutocompleteVanilla;
