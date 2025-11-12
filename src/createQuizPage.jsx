import React    from "react";
import ReactDOM from "react-dom/client";

import { Link } from "react-router-dom"

const NewQuizSetNameCallback = () => {
    const name = prompt("Enter quiz name: ");
    const quizNameP = document.querySelector("#new-quiz-name");
    quizNameP.textContent = name;
}

export function CreateNewQuizPage() {
    return (
        <>
            <div className="new-quiz-manage-panel">
                <div className="new-quiz-showcase">
                    <div id="new-quiz-name-div">
                        <p id="new-quiz-name">Untitled 1</p>
                    </div>
                </div>
                <div className="new-quiz-management-div">
                    <div id="new-quiz-management-edit-buttons-div">
                        <button id="new-quiz-set-name-button"
                                className="new-quiz-edit-button transition-300ms"
                                onClick={ NewQuizSetNameCallback }>
                            Set quiz name
                        </button>
                        <button id="new-quiz-add-question-button" className="new-quiz-edit-button transition-300ms">
                            Add question
                        </button>
                    </div>
                    <div id="new-quiz-save-button-div">
                        <button id="new-quiz-save-button" className="transition-300ms">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export function CreateQuizPage() {
    return (
        <>
            <div className="create-quiz-div">
                <div className="create-quiz-aside-and-content">
                    <div className="create-quiz-aside"></div>
                    <div className="create-quiz-content">
                        <Link to="/create/new" className="create-quiz-new-button transition-300ms">
                            Create New Quiz
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}