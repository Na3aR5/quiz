import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Link } from "react-router-dom";

class Question {
    constructor () {}

    questionString;
    answers;
    rightAnswerNumber;
}

class QuizInfo {
    constructor () {}

    quizID;
    quizName;
    questions;
};

let currentQuizInfo;

const NewQuizSetNameCallback = () => {
    const name = prompt("Enter quiz name: ");
    const quizNameP = document.querySelector("#new-quiz-name");
    quizNameP.textContent = name;
    currentQuizInfo.quizName = name;
}

const NewQuizSaveCallback = () => {
    let savedQuizes = JSON.parse(localStorage.getItem("saved-quizes"));
    if (currentQuizInfo.quizID < savedQuizes.length) {
        savedQuizes[currentQuizInfo.quizID] = currentQuizInfo;
    }
    else {
        savedQuizes.push(currentQuizInfo);
    }
    localStorage.setItem("saved-quizes", JSON.stringify(savedQuizes));
}

const CreateNewQuizCallback = (loadQuiz, quizID) => {
    const savedQuizes = JSON.parse(localStorage.getItem("saved-quizes"));
    if (loadQuiz === true) {
        currentQuizInfo = savedQuizes[quizID];
    }
    else {
        currentQuizInfo = new QuizInfo();
        currentQuizInfo.quizID = savedQuizes.length;
        currentQuizInfo.quizName = "Untitled 1";
    }
}

const ShowQuizPageInfo = () => {
    const quizNameP = document.querySelector("#new-quiz-name");

    quizNameP.textContent = currentQuizInfo.quizName;
}

export function CreateNewQuizPage() {
    useEffect(() => {
        ShowQuizPageInfo();
    }, []);

    return (
        <>
            <div className="new-quiz-manage-panel">
                <div className="new-quiz-showcase">
                    <div id="new-quiz-name-div">
                        <p id="new-quiz-name"></p>
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
                        <button id="new-quiz-save-button" className="transition-300ms"
                                onClick={ NewQuizSaveCallback }>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export function SavedQuizesPage() {
    const savedQuizes = JSON.parse(localStorage.getItem("saved-quizes"));

    const quizButtons = [];
    for (let i = 0; i < savedQuizes.length; ++i) {
        quizButtons.push(
            <Link to="/create/new" key={i} className="saved-quiz-button"
                  onClick={ () => CreateNewQuizCallback(true, i) }>
                { savedQuizes[i].quizName }
            </Link>
        );
    }

    return (
        <>
            <div id="saved-quizes-div">
                { quizButtons }
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
                        <Link to="/create/new" className="create-quiz-new-button transition-300ms"
                              onClick={ () => CreateNewQuizCallback(false, 0) }>
                            Create New Quiz
                        </Link>
                        <Link to="/create/saved" className="create-quiz-new-button transition-300ms">
                            Saved Quizes
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

const AllocateQuizesStorage = () => {
    if (localStorage.getItem("saved-quizes") === null) {
        localStorage.setItem("saved-quizes", JSON.stringify([]));
    }
}

AllocateQuizesStorage();