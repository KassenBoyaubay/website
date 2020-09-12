import React, { useState } from "react";
import { useEffect } from "react";

const TodoVanilla = () => {
  const [alertText, setAlertText] = useState("");
  const [alertClass, setAlertClass] = useState("");
  const [submitBtn, setSubmitBtn] = useState("submit");
  const [showContainer, setShowContainer] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const [editNumber, setEditNumber] = useState(-1);
  const [value, setValue] = useState("");
  const [listItems, setListItems] = useState([]);

  function addToLocalStorage(id, val) {
    const grocery = { id, val };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
  }

  function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }

  function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items
      .filter(function (item) {
        if (item.id !== id) {
          return item;
        }
      })
      .map((item) =>
        item.id < id
          ? (item = item)
          : (item = {
              id: item.id - 1,
              val: item.val,
            })
      );

    localStorage.setItem("list", JSON.stringify(items));
  }

  function editLocalStorage(id, val) {
    let items = getLocalStorage();

    items = items.map(function (item) {
      if (item.id === id) {
        item.val = val;
      }
      return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
  }

  function removeFromLocalStorageAll() {
    let items = getLocalStorage();

    items = [];

    localStorage.setItem("list", JSON.stringify(items));
  }

  const addItem = (e) => {
    e.preventDefault();

    if (value !== "" && !editFlag) {
      setListItems([
        ...listItems,
        {
          title: value,
        },
      ]);
      setShowContainer("show-container");
      displayAlert("item added to the list", "success");
      addToLocalStorage(listItems.length, value);
    } else if (value !== "" && editFlag) {
      setListItems(
        listItems.map((item, i) => {
          return i == editNumber ? { title: value } : item;
        })
      );
      editLocalStorage(editNumber, value);
      setBackToDefault();
      displayAlert("value changed", "success");
    } else {
      displayAlert("please enter value", "danger");
    }
    setValue("");
  };

  function setBackToDefault() {
    setEditFlag(false);
    setSubmitBtn("submit");
    setEditNumber(-1);
  }

  function editItem(id) {
    setEditFlag(true);
    setSubmitBtn("edit");
    setEditNumber(id);
    setValue(listItems[id].title);
  }

  function displayAlert(text, action) {
    setAlertText(text);
    setAlertClass(`alert-${action}`);
    setTimeout(function () {
      setAlertText("");
      setAlertClass("");
    }, 1000);
  }

  function deleteItem(id) {
    if (listItems.length == 1) {
      setShowContainer("");
    }
    setListItems(listItems.filter((item, i) => i !== id));
    removeFromLocalStorage(id);
    displayAlert("item removed", "danger");
    setBackToDefault();
  }

  function clearItems() {
    setListItems([]);
    setShowContainer("");
    removeFromLocalStorageAll();
    setBackToDefault();
    displayAlert("items removed", "danger");
    setValue("");
  }

  return (
    <div className="mySass TodoVanilla">
      <section className="section-center">
        <form
          className="grocery-form"
          autoComplete="off"
          onSubmit={(e) => addItem(e)}
        >
          <p className={`td-alert ${alertClass}`}>{alertText}</p>
          <h3>grocery bud</h3>
          <div className="td-form-control">
            <input
              type="text"
              id="grocery"
              placeholder="e.g. eggs"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {submitBtn}
            </button>
          </div>
        </form>
        <div className={`grocery-container ${showContainer}`}>
          <div className="grocery-list">
            {listItems.map((item, id) => (
              <article data-id={id} className="grocery-item">
                <p className="title">{item.title}</p>
                <div className="btn-container">
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => editItem(id)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteItem(id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <button className="clear-btn" onClick={() => clearItems()}>
            clear items
          </button>
        </div>
      </section>
    </div>
  );
};

export default TodoVanilla;
