import { useEffect, useState } from "react";

export default function useFetch() {
    const[question, setQuestion] = useState([])
    useEffect(() => {
        fetchQuestions()
    }, [])

    const fetchQuestions = async() => {
        const data = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
        const results = await data.json()
        setQuestion(results.results)
    }
    return question;
}
